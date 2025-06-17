import React, { useEffect, useState } from "react";
import ProfileCutout from "../components/ProfileCutout";
import leftImg from "../assets/oops.jpg";
import safariImg from "../assets/safari.jpg";
import "./Map.css";

export const Map: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParagraphs(prev => [
        ...prev,
        `This is the Map pagesss templatsdfjklhgdslkjgfhskldfghsdlfkjghdslkjghsdlkgjhdslgkjhsdfglkjhdsgflkjhe.`,
      ]);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${safariImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <h1>Map Page</h1>

      <ProfileCutout image={leftImg} wrapperClassName="wrapper">
        <h1>Inside the Cutout</h1>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </ProfileCutout>
    </div>
  );
};
