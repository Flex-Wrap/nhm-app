import React from "react";
import { useNavigate } from "react-router-dom";
import IconArrow from "../assets/icon-arrow.svg?react";
import "./BackButton.css";

type BackButtonProps = {
  to?: string;
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } else {
      window.history.back();
    }
  };

  return (
    <button className="back-button" onClick={handleClick}>
      <IconArrow className="back-arrow" />
    </button>
  );
};
