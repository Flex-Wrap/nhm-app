import React from "react";
import { Link } from "react-router-dom";
import "./UsefulLinks.css";
import IconArrow from "../assets/icon-arrow.svg?react";

interface UsefulLinksProps {
  className?: string;
}

// 🧭 Local subpages for routing
const usefulLinks = [
  { id: "ticket-prices", label: "Ticket prices" },
  { id: "opening-hours", label: "Opening hours" },
  { id: "route-parking", label: "Route & Parking" },
  { id: "social-media", label: "Social Media" },
  { id: "contact-info", label: "Contact info" },
];

export const UsefulLinks: React.FC<UsefulLinksProps> = ({ className }) => {
  return (
    <div className={`${className ?? ""}`}>
      <h2>Useful links</h2>
      <ul className="useful-links-list">
        {usefulLinks.map((link) => (
          <li key={link.id} className="useful-links-item">
            <Link to={`/infoPages/${link.id}`}>
              <span>{link.label}</span>
              <IconArrow className="arrow-icon" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
