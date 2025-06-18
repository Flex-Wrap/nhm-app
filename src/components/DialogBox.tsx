import { useEffect, useState } from "react";
import "./DialogBox.css";

interface DialogBoxProps {
  image: string;
  text: string;
  character: string;
  speed?: number;
  onTypingDone?: () => void;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  image,
  text,
  character,
  speed,
  onTypingDone,
  scrollRef,
}) => {
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
        if (scrollRef?.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onTypingDone) {
      onTypingDone();
    }
  }, [index, text, speed, onTypingDone]);

  return (
    <div className="dialog-box">
      <img src={image} alt={character} />
      <p>{displayedText}</p>
    </div>
  );
};

export default DialogBox;
