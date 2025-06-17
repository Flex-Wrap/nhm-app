import { BackButton } from "../../components/BackButton";
import CheckboxesContainer from "../../components/ChecboxesContainer";
import { ContinueButton } from "../../components/ContinueButton";
import { HomeButton } from "../../components/HomeButton";
import OverlayContainer from "../../components/OverlayContainer";
import ProfileCutout from "../../components/ProfileCutout";
import ProgressBar from "../../components/ProgressBar";
import knud from "../../assets/knud.jpg";
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
        <BackButton to="/safariPages/notification/1" />
        <ProgressBar percentage={19} />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <OverlayContainer visibleOverlays={visibleOverlays} />
        <ProfileCutout image={knud} wrapperClassName="wrapper">
          <CheckboxesContainer toggleOverlay={toggleOverlay} />
          <ContinueButton to="/safariPages/scene/3" text="Continue" />
        </ProfileCutout>
      </div>
    </div>
  );
};

export default CheckboxPage;
