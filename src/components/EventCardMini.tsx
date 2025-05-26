import React from "react";
import "./EventCardMini.css";
interface EventCardMiniProps {
  title: string;
  date: string;
  imgUrl: string;
}

export const EventCardMini: React.FC<EventCardMiniProps> = ({
  title,
  date,
  imgUrl,
}) => (
  <div className="event-card-mini">
    <img src={imgUrl} alt={title} />
    <div className="info">
      <div className="small-text">{date}</div>
      <h3>{title}</h3>
    </div>
  </div>
);
