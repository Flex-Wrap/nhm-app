import type { ReactNode } from "react";
import "../components/Tag.css"; 

type TagProps = {
  icon?: ReactNode;
  label: string;
};

export const Tag = ({ icon, label }: TagProps) => (
  <div className="tag">
    {icon && <span className="tag-icon">{icon}</span>}
    <span>{label}</span>
  </div>
);