import MainHeader from "../HomePage/components/header/MainHeader";
import FlightSearchWidget from "./components/flight-search-widget/FlightSearchWidget";

const MainPage = () => {
  return (
    <div>
      <div>
      <MainHeader />
      </div>
      <div style={{backgroundColor:'white'}}>
      <FlightSearchWidget />
      </div>
      
    </div>
  );
};

export default MainPage;
