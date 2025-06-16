import React from "react";
import "./ProfileCutout.css";

interface ProfileCutoutProps {
  image: string;
  popoutPercent?: number; // how much of the profile is outside the cutout, default 0.2 (20%)
}

const ProfileCutout: React.FC<ProfileCutoutProps> = ({
  image,
  popoutPercent = 0.3,
}) => {
  const imgSize = 100;
  const gap = 8;

  const rawRSmall = imgSize * (0.5 - popoutPercent); // can be negative

  // Step logic for negative rawRSmall for smooth arcs
  let rSmall: number;
  if (rawRSmall >= 0) {
    rSmall = Math.max(rawRSmall, 10);
  } else {
    const step = Math.floor(rawRSmall / (imgSize * 0.1)); // every -0.1 = step
    const lookup = [8, 6, 4, 2, 0];
    rSmall = lookup[Math.min(-step - 1, lookup.length - 1)];
  }

  const rLargeX = imgSize * 0.5 + gap;

  // rLargeY follows rawRSmall displacement, never below 0
  const rLargeY = rawRSmall > 0 ? rLargeX : Math.max(0, rLargeX + rawRSmall);

  const cx = 200; // center x of wrapper
  const startX = cx - imgSize / 2 - gap - rSmall;
  const arc1EndX = cx - imgSize / 2 - gap;
  const arc2EndX = cx + imgSize / 2 + gap;
  const arc3EndX = cx + imgSize / 2 + gap + rSmall;

  const path = `
    M0 0 
    H${startX} 
    A${rSmall} ${rSmall} 0 0 1 ${arc1EndX} ${rSmall}
    A${rLargeX} ${rLargeY} 0 0 0 ${arc2EndX} ${rSmall}
    A${rSmall} ${rSmall} 0 0 1 ${arc3EndX} 0 
    H400 
    V200 
    H0 
    Z
  `;

  return (
    <div className="cutout-wrapper">
      <svg width="0" height="0">
        <clipPath id="profileClip">
          <path d={path} />
        </clipPath>
      </svg>

      <div
        className="cutout-profile"
        style={{
          backgroundImage: `url(${image})`,
          width: imgSize,
          height: imgSize,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translate(-50%, -${popoutPercent * 100}%)`,
          borderRadius: imgSize / 2,
        }}
      />

      <div className="cutout-body" style={{ clipPath: "url(#profileClip)" }} />
    </div>
  );
};

export default ProfileCutout;
