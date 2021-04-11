import React, { useEffect } from "react";
import "./Event.css";
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
            Timeline
          </span>
          <div className="rb-container">
            <ul className="rb">
              <li>
                <div className="list-title">29th April -- Day 1</div>
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
                  <EventCard
                    head="E-Talk"
                    // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
                    // reg="start"
                    content="Prominent speakers from the entrepreneurial world deliver a talk to promote the ethos of entrepreneurship in the campus. The session is open to the audience's questions, thus furnishing their minds with a clearer picture of entrepreneurship."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">30th April -- Day 2</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="E-Talk"
                    // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
                    // reg="start"
                    content="Prominent speakers from the entrepreneurial world deliver a talk to promote the ethos of entrepreneurship in the campus. The session is open to the audience's questions, thus furnishing their minds with a clearer picture of entrepreneurship."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">1st May -- Day 3</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="E-Talk"
                    // link="https://dare2compete.com/o/paradigm-vellore-institute-of-technology-vit-vellore-156100"
                    // reg="start"
                    content="Prominent speakers from the entrepreneurial world deliver a talk to promote the ethos of entrepreneurship in the campus. The session is open to the audience's questions, thus furnishing their minds with a clearer picture of entrepreneurship."
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
