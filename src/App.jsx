import React from "react";
import "./App.css";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Landing from "./Sections/Landing/Landing";
import Tracks from "./Sections/Tracks/Tracks";
// import Prizes from "./Sections/Prizes/Prizes";
import Sponsors from "./Sections/Sponsors/Sponsors";
import Footer from "./Sections/Footer/Footer";
// import Speakers from "./Sections/Speakers/Speakers";
// import Faqs from "./Sections/Faqs/Faqs";

function App() {
  return (
    <>
      <Landing />
      <AboutUs />
      <Tracks />
      {/* <Prizes /> */}
      {/* <Speakers /> */}
      <div className="blue-grad">
        <Sponsors />
        {/* <div className="yellow-grad">
          <Faqs />
        </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
