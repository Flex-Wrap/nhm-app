import React from "react";
import "./OverlayCheck.css";

type OverlayCheckProps = {
  message?: string;
};

const OverlayCheck: React.FC<OverlayCheckProps> = ({ message }) => {
  return <div className="overlay">{message}</div>;
};

export default OverlayCheck;
