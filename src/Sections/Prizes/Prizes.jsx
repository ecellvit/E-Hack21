import React, { useEffect } from "react";
import "./Prizes.css";
import PrizeCard from "../../Components/PrizeCard/PrizeCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div className="prize-container">
        <PrizeCard />
      </div>
    </>
  );
}

export default Event;
