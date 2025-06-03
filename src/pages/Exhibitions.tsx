import React from "react";
import ExhibitionsCutout from "../components/ExhibitionsCutout";
import leftImg from "../assets/oops.jpg";
import rightImg from "../assets/beetles.jpg";
import bottomImg from "../assets/backyard1.jpg";
import africaImg from "../assets/safari1.jpg";
import natureImg from "../assets/ournature.jpg";
import "./Exhibitions.css";

export const Exhibitions: React.FC = () => {
  return (
    <div className="scrollable-container content">
      <ExhibitionsCutout
        left={{ title: "OOPS!", picture: leftImg }}
        right={{ title: "Beetles", picture: rightImg }}
        bottom={{ title: "The Global Backyard", picture: bottomImg }}
      />
      <div
        className="exhibition-card"
        style={{ "--card-image": `url(${africaImg})` } as React.CSSProperties}
      >
        <h2>Expedition to Africa</h2>
      </div>

      <div
        className="exhibition-card"
        style={{ "--card-image": `url(${natureImg})` } as React.CSSProperties}
      >
        <h2>Our Nature</h2>
      </div>
    </div>
  );
};
