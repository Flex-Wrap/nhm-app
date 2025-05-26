import React from "react";
import { BackButton } from "../../components/BackButton";
import routeAndParkingImg from "../../assets/parking.jpg";
import IconParking from "../../assets/icon-parking.svg?react";
import IconTram from "../../assets/icon-tram.svg?react";
import "./InfoPage.css";

export const RouteAndParking: React.FC = () => {
  return (
    <div className="scrollable-container">
      <div className="back-button-container">
        <BackButton to="/" />
      </div>
      <div className="info-page-content content">
        <img src={routeAndParkingImg} alt="Route and Parking" />
        <h1>Route and Parking</h1>
        <h2>Find your way by car</h2>
        <p>
          The entrance to the museum is on Wilhelm Meyers Allé, and you can get
          to the museum from Randersvej via Vennelyst Boulevard, from
          Langelandsgade or from Høegh-Guldbergs Gade.
        </p>
        <h2>Parking</h2>
        <p>It is possible to park in the museum's parking area. </p>
        <div className="info-card-container">
          <IconParking className="info-card-icon" />
          <div className="info-card-text">
            <span>
              Parking is paid for by card/cash at the parking meter or by using
              apps from EasyPark or Parkzone.
            </span>
          </div>
        </div>
        <p>When paying by card and app, you only pay for the time used.</p>
        <p>
          In addition, parking is possible along Wilhelm Meyers Allé opposite
          the Natural History Museum according to municipal regulations .
        </p>
        <p>
          Pay particular attention to the official parking signs and make sure
          that you register your car in the correct area code when using the
          parking app!
        </p>
        <h2>Disabled Parking</h2>
        <p>
          There is a disabled parking space at the museum's main entrance, where
          parking is free with a valid disabled sign in the windshield. Parking
          outside this space is not free, even if you have a valid sign.
        </p>
        <h2>By bus & light rail</h2>
        <div className="info-card-container bus-info-card">
          <IconTram className="info-card-icon" />
          <div className="info-card-text">
            <span>
              Parking is paid for by card/cash at the parking meter or by using
              apps from EasyPark or Parkzone.
            </span>
          </div>
        </div>
        <ul className="highlighted-list no-style">
          <li>
            Take bus no. 12, 16, 18, 100 or Directions & Parking to
            Universitetsparken. From here it is approx. 400 meters to the
            museum.
          </li>
          <li>
            Take bus no. 2A or 13 to Kaserneboulevarden. From here it is
            approximately 550 meters to the museum.
          </li>
          <li>
            Take bus no. 5A to the University on Nordre Ringgade. From here it
            is approximately 650 meters to the museum.
          </li>
        </ul>
        <p>
          Please contact Midttrafik for bus information on tel. 70 21 02 30 or
          midttrafik.dk
        </p>
      </div>
    </div>
  );
};
