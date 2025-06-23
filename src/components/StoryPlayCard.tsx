import React from 'react';
import './StoryPlayCard.css';
import IconPlay from "../assets/icon-play.svg?react";
import { BlurredText } from './BlurredText';
import { useNavigate } from 'react-router-dom';

type StoryPlayCardProps = {
  imageUrl: string;
  title?: string;
  buttonLabel?: string;
};

export const StoryPlayCard: React.FC<StoryPlayCardProps> = ({
  imageUrl,
  title = 'Exhibition Name',
  buttonLabel = 'start journey',
}) => {
  const navigate = useNavigate();

  return (
    <div className="card-cutout" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="fake-corners" />
      <BlurredText className="title">
        <h1>{title}</h1>
      </BlurredText>
      
      <div className="text-container">
        <BlurredText>
          <h3>{buttonLabel}</h3>
        </BlurredText>
      </div>
      <button className="play-button" onClick={() => navigate('/safariPages/ar/2')}>
        <IconPlay className="play-icon" />
      </button>
    </div>
  );
};
