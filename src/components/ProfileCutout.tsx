import React from "react";
import "./ProfileCutout.css";

interface ProfileCutoutProps {
  image: string;
}

const ProfileCutout: React.FC<ProfileCutoutProps> = ({ image }) => {
  return (
    <div className="cutout-wrapper">
      <div
        className="cutout-profile"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="cutout-body" />
    </div>
  );
};

export default ProfileCutout;
