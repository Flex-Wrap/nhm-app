import { BackButton } from "../../components/BackButton.tsx";
import "../safariPages/SliderPageSafari1.css";
import SliderButton from "../../components/SliderButton.tsx";
import { HomeButton } from "../../components/HomeButton.tsx";

const SliderPageEnd = () => {
  return (
    <div className="slider-page-end">
      <div className="top-buttons">
        <BackButton />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <div className="header" style={{color: "white"}}>
          <h1>Was there ever a right path— or just the illusion of one?</h1>
        </div>
      </div>
      <SliderButton buttonText="END" nextPage="/safariPages/extra"/>
    </div>
  );
};

export default SliderPageEnd;
