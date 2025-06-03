import React from "react";
import { useNavigate } from "react-router-dom";
import IconArrow from "../assets/icon-arrow.svg?react";
import "./ContinueButton.css";

type ContinueButtonProps = {
  to?: string;
  onClick?: () => void;
  text: string;
};

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  to,
  onClick,
  text,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button className="continue-button" onClick={handleClick}>
      <h3>{text}</h3>
      <IconArrow className="arrow" />
    </button>
  );
};
