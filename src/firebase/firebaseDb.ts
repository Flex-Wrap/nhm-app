// src/firebase/firebaseDb.ts
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";

export type Event = {
  id: string;
  eventName: string;
  date: string; // ISO format
  imgUrl: string;
  description: string;
};

// Optimize Unsplash or generic image URLs
function optimizeImageUrl(
  url: string,
  width = 300,
  height = 360,
  quality = 70
): string {
  return `${url}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

// 🔁 Realtime listener for upcoming events
export function subscribeToEvents(callback: (events: Event[]) => void) {
  const now = new Date().toISOString();

  const q = query(
    collection(db, "Events"), // all lowercase now
    where("date", ">=", now),
    orderBy("date")
  );
  return onSnapshot(q, (snapshot) => {
    const events: Event[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        eventName: data.eventName,
        date: data.date,
        imgUrl: optimizeImageUrl(data.imgUrl),
        description: data.description,
      };
    });

    callback(events);
  });
}

// 🕓 One-time fetch of upcoming events
export async function getUpcomingEvents(count: number = 2): Promise<Event[]> {
  const now = new Date().toISOString();

  const q = query(
    collection(db, "Events"),
    where("date", ">=", now),
    orderBy("date")
  );

  const snapshot = await getDocs(q);
  const events: Event[] = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      eventName: data.eventName,
      date: data.date,
      imgUrl: optimizeImageUrl(data.imgUrl),
      description: data.description,
    };
  });

  return events.slice(0, count);
}

// Data collection poll

import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";

export async function submitPollVote(answer: "yes" | "no"): Promise<void> {
  const pollRef = doc(db, "PollResults", "results");
  const snapshot = await getDoc(pollRef);

  if (!snapshot.exists()) {
    throw new Error("Poll results document does not exist.");
  }

  const data = snapshot.data();
  const currentVotes = data.votes || { yes: 0, no: 0 };

  // Increment selected vote
  const updatedVotes = {
    ...currentVotes,
    [answer]: (currentVotes[answer] || 0) + 1,
  };

  await updateDoc(pollRef, {
    votes: updatedVotes,
    lastVoteDate: serverTimestamp(),
  });
}

export async function getPollVotes(): Promise<{ yes: number; no: number }> {
  const pollRef = doc(db, "PollResults", "results");
  const snapshot = await getDoc(pollRef);

  if (!snapshot.exists()) {
    return { yes: 0, no: 0 };
  }

  const data = snapshot.data();
  return data.votes || { yes: 0, no: 0 };
}