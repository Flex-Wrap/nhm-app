import React from "react";
import { Camera } from "lucide-react";
import "./CaptureButton.css"; // Ensure you have this CSS file for styling

interface CaptureButtonProps {
  onClick: () => void;
  color?: string;            // Optional, for inline fallback
  className?: string;        // New: allow external CSS class
}

const CaptureButton: React.FC<CaptureButtonProps> = ({ color, onClick, className }) => (
  <button
    onClick={onClick}
    className={`capture-button ${className ?? ""}`}
    style={color ? { backgroundColor: color } : undefined}
    aria-label="Capture"
  >
    <Camera size={42} color="#fff" />
  </button>
);

export default CaptureButton;
