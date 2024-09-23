import React from "react";
import "../../styles/FlightCard/FlightCard.css";
import { PiAirplaneTakeoff as PlaneDeparture } from "react-icons/pi";
import { IoIosAirplane as FlyAirplane } from "react-icons/io";
import { PiAirplaneLanding as PlaneArrival } from "react-icons/pi";

function FlightCard() {
  return (
    <div className="flight-card">
      <div className="flight-header">
        <h3 className="flight-header h3">Milano - Madrid</h3>
      </div>

      <div className="flight-info">
        <div className="departure">
          <PlaneDeparture />
          <span role="img" aria-label="plane">
            {" "}
            Departure
          </span>
          <h4>7:30 AM</h4>
          <p>Airport: MXP</p>
        </div>
        <div className="flight-duration">
          <span className="airline-logo">Alitalia</span>
          <FlyAirplane className="fly-icon" />
          <p>2h 25m (Nonstop)</p>
        </div>
        <div className="arrival">
          <PlaneArrival />
          <span role="img" aria-label="plane">
            {" "}
            Arrival
          </span>
          <h4>9:55 AM</h4>
          <p>Airport: MAD</p>
        </div>
      </div>

      {/* Tek bir div içerisine alarak hizalama işlemi */}
      <div className="flight-price-actions">
        <div className="flight-price">
          <p>
            <strong>Price: $200</strong>
          </p>
          <p className="round-trip">Round Trip</p>
        </div>
        <button className="book-flight-btn">Book Flight</button>
      </div>

      <a href="#" className="details-link">
        Check the details
      </a>
    </div>
  );
}

export default FlightCard;
