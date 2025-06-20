import React from "react";
import "./ExhibitionsCutout.css";

interface CardContent {
  title: string;
  picture: string;
}

interface ExhibitionsCutoutProps {
  className?: string;
  left: CardContent;
  right: CardContent;
  bottom: CardContent;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onBottomClick?: () => void;
}

const ExhibitionsCutout: React.FC<ExhibitionsCutoutProps> = ({
  className = "",
  left,
  right,
  bottom,
  onLeftClick,
  onRightClick,
  onBottomClick,
}) => {
  return (
    <div className={`card-container ${className}`}>
      <div
        className="card card-left"
        style={
          { "--card-image": `url(${left.picture})` } as React.CSSProperties
        }
        onClick={onLeftClick}
      >
        <h2 className="card-title">{left.title}</h2>
        <div className="card-new">
          <p>new</p>
        </div>
      </div>

      <div
        className="card card-right"
        style={
          { "--card-image": `url(${right.picture})` } as React.CSSProperties
        }
        onClick={onRightClick}
      >
        <h2 className="card-title">{right.title}</h2>
        <div className="card-new">
          <p>new</p>
        </div>
      </div>

      <div
        className="card card-bottom"
        style={
          { "--card-image": `url(${bottom.picture})` } as React.CSSProperties
        }
        onClick={onBottomClick}
      >
        <h2 className="card-title">{bottom.title}</h2>
      </div>
    </div>
  );
};

export default ExhibitionsCutout;