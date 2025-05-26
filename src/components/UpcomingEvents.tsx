import React, { useEffect, useState } from "react";
import { subscribeToEvents, type Event } from "../firebase/firebaseDb";
import { EventCardMini } from "./EventCardMini";
import IconArrow from "../assets/icon-arrow.svg?react";
import "./UpcomingEvents.css";

interface UpcomingEventsProps {
  className?: string;
}

// Helper to get ordinal suffix
function getOrdinal(n: number) {
  if (n > 3 && n < 21) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// Format date as "July 1st"
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${day}${getOrdinal(day)}`;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  className,
}) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToEvents((fetchedEvents) => {
      setEvents(fetchedEvents.slice(0, 2)); // Limit to 2
    });

    return () => unsubscribe(); // Clean up listener
  }, []);

  return (
    <div className={`${className ?? ""}`}>
      <div className="upcoming-events-header">
        <h2>Upcoming Events</h2>
        <IconArrow className="arrow" />
      </div>
      {events.map((event) => (
        <EventCardMini
          key={event.id}
          title={event.eventName}
          date={formatDate(event.date)}
          imgUrl={event.imgUrl}
        />
      ))}
    </div>
  );
};
