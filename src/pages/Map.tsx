import React from 'react';
import ProfileCutout from '../components/ProfileCutout';
import leftImg from "../assets/oops.jpg";

export const Map: React.FC = () => {
    return (
        <div>
            <h1>Map Page</h1>
            <p>This is the Map pagesss template.</p>
            <ProfileCutout image={leftImg}/>
        </div>
    );
};