import React from "react";
import { BackButton } from "../../components/BackButton";
import ticketPricesImg from "../../assets/ticket-prices.jpg";
import IconPerson from "../../assets/icon-person.svg?react";
import IconPeople from "../../assets/icon-people.svg?react";
import IconStudent from "../../assets/icon-student.svg?react";
import "./InfoPage.css";

export const TicketPrices: React.FC = () => {
  return (
    <div className="scrollable-container">
      <div className="back-button-container">
        <BackButton to="/"/>
      </div>
      <div className="info-page-content content">
        <img src={ticketPricesImg} alt="Ticket Prices" />
        <h1>Ticket Prices</h1>
        <ul className="highlighted-list">
          <li>
            <strong>Adults (18+ years):</strong> 150 DKK/20 €
          </li>
          <li>
            <strong>Students:</strong> 90 DKK/12 € (with student card)
          </li>
          <li>
            <strong>Groups, per person:</strong> 130 DKK/18 €
          </li>
          <li>
            <strong>Danish Nature Conservation Society:</strong> 25% discount on
            admission for up to 2 people (with DN membership card)
          </li>
          <li>
            <strong>Jyllands-Posten:</strong> 25% discount on admission for up
            to 2 people (with JP card)
          </li>
          <li>
            <strong>AU employees:</strong> 90 DKK (with employee card)
          </li>
          <li>
            <strong>Elderly Sagen members:</strong> 90 DKK (with membership
            card)
          </li>
        </ul>
        <h2>There is free access for:</h2>
        <p>
          Children and young people under 18 years of age. Children under 12
          years of age must be accompanied by adults. Biology and geology
          students upon presentation of student card and valid enrollment
          confirmation Companions for holders of companion cards (If access is
          desired to the museum's own events, a free companion ticket must be
          ordered in advance at  booking@nathist.dk )
        </p>
        <h2>Annual Pass</h2>
        <p>
          The annual pass provides free access to the museum's exhibitions from
          the date of issue and for 12 months thereafter. Annual passes can only
          be renewed by visiting the museum. The annual pass gives a 50%
          discount on tickets to Denmark's other natural history museums .
        </p>
        <div className="info-card-container">
          <IconPerson className="info-card-icon" />
          <div className="info-card-text">
            <span>
              <strong>Annual pass SOLO</strong>
              <br />
              (Access for cardholder): 295 DKK/40 €
            </span>
          </div>
        </div>
        <p>
          Buy your Annual Pass SOLO in the Museum Shop or  as a gift
          certificate.
        </p>
        <div className="info-card-container">
          <IconPeople className="info-card-icon" />
          <div className="info-card-text">
            <span>
              <strong>Annual card PLUS</strong>
              <br />
              (Access for cardholder + one companion): 395 DKK/53 €
            </span>
          </div>
        </div>
        <p>
          Buy your Annual Pass PLUS in the Museum Shop or  as a gift
          certificate.
        </p>
        <div className="info-card-container">
          <IconStudent className="info-card-icon" />
          <div className="info-card-text">
            <span>
              <strong>Annual card STUD</strong>
              <br />
              (Access for cardholder. Student card must be presented upon
              registration): 165 DKK/22 €
            </span>
          </div>
        </div>
        <p>
          Buy your STUD Annual Pass in the Museum Shop or  as a gift
          certificate.
        </p>
        <h2>Visits in connection with teaching</h2>
        <p className="highlighted-text">
          <strong>Accompanying parents:</strong> 150 DKK/person
        </p>
        <p>
          There is free access for: Pupils, students and teachers from secondary
          schools, primary schools and youth education. Teacher and pedagogue
          students for study and preparation purposes. Biology and geology
          students upon presentation of student card and valid enrollment
          confirmation Teachers and educators for work purposes We also refer
          you to our School Service, where you can read more about teaching
          presentations and tours.
        </p>
      </div>
    </div>
  );
};
