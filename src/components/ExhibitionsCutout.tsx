import React from 'react';
import './ExhibitionsCutout.css';

interface CardContent {
  title: string;
  picture: string;
}

interface ExhibitionsCutoutProps {
  className?: string;
  left: CardContent;
  right: CardContent;
  bottom: CardContent;
}

const ExhibitionsCutout: React.FC<ExhibitionsCutoutProps> = ({
  className = '',
  left,
  right,
  bottom
}) => {
  return (
    <div className={`card-container ${className}`}>
      <div
        className="card card-left"
        style={{ '--card-image': `url(${left.picture})` } as React.CSSProperties}
      >
        <h3 className="card-title">{left.title}</h3>
      </div>

      <div
        className="card card-right"
        style={{ '--card-image': `url(${right.picture})` } as React.CSSProperties}
      >
        <h3 className="card-title">{right.title}</h3>
      </div>

      <div
        className="card card-bottom"
        style={{ '--card-image': `url(${bottom.picture})` } as React.CSSProperties}
      >
        <h3 className="card-title">{bottom.title}</h3>
      </div>
    </div>
  );
};

export default ExhibitionsCutout;
