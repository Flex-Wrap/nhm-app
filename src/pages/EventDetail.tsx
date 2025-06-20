import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.jpg";
import "./EventDetail.css";

// Sample event data (you could later replace this with a real fetch or context)
const eventData: Record<string, any> = {
  "1": {
    title: "Cinema Night in Yard",
    date: "08 June 2025",
    time: "20:00—23:00",
    location: "Museum Yard",
    accessibility: "Wheelchair access",
    image: event1,
    description:
      "A magical outdoor movie experience with popcorn, bean bags, and a big screen. Bring a blanket and enjoy the stars!",
    highlights: [
      "Classic documentaries and nature films",
      "Outdoor seating and snacks",
      "Family-friendly atmosphere",
    ],
  },
  "2": {
    title: "Safari Party",
    date: "30 June 2025",
    time: "18:00—22:00",
    location: "Museum Garden",
    accessibility: "Wheelchair access",
    image: event2,
    description:
      "Dress up and dance under the stars! Explore African-inspired art, music, and food at this immersive celebration.",
    highlights: [
      "Live African drumming and dance",
      "Face painting and costumes",
      "Tropical food and drinks",
    ],
  },
  "3": {
    title: "Scavenger Hunt",
    date: "20 July 2025",
    time: "12:00—15:00",
    location: "Inside Museum",
    accessibility: "Wheelchair access",
    image: event3,
    description:
      "Discover hidden secrets in our exhibits during this exciting scavenger hunt for all ages!",
    highlights: [
      "Solve clues and win prizes",
      "Perfect for families and kids",
      "Learn while you explore",
    ],
  },
};

export const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = eventData[id || ""];

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div id="root">
      <div className="scrollable-container">
        <div className="event-detail-page">
          <BackButton onClick={() => navigate(-1)} />

          <img src={event.image} alt={event.title} className="event-image" />

          <div className="event-info">
            <p className="event-date">{event.date}</p>
            <h1>{event.title}</h1>

            <div className="event-tags">
              <span className="tag">{event.location}</span>
              <span className="tag">{event.time}</span>
              <span className="tag">{event.accessibility}</span>
            </div>

            <p className="event-description">{event.description}</p>

            <h3>Highlights include:</h3>
            <ul>
              {event.highlights.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Sticky nav/footer here if needed */}
    </div>
  );
};
