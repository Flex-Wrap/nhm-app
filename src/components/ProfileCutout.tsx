import React, { useEffect, useRef, useState } from "react";
import "./ProfileCutout.css";

interface ProfileCutoutProps {
  image: string;
  children?: React.ReactNode;
  bodyClassName?: string;
  wrapperClassName?: string;
}

const ProfileCutout: React.FC<ProfileCutoutProps> = ({
  image,
  children,
  bodyClassName,
  wrapperClassName,
}) => {
  const imgSize = 100;
  const gap = 10;
  const popoutPercent = 0.2;
  const popoutPosition = 0.25;

  const halfImg = imgSize / 2;

  const bodyRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 430, height: 120 }); // default min

  useEffect(() => {
    const updateSize = () => {
      if (bodyRef.current) {
        const { offsetWidth, offsetHeight } = bodyRef.current;
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    if (bodyRef.current) resizeObserver.observe(bodyRef.current);

    window.addEventListener("resize", updateSize); // in case parent resizes
    updateSize(); // initial measure

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const { width: containerWidth, height: containerHeight } = dimensions;
  const cutoutX = containerWidth * popoutPosition;
  const rSmall = imgSize * (0.5 - popoutPercent);
  const rLarge = halfImg + gap;
  const paddingTop = rLarge + rSmall + gap;

  const startX = cutoutX - halfImg - gap - rSmall;
  const arc1EndX = cutoutX - halfImg - gap;
  const arc2EndX = cutoutX + halfImg + gap;
  const arc3EndX = cutoutX + halfImg + gap + rSmall;

  const path = `
    M0 0 
    H${startX} 
    A${rSmall} ${rSmall} 0 0 1 ${arc1EndX} ${rSmall}
    A${rLarge} ${rLarge} 0 0 0 ${arc2EndX} ${rSmall}
    A${rSmall} ${rSmall} 0 0 1 ${arc3EndX} 0 
    H${containerWidth} 
    V${containerHeight} 
    H0 
    Z
  `;

  return (
    <div className={`cutout-wrapper ${wrapperClassName ?? ""}`}>
      <div
        className={`cutout-body ${bodyClassName ?? ""}`}
        style={{ paddingTop }}
        ref={bodyRef}
      >
        {children}
      </div>
      <div
        className="cutout-profile"
        style={{
          backgroundImage: `url(${image})`,
          width: imgSize,
          height: imgSize,
          left: `${cutoutX}px`,
          transform: `translate(-50%, -${popoutPercent * 100}%)`,
          borderRadius: halfImg,
        }}
      />
      <svg width="0" height="0">
        <clipPath id="profileClip">
          <path d={path} />
        </clipPath>
      </svg>
    </div>
  );
};

export default ProfileCutout;
