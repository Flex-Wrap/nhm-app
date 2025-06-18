import { useEffect, useRef, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { ContinueButton } from "../../components/ContinueButton";
import DialogBox from "../../components/DialogBox";
import { HomeButton } from "../../components/HomeButton";
import ProfileCutout from "../../components/ProfileCutout";
import ProgressBar from "../../components/ProgressBar";
import { DialogReplies } from "../../data/DialogData";
import "./DialogPage.css";

const typingSpeed = 30;
const pause = 1000;

const DialogPage: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTypingDone && visibleIndex < DialogReplies.length - 1) {
      const timeout = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
        setIsTypingDone(false);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [isTypingDone, visibleIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIndex]);

  return (
    <div className="choose-page">
      <div className="top-buttons">
        <BackButton to="/safariPages/scene/13" />
        <ProgressBar percentage={76} />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <ProfileCutout
          image=""
          wrapperClassName="wrapper"
          popoutPercent={1.2}
          bodyClassName="cutout-body"
        >
          <div className="replies-container" ref={scrollRef}>
            {DialogReplies.slice(0, visibleIndex + 1).map(
              ({ id, image, text, character }, i) => {
                const isCurrent = i === visibleIndex;
                return (
                  <DialogBox
                    key={id}
                    image={image}
                    text={text}
                    character={character}
                    speed={typingSpeed}
                    onTypingDone={
                      isCurrent ? () => setIsTypingDone(true) : undefined
                    }
                    scrollRef={scrollRef}
                  />
                );
              }
            )}
          </div>
          <ContinueButton to="/safariPages/poll" text="Continue" />
        </ProfileCutout>
      </div>
    </div>
  );
};

export default DialogPage;
