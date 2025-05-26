import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import IconDiscover from "../assets/icon-discover.svg?react";
import IconExhibitions from "../assets/icon-exhibitions.svg?react";
import IconMap from "../assets/icon-map.svg?react";
import IconSchedule from "../assets/icon-events.svg?react";
import { getLastDiscoverPath, isDiscoverActive } from "../utils/pathTracker";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  function handleDiscoverClick() {
    navigate(getLastDiscoverPath());
  }

  return (
    <nav className="navbar">
      <div
        onClick={handleDiscoverClick}
        className={`navbar-item ${isDiscoverActive(pathname) ? "active" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Discover"
      >
        <IconDiscover className="navbar-icon" />
        <span>Discover</span>
      </div>

      <NavLink
        to="/exhibitions"
        className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}
      >
        <IconExhibitions className="navbar-icon" />
        <span>Exhibitions</span>
      </NavLink>

      <NavLink
        to="/map"
        className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}
      >
        <IconMap className="navbar-icon" />
        <span>Map</span>
      </NavLink>

      <NavLink
        to="/schedule"
        className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}
      >
        <IconSchedule className="navbar-icon" />
        <span>Schedule</span>
      </NavLink>
    </nav>
  );
};
