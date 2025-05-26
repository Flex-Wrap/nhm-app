import React from "react";
import { BackButton } from "../../components/BackButton";
import openingHoursImg from "../../assets/opening-hours.jpg";
import "./InfoPage.css";

export const OpeningHours: React.FC = () => {
  return (
    <div className="scrollable-container">
      <div className="back-button-container">
        <BackButton to="/" />
      </div>
      <div className="info-page-content content">
        <img src={openingHoursImg} alt="Opening Hours" />
        <h1>Opening Hours</h1>
        <ul className="highlighted-list">
          <li>
            <strong>Monday:</strong> &nbsp;&nbsp;&nbsp;Closed
          </li>
          <li>
            <strong>Tuesday:</strong> &nbsp;&nbsp;&nbsp;9:00-16:00
          </li>
          <li>
            <strong>Wednesday:</strong> &nbsp;&nbsp;&nbsp;9:00-21:00
          </li>
          <li>
            <strong>Thursday:</strong> &nbsp;&nbsp;&nbsp;9:00-16:00
          </li>
          <li>
            <strong>Friday:</strong> &nbsp;&nbsp;&nbsp;9:00-16:00
          </li>
          <li>
            <strong>Saturday:</strong> &nbsp;&nbsp;&nbsp;9:00-16:00
          </li>
          <li>
            <strong>Sunday:</strong> &nbsp;&nbsp;&nbsp;9:00-16:00
          </li>
        </ul>
        <p>
          * We are open on Mondays during the school holidays this week: 7, 16,
          17, 24, 27, 28, 29, 30, 31, 32, 42, 52 and 1.
        </p>
        <p>
          In addition, we are open on Maundy Thursday, Good Friday, Easter
          Sunday, Easter Monday, Whit Monday, Pentecost Sunday, Ascension Day
          and Constitution Day.
        </p>
        <p>
          Our only normal closing days are: Last Friday in April (Uniparken
          Sailing Race – April 25 in 2025) December 24, 25 and 31 and January 1.
        </p>
      </div>
    </div>
  );
};
