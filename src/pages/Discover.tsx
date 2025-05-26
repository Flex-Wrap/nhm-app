import React from "react";
import { Stories } from "../components/Stories";
import "./Discover.css";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { UsefulLinks } from "../components/UsefulLinks";

export const Discover: React.FC = () => {

  return (
    <div className="scrollable-container">
      <Stories className="story-scroll-container content"/>
      <UpcomingEvents className="upcoming-events-container content"/>
      <UsefulLinks className="useful-links-container content"/>
    </div>
  );
};