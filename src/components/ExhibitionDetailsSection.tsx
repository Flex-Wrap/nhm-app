import { Tag } from "../components/Tag";
import LocationIcon from "../assets/location.svg?react";
import ClockIcon from "../assets/time.svg?react";
import exhibitions from "../data/Exhibitions.ts";
import "../components/ExhibitionDetailsSection.css";
import { Link } from "react-router-dom";

interface ExhibitionDetailsSectionProps {
  id?: string;
}

interface Exhibition {
  id: number;
  name: string;
  description: string;
  image: string;
  floor?: string;
  time?: string;
  type?: string;
  icon?: React.ComponentType;
  buttonText?: string;
  link?: string;
}

const ExhibitionDetailsSection = ({ id }: ExhibitionDetailsSectionProps) => {
  const exhibition = exhibitions.find((ex: Exhibition) => ex.id === Number(id));

  if (!exhibition) return <p>Exhibition not found.</p>;

  return (
    <div className="exhibition-details-section">
      <Link to={`/${exhibition.link ?? "exhibitions"}`}>
        <div className="top-button">
          {exhibition.icon && (
            <exhibition.icon
              style={{ stroke: "var(--navbar-bg-color, var(--moss-700))" }}
            />
          )}
          <h3>{exhibition.buttonText}</h3>
        </div>
      </Link>
      <div className="exhibition-details-container">
        <h1>{exhibition.name}</h1>
        <div className="tags">
          <Tag
            icon={<LocationIcon stroke="var(--tag-fg-color)" />}
            label={exhibition.floor}
          />
          <Tag
            icon={<ClockIcon stroke="var(--tag-fg-color)" />}
            label={exhibition.time}
          />
          <Tag label={exhibition.type} />
        </div>
        <p className="small-text">{exhibition.description}</p>
      </div>
    </div>
  );
};

export default ExhibitionDetailsSection;
