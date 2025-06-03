import { Navbar } from "../components/Navbar";
import { NavbarThemeContext } from "../components/NavbarThemeContext";
import { useParams } from "react-router-dom";
import ExhibitionDetailsSection from "../components/ExhibitionDetailsSection";
import "../pages/ExhibitionDetails.css";
import exhibitions from "../data/Exhibitions.ts";

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

const colorMap: Record<string, string> = {
  "1": "--brown-700",
  "2": "--moss-700",
  "3": "--orange-700",
  "4": "--wheat-700",
  "5": "--polar-700",
};

const foregroundMap: Record<string, string> = {
  "1": "--brown-150",
  "2": "--moss-150",
  "3": "--orange-150",
  "4": "--wheat-150",
  "5": "--polar-150",
};

const tagMap: Record<string, string> = {
  "1": "--brown-850",
  "2": "--moss-850",
  "3": "--orange-850",
  "4": "--wheat-850",
  "5": "--polar-850",
};

export const ExhibitionDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const exhibition = exhibitions.find((ex: Exhibition) => ex.id === Number(id));

  if (!exhibition) return <p>Exhibition not found.</p>;

  const background = id && colorMap[id] ? colorMap[id] : "--moss-700";
  const foreground = id && foregroundMap[id] ? foregroundMap[id] : "--moss-150";
  const tag = id && tagMap[id] ? tagMap[id] : "--moss-850";

  return (
    <NavbarThemeContext.Provider value={{ background, foreground }}>
      <Navbar />
      <div
        className="exhibition-details"
        style={{
          backgroundImage: `url(${exhibition.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "white",
          ["--navbar-fg-color" as any]: `var(${foreground})`,
          ["--tag-fg-color" as any]: `var(${tag})`,
          ["--navbar-bg-color" as any]: `var(${background})`,
        }}
      >
        <ExhibitionDetailsSection id={id} />
      </div>
    </NavbarThemeContext.Provider>
  );
};
