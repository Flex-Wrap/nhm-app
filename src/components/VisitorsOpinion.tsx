import React, { useEffect, useState } from "react";
import "../components/VisitorsOpinion.css";

const VisitorOpinion: React.FC = () => {
  const [barHeights, setBarHeights] = useState<{
    yes: string | undefined;
    no: string | undefined;
  }>({
    yes: undefined,
    no: undefined,
  });

  const yesPercent = 73;
  const noPercent = 27;

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarHeights({
        yes: `${yesPercent}%`,
        no: `${noPercent}%`,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="vertical-bars">
      <div className="bar-column">
        <p>YES</p>
        <div className="bar-wrapper">
          <div
            className="bar yes-bar"
            style={barHeights.yes ? { height: barHeights.yes } : undefined}
          ></div>
        </div>
        <span>{yesPercent}% of visitors</span>
      </div>
      <div className="bar-column">
        <p>NO</p>
        <div className="bar-wrapper">
          <div
            className="bar no-bar"
            style={barHeights.no ? { height: barHeights.no } : undefined}
          ></div>
        </div>
        <span>{noPercent}% of visitors</span>
      </div>
    </div>
  );
};

export default VisitorOpinion;
