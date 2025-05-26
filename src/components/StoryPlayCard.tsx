import React from 'react';
import './StoryPlayCard.css';
import IconPlay from "../assets/icon-play.svg?react";
import { BlurredText } from './BlurredText';

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
      <button className="play-button">
        <IconPlay className="play-icon" />
      </button>
    </div>
  );
};
