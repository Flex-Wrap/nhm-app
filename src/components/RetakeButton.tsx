import React from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import "./ContinueButton.css"; // Reuse same styles

type RetakeButtonProps = {
  to?: string;
  onClick?: () => void;
  text?: string;
};

export const RetakeButton: React.FC<RetakeButtonProps> = ({
  to,
  onClick,
  text = "Retake",
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
      <RefreshCw className="arrow" />
    </button>
  );
};
