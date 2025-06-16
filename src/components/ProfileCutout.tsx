import React from "react";
import "./ProfileCutout.css";

interface ProfileCutoutProps {
  image: string;
}

const ProfileCutout: React.FC<ProfileCutoutProps> = ({ image }) => {
  return (
    <div className="cutout-wrapper">
      {/* Bottom background */}
      <div className="cutout-body" />

      {/* Border half-circle */}
      <div className="cutout-border" />

      {/* Profile image */}
      <div
        className="cutout-profile"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default ProfileCutout;
