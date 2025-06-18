import { BackButton } from "../../components/BackButton";
import { ContinueButton } from "../../components/ContinueButton";
import DialogBox from "../../components/DialogBox";
import { HomeButton } from "../../components/HomeButton";
import ProfileCutout from "../../components/ProfileCutout";
import ProgressBar from "../../components/ProgressBar";
import { DialogReplies } from "../../data/DialogData";
import "./DialogPage.css";

const DialogPage: React.FC = () => {
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
          <div className="replies-container">
            {DialogReplies.map(({ id, image, text, character }) => (
              <DialogBox
                key={id}
                image={image}
                text={text}
                character={character}
              />
            ))}
          </div>
          <ContinueButton to="/safariPages/poll" text="Continue" />
        </ProfileCutout>
      </div>
    </div>
  );
};

export default DialogPage;
