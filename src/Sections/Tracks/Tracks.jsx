import React, { useEffect } from "react";
import "./Tracks.css";
import EventCard from "../../Components/EventCard/EventCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div id="events">
        <div data-aos="flip-left" className="separator"></div>
        <div className="list-wrapper">
          <span data-aos="flip-left" className="event-head">
            Tracks
          </span>
          <div data-aos="flip-left">
            {/* reg prop is either 'start' (Will start later) or 'end' (Ended) or '' (Ongoing) */}
            <EventCard
              head="Paradigm"
              // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
              // reg="start"
              content=""
            />
          </div>
          <div data-aos="flip-left">
            {/* reg prop is either 'start' (Will start later) or 'end' (Ended) or '' (Ongoing) */}
            <EventCard
              head="Paradigm"
              // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
              // reg="start"
              content=""
            />
          </div>
          <div data-aos="flip-left">
            {/* reg prop is either 'start' (Will start later) or 'end' (Ended) or '' (Ongoing) */}
            <EventCard
              head="Paradigm"
              // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
              // reg="start"
              content="Change the way you approach problems by putting yourself in the shoes of eminent personalities. Envision brilliant ideas worthy of bringing an impactful change in the world."
            />
          </div>
          <div data-aos="flip-left">
            {/* reg prop is either 'start' (Will start later) or 'end' (Ended) or '' (Ongoing) */}
            <EventCard
              head="Paradigm"
              // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
              // reg="start"
              content="Change the way you approach problems by putting yourself in the shoes of eminent personalities. Envision brilliant ideas worthy of bringing an impactful change in the world."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
