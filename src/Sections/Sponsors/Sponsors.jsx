import React, { useEffect } from "react";
import PO from "../../Assets/polygon1.png";
import PORTIS from "../../Assets/portis.png";
import TZ from "../../Assets/tezos.png";
import DF from "../../Assets/devfolio.png";
import CE from "../../Assets/celo.png";
import SC from "../../Assets/snapchat.png";
import WO from "../../Assets/wooplr.png";
import IS from "../../Assets/internshala.png";
// import ZP from "../../Assets/zebpay.png";
// import GM from "../../Assets/geeksmate.png";
// import YS from "../../Assets/yourstory.png";
// import KK from "../../Assets/kaspersky.png";

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
          <a href="https://celo.org/">
            <img src={CE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://devfolio.co/">
            <img src={DF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.portis.io/">
            <img src={PORTIS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://tezos.com/">
            <img src={TZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.polygon.com/">
            <img src={PO} alt="Sponsor Logo" />
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
        {/*<div data-aos="flip-up" className="grid-item">
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
        </div>  */}
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
