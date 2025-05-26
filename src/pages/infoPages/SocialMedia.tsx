import React from 'react';
import { BackButton } from '../../components/BackButton';
import { SocialMediaCard } from '../../components/SocialMediaCard';

export const SocialMedia: React.FC = () => {
    return (
        <div className="scrollable-container">
            <div className="back-button-container">
                <BackButton to="/" />
            </div>
            <div className="info-page-content content">
                <h1>Social Media</h1>
                <SocialMediaCard />
                <ul className="highlighted-list no-style" style={{ marginTop: 32 }}>
                    <li>
                        <strong>Instagram:</strong>{' '}
                        <a href="https://www.instagram.com/nathistaarhus/" target="_blank" rel="noopener noreferrer">
                            @nathistaarhus
                        </a>
                    </li>
                    <li>
                        <strong>Facebook:</strong>{' '}
                        <a href="https://www.facebook.com/nathistaarhus" target="_blank" rel="noopener noreferrer">
                            /nathistaarhus
                        </a>
                    </li>
                    <li>
                        <strong>YouTube:</strong>{' '}
                        <a href="https://www.youtube.com/@nathistaarhus" target="_blank" rel="noopener noreferrer">
                            @nathistaarhus
                        </a>
                    </li>
                    <li>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://www.linkedin.com/company/nathistaarhus" target="_blank" rel="noopener noreferrer">
                            /company/nathistaarhus
                        </a>
                    </li>
                    <li>
                        <strong>TripAdvisor:</strong>{' '}
                        <a href="https://www.tripadvisor.com/Attraction_Review-g189530-d243708-Reviews-Natural_History_Museum_Aarhus-Aarhus_East_Jutland_Jutland.html" target="_blank" rel="noopener noreferrer">
                            Natural History Museum Aarhus
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};