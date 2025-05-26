import React from "react";
import { BackButton } from "../../components/BackButton";
import contactInfoImg from "../../assets/contact-info.jpg";
import "./InfoPage.css";

export const ContactInfo: React.FC = () => {
  return (
    <div className="scrollable-container">
      <div className="back-button-container">
        <BackButton to="/" />
      </div>
      <div className="info-page-content content">
        <img src={contactInfoImg} alt="Opening Hours" />
        <h1>Contact Information</h1>
        <ul className="highlighted-list no-style">
          <li>
            <strong>Address:</strong> Wilhelm Meyers Allé 10, 8000 Aarhus C
          </li>
          <li>
            <strong>Email:</strong> info@nathist.dk
          </li>
          <li>
            <strong>Phone:</strong> +45 87 15 54 15
          </li>
          <li>
            <strong>CVR</strong> 29073910
          </li>
        </ul>
        <p>
          The Danish Veterinary and Food Administration's smiley reports –{" "}
          <a
            href="https://www.findsmiley.dk/67613"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};