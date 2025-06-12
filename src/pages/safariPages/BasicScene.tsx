import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import TextBox from "../../components/TextBox";
import { scenes } from "../../data/SafariScenes";
import { ContinueButton } from "../../components/ContinueButton";
import "./BasicScene.css";
import ProgressBar from "../../components/ProgressBar";

const BasicScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sceneId = parseInt(id || "1", 10);
  const scene = scenes.find((s) => s.id === sceneId);

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
      <div className="content">
        <TextBox text={scene.text}></TextBox>
        <ContinueButton to={scene.nextPage} text={scene.buttonText} />
      </div>
    </div>
  );
};

export default BasicScene;
