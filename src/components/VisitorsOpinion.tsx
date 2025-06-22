import React, { useEffect, useState } from "react";
import "../components/VisitorsOpinion.css";
import { getPollVotes } from "../firebase/firebaseDb";

const VisitorOpinion: React.FC = () => {
  const [barHeights, setBarHeights] = useState<{ yes: string; no: string }>({
    yes: "0%",
    no: "0%",
  });

  const [percentages, setPercentages] = useState<{ yes: number; no: number }>({
    yes: 0,
    no: 0,
  });

  useEffect(() => {
    const fetchVotes = async () => {
      const { yes, no } = await getPollVotes();
      const total = yes + no;
      const yesP = total ? Math.round((yes / total) * 100) : 0;
      const noP = 100 - yesP;

      setPercentages({ yes: yesP, no: noP });
      setTimeout(() => {
        setBarHeights({ yes: `${yesP}%`, no: `${noP}%` });
      }, 100);
    };

    fetchVotes();
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
        <span>{percentages.yes}% of visitors</span>
      </div>
      <div className="bar-column">
        <p>NO</p>
        <div className="bar-wrapper">
          <div
            className="bar no-bar"
            style={barHeights.no ? { height: barHeights.no } : undefined}
          ></div>
        </div>
        <span>{percentages.no}% of visitors</span>
      </div>
    </div>
  );
};

export default VisitorOpinion;
