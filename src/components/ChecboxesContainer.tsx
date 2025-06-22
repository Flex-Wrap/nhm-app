import { useState } from "react";
import Checkbox from "./Checkbox";
import "./CheckboxesContainer.css";

const buttons = [
  { id: "1", label: "Hat", hasOverlay: true },
  { id: "5", label: "Belts", hasOverlay: false },
  { id: "6", label: "Shirts", hasOverlay: false },
  { id: "4", label: "Lenses", hasOverlay: false },
  { id: "2", label: "Film", hasOverlay: true },
  { id: "3", label: "Finette", hasOverlay: true },
];

export default function CheckboxesContainer({
  toggleOverlay,
}: {
  toggleOverlay: (id: string) => void;
}) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleClick = (btn: (typeof buttons)[0]) => {
    setCheckedItems((prev) => ({
      ...prev,
      [btn.id]: !prev[btn.id],
    }));

    if (btn.hasOverlay) {
      toggleOverlay(btn.id);
    }
  };

  return (
    <div className="checkboxes-container">
      {buttons.map((btn) => (
        <div key={btn.id} onClick={() => handleClick(btn)}>
          <Checkbox label={btn.label} checked={!!checkedItems[btn.id]} />
        </div>
      ))}
    </div>
  );
}
