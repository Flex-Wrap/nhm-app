import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import ProgressBar from "../../components/ProgressBar";
import TextBox from "../../components/TextBox";
import "./ChooseQuestion.css";
import knud from "../../assets/knud.jpg";
import ProfileCutout from "../../components/ProfileCutout";

const ChooseQuestion: React.FC = () => {
  const navigate = useNavigate();

  const handleChoice = (answer: "family" | "notebook") => {
    if (answer === "family") {
        navigate("/safariPages/scene/7");
    } else {
        navigate("/safariPages/scene/9");
    }
  }

  return (
    <div className="choose-page">
      <div className="top-buttons">
        <BackButton />
        <ProgressBar percentage={43} />
        <HomeButton to="/" />
      </div>
      <div className="scene-content">
        <ProfileCutout image={knud} />
        <TextBox text="Haha, right, like my wife—she’d never understand how it really works out here. She’s all about saving the poor animals.">
          <br></br>
          <p>Ask Jakobsen:</p>
          <div className="buttons-container">
            <button className="question-button" onClick={() => handleChoice("family")}>So, Jakobsen, do you have family? Kids?</button>
            <button className="question-button" onClick={() => handleChoice("notebook")}>Is it your notebook on the table?</button>
          </div>
        </TextBox>
      </div>
    </div>
  );
};

export default ChooseQuestion;
