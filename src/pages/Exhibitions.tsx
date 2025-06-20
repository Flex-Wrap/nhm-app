import React from "react";
import { useNavigate } from "react-router-dom";
import ExhibitionsCutout from "../components/ExhibitionsCutout";
import leftImg from "../assets/oops.jpg";
import rightImg from "../assets/beetles.jpg";
import bottomImg from "../assets/backyard1.jpg";
import africaImg from "../assets/safari1.jpg";
import natureImg from "../assets/ournature.jpg";
import "./Exhibitions.css";

export const Exhibitions: React.FC = () => {
  const navigate = useNavigate();

  function exhibitionClicked(id: number) {
    navigate(`/exhibitions/${id}`);
  }

  return (
    <div className="scrollable-container content">
      <ExhibitionsCutout
        left={{ title: "OOPS!", picture: leftImg }}
        right={{ title: "Beetles", picture: rightImg }}
        bottom={{ title: "The Global Backyard", picture: bottomImg }}
        onLeftClick={() => exhibitionClicked(3)}
        onRightClick={() => exhibitionClicked(1)}
        onBottomClick={() => exhibitionClicked(5)}
      />
      <div
        className="exhibition-card"
        style={{ "--card-image": `url(${africaImg})` } as React.CSSProperties}
        onClick={() => exhibitionClicked(4)}
      >
        <h2>Expedition to Africa</h2>
      </div>

      <div
        className="exhibition-card"
        style={{ "--card-image": `url(${natureImg})` } as React.CSSProperties}
        onClick={() => exhibitionClicked(2)}
      >
        <h2>Our Nature</h2>
      </div>
    </div>
  );
};
