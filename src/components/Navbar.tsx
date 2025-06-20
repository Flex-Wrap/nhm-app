import React from "react";
import "./Navbar.css";
import IconDiscover from "../assets/icon-discover.svg?react";
import IconExhibitions from "../assets/icon-exhibitions.svg?react";
import IconMap from "../assets/icon-map.svg?react";
import IconSchedule from "../assets/icon-events.svg?react";
import { useNavigation } from "../context/NavigationContext";

export const Navbar: React.FC = () => {
  const { sectionTheme, navigateToSection, isActive } = useNavigation();

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
          "--navbar-bg-color": `var(${sectionTheme.background})`,
          "--navbar-fg-color": `var(${sectionTheme.foreground})`,
        } as React.CSSProperties
      }
    >
      <nav className="navbar">
        {navItems.map(({ label, icon, section }) => (
          <div
            key={section}
            onClick={() => navigateToSection(section)}
            className={`navbar-item ${isActive(section) ? "active" : ""}`}
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
