import React from "react";
import { useNavigate } from "react-router-dom";
import IconHome from "../assets/home.svg?react";
import "./HomeButton.css";

type HomeButtonProps = {
  to?: string;
  onClick?: () => void;
};

export const HomeButton: React.FC<HomeButtonProps> = ({ to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } 
  };

  return (
    <button className="home-button" onClick={handleClick}>
      <IconHome className="home" />
    </button>
  );
};
