import React, { useEffect } from "react";
import CountUp from "react-countup";
import "./AboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Counter(props) {
  return (
    <div
      className="counters"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-offset="-20"
    >
      <div className="count">
        <CountUp end={props.count} duration={20} />+
      </div>
      <div className="spec">{props.spec}</div>
    </div>
  );
}

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: "700" });
  }, []);

  return (
    <div className="aboutus" id="about">
      <div data-aos="flip-left" className="separator">
        <span>About E-Hack</span>
      </div>
      <br />
      <div className="random">
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          The Entrepreneurship Cell, VIT is a student club that aims at
          fostering entrepreneurial spirit among the stu nts. E-Cell, VIT is in
          collaboration with Technology Business Incubator (TBI) under
          government of India. TBI along with E-Cell provides the students with
          an advanced platform for converting their potential small scale ideas
          into leading start-ups.
        </p>
      </div>
      <div className="d-flex">
        <Counter count={5000} spec="students" />
        <Counter count={289} spec="start ups" />
        <Counter count={210} spec="mentors" />
        <Counter count={100} spec="incubatees" />
      </div>
      <br />
      <br />
      <div className="random">
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          E-Summit is the conclave which opens the doors to the world of
          entrepreneurship. With it's exclusive class of exhilarating events,
          wonderful workshops, exciting expos and the perfect panel of
          spectacular speakers, E-Summit aims at instilling a sense of
          innovation in the youth.
        </p>
        <br />
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          E-Summit is the 3rd edition of the biggest business fest in South
          India. It is expected to have a massive turnout of participants thus
          providing a great platform for marketing and outreach.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
