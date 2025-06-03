import type React from "react";
import "./Checkbox.css";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked }) => {
  return (
    <div className="checkbox">
      <div className={`rectangle ${checked ? "checked" : ""}`}></div>
      <p className={`label ${checked ? "crossed" : ""}`}>{label}</p>
    </div>
  );
};

export default Checkbox;
