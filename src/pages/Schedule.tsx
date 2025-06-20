import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarPopup } from "../components/CalendarPopup";
import { EventCardMini } from "../components/EventCardMini";
import CalendarIcon from "../assets/calendar-icon.svg";
import "./Schedule.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.jpg";

// Dummy data grouped by month
const eventsByMonth = {
  June: [
    {
      id: "1",
      eventName: "Cinema Night in Yard",
      date: "2025-06-08",
      imgUrl: event1,
    },
    {
      id: "2",
      eventName: "SafariParty",
      date: "2025-06-30",
      imgUrl: event2,
    },
  ],
  July: [
    {
      id: "3",
      eventName: "Scavenger hunt",
      date: "2025-07-20",
      imgUrl: event3,
    },
  ],
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${day} ${month}`;
}

export const Schedule: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const navigate = useNavigate();

  const allEvents = Object.values(eventsByMonth).flat();

  const handleDateClick = (eventId: string) => {
    setIsCalendarOpen(false);
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <h1>Schedule</h1>
        <img
          src={CalendarIcon}
          alt="Calendar Icon"
          className="calendar-icon"
          onClick={() => setIsCalendarOpen(true)}
        />
      </div>

      {Object.entries(eventsByMonth).map(([month, events]) => (
        <div key={month} className="month-section">
          <h2>{month}</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => handleDateClick(event.id)}
                style={{ cursor: "pointer" }}
              >
                <EventCardMini
                  title={event.eventName}
                  date={formatDate(event.date)}
                  imgUrl={event.imgUrl}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {isCalendarOpen && (
        <CalendarPopup
          events={allEvents}
          onClose={() => setIsCalendarOpen(false)}
          onSelectDate={handleDateClick}
        />
      )}
    </div>
  );
};
