import React from "react";
import "./ContinueButton.css"; // reuse the same styles
import IconArrow from "../assets/icon-arrow.svg?react";

type RememberButtonProps = {
  onClick: () => void;
  text: string;
  backgroundColor?: string;
  color?: string;
};

export const RememberButton: React.FC<RememberButtonProps> = ({
  onClick,
  text,
  backgroundColor,
  color,
}) => {
  return (
    <button
      className="continue-button"
      onClick={onClick}
    >
      <h3>{text}</h3>
      <IconArrow className="arrow" />
    </button>
  );
};
