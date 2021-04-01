import React, { useEffect } from "react";
import CC from "../../Assets/coca-cola-logo.png";
import P from "../../Assets/paytm.png";
import SC from "../../Assets/snapchat.png";
import SP from "../../Assets/spotify.png";
import IX from "../../Assets/ixigo.png";
import JB from "../../Assets/jetbrains.png";
import WO from "../../Assets/wooplr.png";
import IS from "../../Assets/internshala.png";
import ZP from "../../Assets/zebpay.png";
import GM from "../../Assets/geeksmate.png";
import YS from "../../Assets/yourstory.png";
import KK from "../../Assets/kaspersky.png";

import "./Sponsors.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="past-sponsors" id="sponsors">
      <div className="sponsor-head"><span>Sponsors</span></div>
      <div className="grid-container">
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.coca-colaindia.com/">
            <img src={CC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://paytm.com/">
            <img src={P} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://open.spotify.com/">
            <img src={SP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.jetbrains.com/">
            <img src={JB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.ixigo.com/">
            <img src={IX} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.snapchat.com/">
            <img src={SC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="#sponsors">
            <img src={WO} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://internshala.com/">
            <img src={IS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://zebpay.com/in/">
            <img src={ZP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://yourstory.com/">
            <img src={YS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="http://geeksmate.io/">
            <img src={GM} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.kaspersky.co.in/">
            <img src={KK} alt="Sponsor Logo" />
          </a>
        </div>
        {/* <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div> */}
      </div>
    </div>
  );
}

export default Sponsors;
