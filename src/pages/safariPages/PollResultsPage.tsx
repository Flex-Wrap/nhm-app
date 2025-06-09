import { BackButton } from "../../components/BackButton";
import { ContinueButton } from "../../components/ContinueButton";
import { HomeButton } from "../../components/HomeButton";
import TextBox from "../../components/TextBox";
import VisitorOpinion from "../../components/VisitorsOpinion";
import "./PollResultsPage.css"; 

const PollResultsPage: React.FC = () => {
  return (
    <div className="poll-results-page">
      <div className="top-buttons">
        <BackButton />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <TextBox text="">
          <h2 style={{fontSize: "21px"}}>What did the other visitors think?</h2>
          <VisitorOpinion />
        </TextBox>
      </div>
      <ContinueButton text="Continue" to="/safariPages/notification/3"/>
    </div>
  );
};

export default PollResultsPage;
