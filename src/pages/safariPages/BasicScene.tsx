import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import { scenes } from "../../data/SafariScenes";
import "./BasicScene.css";
import ProgressBar from "../../components/ProgressBar";
import { ContinueButton } from "../../components/ContinueButton";
import TextBox from "../../components/TextBox";
import ProfileCutout from "../../components/ProfileCutout";
import AudioPlayButton from "../../components/AudioPlayButton";

const BasicScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sceneId = parseInt(id || "1", 10);
  const scene = scenes.find((s) => s.id === sceneId);

  const cutoutPercent = scene?.character ? 0.2 : 1.2;

  if (!scene) {
    return <div>Scene not found.</div>;
  }

  return (
    <div
      className="basic-scene"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {scene.video ? (
        <div className="media-background">
          <video
            src={scene.video}
            autoPlay
            loop
            muted
            playsInline
            className="media-element"
          />
        </div>
      ) : (
        <div
          className="media-background"
          style={{ backgroundImage: `url(${scene.image})` }}
        />
      )}
      <div className="top-buttons">
        <BackButton to={scene.previousPage} />
        <ProgressBar percentage={scene.progress} />
        <HomeButton to="/" />
      </div>
        <ProfileCutout image={scene.characterImage} wrapperClassName="wrapper" popoutPercent={cutoutPercent} bodyClassName="cutout-body">
          <AudioPlayButton src={scene.audio} />
          <TextBox text={scene.text} />
          <ContinueButton to={scene.nextPage} text={scene.buttonText} />
        </ProfileCutout>
    </div>
  );
};

export default BasicScene;
