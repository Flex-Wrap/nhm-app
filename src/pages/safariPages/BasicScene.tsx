import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import TextBox from "../../components/TextBox";
import { scenes } from "../../data/SafariScenes";
import { ContinueButton } from "../../components/ContinueButton";


const BasicScene: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const sceneId = parseInt(id || "1", 10);
  const scene = scenes.find((s) => s.id === sceneId);

  if (!scene) {
    return <div>Scene not found.</div>;
  }

  return (
    <div className="basic-scene" style={{
            backgroundImage: `url(${scene.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "100vh",
            width: "100%",
          }}>
      <div className="top-buttons">
        <BackButton to={scene.previousPage} />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <TextBox text={scene.text}></TextBox>
        <ContinueButton to={scene.nextPage} text={scene.buttonText}/>
      </div>
    </div>
  );
};

export default BasicScene;
