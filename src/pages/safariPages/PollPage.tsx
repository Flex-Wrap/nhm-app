import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import TextBox from "../../components/TextBox";
import "./PollPage.css";
import ProgressBar from "../../components/ProgressBar";

const PollPage: React.FC = () => {
    const navigate = useNavigate();

    const handleVote = (answer: "yes" | "no") => {
        navigate("/safariPages/poll-results", {state: {userAnswer: answer}});
    }
  return (
    <div className="poll-page">
      <div className="top-buttons">
        <BackButton />
        <ProgressBar percentage={81} />
        <HomeButton to="/" />
      </div>
      <div className="scene-content">
        <TextBox text="Does understanding make it right?">
          <div className="buttons-container">
            <button className="poll-button" onClick={() => handleVote("yes")}>Yes</button>
            <button className="poll-button" onClick={() => handleVote("no")}>No</button>
          </div>
        </TextBox>
      </div>
    </div>
  );
};

export default PollPage;
