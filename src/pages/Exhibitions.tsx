import React from "react";
import ExhibitionsCutout from "../components/ExhibitionsCutout";
import leftImg from "../assets/oops.jpg";
import rightImg from "../assets/beetles.jpg";
import bottomImg from "../assets/backyard.jpg";

export const Exhibitions: React.FC = () => {
  return (
    <div className="scrollable-container content">
      <ExhibitionsCutout
      left={{ title: 'Left Title', picture: leftImg }}
      right={{ title: 'Right Title', picture: rightImg }}
      bottom={{ title: 'Bottom Title', picture: bottomImg }}
    />
    </div>
  );
};
