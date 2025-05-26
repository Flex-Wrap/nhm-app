import React from 'react';
import './BlurredText.css';

interface BlurredTextProps {
    children: React.ReactNode;
    className?: string;
}

export const BlurredText: React.FC<BlurredTextProps> = ({ children, className }) => {
    return (
        <div className={`backdrop-filter-container ${className ?? ''}`}>
            {children}
        </div>
    );
};