import React, { useEffect, useState } from "react";
import "./TextBox.css";

export interface TextBoxProps {
  text: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  speed?: number;
}

const TextBox: React.FC<TextBoxProps> = ({ text, children, style, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // Render text with line breaks
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="text-box" style={style}>
      <p>{renderTextWithLineBreaks(displayedText)}</p>
      {children}
    </div>
  );
};

export default TextBox;