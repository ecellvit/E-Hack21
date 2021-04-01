import React from "react";
import "./App.css";
// import Event from "./Sections/Event/Event";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Landing from "./Sections/Landing/Landing";
import Sponsors from "./Sections/Sponsors/Sponsors";
import Footer from "./Sections/Footer/Footer";
// import Speakers from "./Sections/Speakers/Speakers";

function App() {
  return (
    <>
      <Landing />
      <AboutUs />
      {/* <Event /> */}
      {/* <Speakers /> */}
      <div className="blue-grad">
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}

export default App;
