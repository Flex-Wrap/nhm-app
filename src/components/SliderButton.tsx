import { useEffect, useState } from "react";
import "./SliderButton.css";
import { useNavigate } from "react-router-dom";

interface SliderButtonProps {
  buttonText: string;
  nextPage: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({ buttonText, nextPage }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setActive(true);
  };

  useEffect(() => {
    if (active) {
      const timeout = setTimeout(() => {
        navigate(nextPage);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [active, navigate]);

  return (
    <div
      className={`slider-container ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="slider-bg">
        {!active && <div className="arrows">{">>>"}</div>}
        <div className="go-button">{buttonText}</div>
      </div>
    </div>
  );
};

export default SliderButton;
