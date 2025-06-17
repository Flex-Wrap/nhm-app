import React, { useEffect, useRef, useState } from "react";
import "./ProfileCutout.css";

interface ProfileCutoutProps {
  image: string;
  children?: React.ReactNode;
  bodyClassName?: string;
  wrapperClassName?: string;
  popoutPercent?: number; // Percentage of the image that pops out
}

const ProfileCutout: React.FC<ProfileCutoutProps> = ({
  image,
  children,
  bodyClassName,
  wrapperClassName,
  popoutPercent = 0.2,
  
}) => {
  const imgSize = 100;
  const gap = 10;
  const popoutPosition = 0.25;

  const halfImg = imgSize / 2;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 430, height: 120 }); // default min

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const { offsetWidth, offsetHeight } = wrapperRef.current;
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);

    window.addEventListener("resize", updateSize);
    updateSize();

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
    <div className={`cutout-wrapper ${wrapperClassName ?? ""}`} ref={wrapperRef}>
      <div
        className={`cutout-body ${bodyClassName ?? ""}`} style={{paddingTop}}
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
      <svg width="0" height="0" style={{ position: "absolute", top: 0, left: 0 }}>
        <clipPath id="profileClip">
          <path d={path} />
        </clipPath>
      </svg>
    </div>
  );
};

export default ProfileCutout;
