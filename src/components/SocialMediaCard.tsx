import React from 'react';
import './SocialMediaCard.css';

import facebookImg from '../assets/facebook.jpg';
import tripadvisorImg from '../assets/tripadvisor.jpg';
import youtubeImg from '../assets/youtubed.jpg';
import linkedinImg from '../assets/linkedin.jpg';
import instagramImg from '../assets/instagram.jpg';

import IconFacebook from '../assets/icon-facebook.svg?react';
import IconTripadvisor from '../assets/icon-tripadvisor.svg?react';
import IconYoutube from '../assets/icon-youtube.svg?react';
import IconLinkedin from '../assets/icon-linkedin.svg?react';
import IconInstagram from '../assets/icon-instagram.svg?react';

export const SocialMediaCard: React.FC = () => {
  return (
    <div className="social-media-card">
      <div
        className="social-media-square top-left-square"
        style={{ backgroundImage: `url(${facebookImg})` }}
      >
        <div className="dim-overlay" />
        <IconFacebook className="icon" />
      </div>
      <div
        className="social-media-square top-right-square"
        style={{ backgroundImage: `url(${tripadvisorImg})` }}
      >
        <div className="dim-overlay" />
        <IconTripadvisor className="icon" />
      </div>
      <div
        className="social-media-square bottom-left-square"
        style={{ backgroundImage: `url(${youtubeImg})` }}
      >
        <div className="dim-overlay" />
        <IconYoutube className="icon" />
      </div>
      <div
        className="social-media-square bottom-right-square"
        style={{ backgroundImage: `url(${linkedinImg})` }}
      >
        <div className="dim-overlay" />
        <IconLinkedin className="icon" />
      </div>
      <div className="social-media-center-square">
        <div
          className="social-media-center-inner"
          style={{
            backgroundImage: `url(${instagramImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="dim-overlay" />
          <IconInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};
