import { useParams } from "react-router-dom";
import ExhibitionDetailsSection from "../components/ExhibitionDetailsSection";
import "../pages/ExhibitionDetails.css";
import exhibitions from "../data/Exhibitions.ts";
import { BackButton } from "../components/BackButton.tsx";
import { useNavigation } from "../context/NavigationContext";

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

export const ExhibitionDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const exhibition = exhibitions.find((ex: Exhibition) => ex.id === Number(id));
  const { sectionTheme } = useNavigation();

  if (!exhibition) return <p>Exhibition not found.</p>;

  return (
      <div
        className="exhibition-details"
        style={{
          backgroundImage: `url(${exhibition.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100svh",
          color: "white",
          ["--navbar-fg-color" as any]: `var(${sectionTheme.foreground})`,
          ["--navbar-bg-color" as any]: `var(${sectionTheme.background})`,
          ["--tag-fg-color" as any]: `var(${sectionTheme.tagColor})`,
        }}
      >
        <div className="back-button-container">
          <BackButton to="/exhibitions" />
        </div>
        <ExhibitionDetailsSection id={id} />
      </div>
  );
};
