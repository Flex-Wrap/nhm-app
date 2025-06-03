import "../components/Notification.css";

type NotificationProps = {
    icon: React.ReactNode;
    heading: string;
    description: string;
};

export const Notification: React.FC<NotificationProps> =({icon, heading, description}) => {
    return(
        <div className="notification">
            <div className="notification-icon">{icon}</div>
            <div className="notification-content">
                <h3>{heading}</h3>
                <p className="small-text">{description}</p>
            </div>
        </div>
    );
};

