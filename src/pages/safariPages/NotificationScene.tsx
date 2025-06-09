import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import { notifications } from "../../data/SafariNotifications";
import { Notification } from "../../components/Notification";
import InfoIcon from "../../assets/info.svg?react";
import { ContinueButton } from "../../components/ContinueButton";

const NotificationScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const notificationId = parseInt(id || "1", 10);
  const notifScene = notifications.find((n) => n.id === notificationId);

  if (!notifScene) {
    return <div>Scene not found.</div>;
  }
  return (
    <div
      className="notification-scene"
      style={{
        backgroundImage: `url(${notifScene.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="top-buttons">
        <BackButton to={notifScene.previousPage} />
        <HomeButton to="/" />
      </div>
      <div className="content">
        <Notification
          icon={<InfoIcon />}
          heading={notifScene.header}
          description={notifScene.text}
        />
        <ContinueButton to={notifScene.nextPage} text={notifScene.buttonText}/>
      </div>
    </div>
  );
};

export default NotificationScene;
