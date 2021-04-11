import React, { useEffect } from "react";
import PO from "../../Assets/Polygon.svg";
import PORTIS from "../../Assets/Portis.svg";
import TZ from "../../Assets/Tezos.svg";
import DF from "../../Assets/Devfolio.svg";
import CE from "../../Assets/Celo.svg";
import WSS from "../../Assets/wss.svg";
import XDC from "../../Assets/xdc.svg";
import RM from "../../Assets/rm.svg";





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
          <a href="https://www.polygon.technology/">
            <img src={PO} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://wharfstreetstrategies.com/index.html">
            <img src={WSS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="http://rosenfeldmedia.com/">
            <img src={RM} alt="Sponsor Logo" />
          </a>
        </div>
        {/* <div data-aos="flip-up" className="grid-item">
          <a href="https://xinfin.org/">
            <img src={XDC} alt="Sponsor Logo" />
          </a>
        </div> */}
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
