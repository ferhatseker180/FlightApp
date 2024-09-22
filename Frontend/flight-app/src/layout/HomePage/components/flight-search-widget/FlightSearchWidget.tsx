import React from "react";
import SearchBar from "./SearchBar";
import {
  FaPlaneDeparture as PlaneDeparture,
  FaPlaneArrival as PlaneArrival,
} from "react-icons/fa";
import { IoMdCalendar as Calendar } from "react-icons/io";
import SearchHeader from "./SearchHeader";
import "../../styles/FlightSearchBar/FlightSearchWidget.css";

const roundTripLocationIcons = [PlaneDeparture, PlaneArrival];
const roundTripDateIcons = [Calendar, Calendar];

const FlightSearchWidget = () => {
  return (
    <div className="main-container">
      <SearchHeader />
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <SearchBar icons={roundTripLocationIcons} />
        </div>
        <div>
          <SearchBar icons={roundTripDateIcons} />
        </div>
      </div>

      <div>
        <button className="show-btn"> Show flights </button>
      </div>
    </div>
  );
};

export default FlightSearchWidget;
