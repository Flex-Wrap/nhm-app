import React, { useState } from "react";
import "./CalendarPopup.css";

interface Event {
  id: string;
  eventName: string;
  date: string;
}

interface CalendarPopupProps {
  events: Event[];
  onClose: () => void;
  onSelectDate: (eventId: string) => void;
}

export const CalendarPopup: React.FC<CalendarPopupProps> = ({
  events,
  onClose,
  onSelectDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get events in the current month
  const filteredEvents = events.filter((event) => {
    const date = new Date(event.date);
    return (
      date.getMonth() === currentMonth.getMonth() &&
      date.getFullYear() === currentMonth.getFullYear()
    );
  });

  const datesWithEvents = filteredEvents.reduce((acc, event) => {
    const day = new Date(event.date).getDate();
    acc[day] = event;
    return acc;
  }, {} as { [key: number]: Event });

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  return (
    <div className="calendar-overlay">
      <div className="calendar-popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="calendar-header">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <h3>
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </h3>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>

        <div className="calendar-grid">
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const event = datesWithEvents[day];
            return (
              <div
                key={day}
                className={`calendar-day ${event ? "has-event" : ""}`}
                onClick={() => event && onSelectDate(event.id)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
