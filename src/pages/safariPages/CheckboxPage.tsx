import { BackButton } from "../../components/BackButton";
import CheckboxesContainer from "../../components/ChecboxesContainer";
import { ContinueButton } from "../../components/ContinueButton";
import { HomeButton } from "../../components/HomeButton";
import OverlayContainer from "../../components/OverlayContainer";
import "./CheckboxPage.css";

import React, { useState } from "react";

const CheckboxPage: React.FC = () => {
  const [visibleOverlays, setVisibleOverlays] = useState<(1 | 2 | 3)[]>([]);

  const toggleOverlay = (id: string) => {
    const overlayId = Number(id) as 1 | 2 | 3;
    setVisibleOverlays((prev) =>
      prev.includes(overlayId)
        ? prev.filter((o) => o !== overlayId)
        : [...prev, overlayId]
    );
  };

  return (
    <div className="checkbox-page">
      <div className="top-buttons">
        <BackButton />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <OverlayContainer visibleOverlays={visibleOverlays} />
        <CheckboxesContainer toggleOverlay={toggleOverlay} />
        <ContinueButton />
      </div>
    </div>
  );
};

export default CheckboxPage;
