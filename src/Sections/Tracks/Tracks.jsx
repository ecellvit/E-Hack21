import React, { useEffect } from "react";
import "./Tracks.css";
import EventCard from "../../Components/EventCard/EventCard";
import Aos from "aos";
import "aos/dist/aos.css";
import ai from "../../Assets/ai.png";
import blockchain from "../../Assets/blockchain.png";
import design from "../../Assets/design.png";
import fintech from "../../Assets/fintech.png";
import open from "../../Assets/open.png";

function Event() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div id="events">
        <div data-aos="flip-left" className="separator">
          <span>Tracks</span>
        </div>
        <div className="d-flex">
          <EventCard head="Blockchain" prize="1,10,000" src={blockchain} />
          <EventCard head="AI/ML" prize="10,000" src={ai} />
          <EventCard head="Design" prize="10,000" src={design} />
          <EventCard head="Fintech" prize="10,000" src={fintech} />
          <EventCard head="Open Innovation" prize="10,000" src={open} />
        </div>
      </div>
    </>
  );
}

export default Event;
