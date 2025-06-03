import React, { useEffect, useState } from "react";
import "../components/VisitorsOpinion.css";

interface VisitorOpinionProps {
  userAnswer: "yes" | "no";
}

const VisitorOpinion: React.FC<VisitorOpinionProps> = ({ userAnswer }) => {
  const [yesHeight, setYesHeight] = useState("0%");
  const [noHeight, setNoHeight] = useState("0%");

  const yesPercent = 73;
  const noPercent = 27;

  useEffect(() => {
    // Trigger the bar animation
    setTimeout(() => {
      setYesHeight(`${yesPercent}%`);
      setNoHeight(`${noPercent}%`);
    }, 100);
  }, []);

  return (
    <div className="vertical-bars">
      <div className="bar-column">
        <div
          className={`bar yes-bar grow-bar ${
            userAnswer === "yes" ? "highlight" : ""
          }`}
          style={{ height: yesHeight }}
        ></div>
        <p>YES</p>
        <span>{yesPercent}% of visitors</span>
      </div>
      <div className="bar-column">
        <div
          className={`bar no-bar grow-bar ${
            userAnswer === "no" ? "highlight" : ""
          }`}
          style={{ height: noHeight }}
        ></div>
        <p>NO</p>
        <span>{noPercent}% of visitors</span>
      </div>
    </div>
  );
};

export default VisitorOpinion;
