import React from "react";
import "./App.css";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Landing from "./Sections/Landing/Landing";
import Tracks from "./Sections/Tracks/Tracks";
import Sponsors from "./Sections/Sponsors/Sponsors";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <>
      <Landing />
      <AboutUs />
      <Tracks />
      <div className="blue-grad">
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}

export default App;
