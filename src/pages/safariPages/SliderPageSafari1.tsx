import { Notification } from "../../components/Notification.tsx";
import HeadphonesIcon from "../../assets/headphone.svg?react";
import { BackButton } from "../../components/BackButton.tsx";
import "../safariPages/SliderPageSafari1.css";
import SliderButton from "../../components/SliderButton.tsx";
import { HomeButton } from "../../components/HomeButton.tsx";

const SliderPage = () => {
  return (
    <div className="slider-page">
      <div className="top-buttons">
        <BackButton />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <Notification
          icon={<HeadphonesIcon />}
          heading="This contains audio!"
          description="We recommend using headphones."
        />
        <div className="header">
          <h1>Explore the expedition to</h1>
          <p className="big-text">AFRICA</p>
        </div>
      </div>
      <SliderButton />
    </div>
  );
};

export default SliderPage;
