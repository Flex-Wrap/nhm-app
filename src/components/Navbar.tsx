import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import IconDiscover from "../assets/icon-discover.svg?react";
import IconExhibitions from "../assets/icon-exhibitions.svg?react";
import IconMap from "../assets/icon-map.svg?react";
import IconSchedule from "../assets/icon-events.svg?react";
import { getLastPath, isSectionActive } from "../utils/pathTracker";
import { useNavbarTheme } from "./NavbarThemeContext";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { background, foreground } = useNavbarTheme();

  const navItems = [
    {
      label: "Discover",
      icon: <IconDiscover className="navbar-icon" />,
      section: "discover",
    },
    {
      label: "Exhibitions",
      icon: <IconExhibitions className="navbar-icon" />,
      section: "exhibitions",
    },
    {
      label: "Map",
      icon: <IconMap className="navbar-icon" />,
      section: "map",
    },
    {
      label: "Schedule",
      icon: <IconSchedule className="navbar-icon" />, 
      section: "schedule",
    },
  ] as const;

  return (
    <div
      style={
        {
          "--navbar-bg-color": `var(${background})`,
          "--navbar-fg-color": `var(${foreground})`,
        } as React.CSSProperties
      }
    >
      <nav className="navbar">
        {navItems.map(({ label, icon, section }) => (
          <div
            key={section}
            onClick={() => navigate(getLastPath(section))}
            className={`navbar-item ${isSectionActive(section, pathname) ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={label}
          >
            {icon}
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};
