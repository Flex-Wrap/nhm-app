import { useLocation } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import TextBox from "../../components/TextBox";
import VisitorOpinion from "../../components/VisitorsOpinion";

const PollResultsPage: React.FC = () => {
  const location = useLocation();
  const userAnswer = location.state?.userAnswer;

  return (
    <div className="poll-results-page">
      <div className="top-buttons">
        <BackButton />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <TextBox text="">
          <h2>What did the other visitors think?</h2>
          <VisitorOpinion userAnswer={userAnswer} />
        </TextBox>
      </div>
    </div>
  );
};

export default PollResultsPage;
