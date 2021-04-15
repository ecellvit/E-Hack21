import React, { useEffect } from "react";
import PO from "../../Assets/Polygon.svg";
import PORTIS from "../../Assets/Portis.svg";
import TZ from "../../Assets/Tezos.svg";
import DF from "../../Assets/Devfolio.svg";
import CE from "../../Assets/Celo.svg";
import WSS from "../../Assets/wss.svg";
import XDC from "../../Assets/xdc.png";
import RM from "../../Assets/rm.svg";
import GM from "../../Assets/GMC.png";
import XYZ from "../../Assets/xyz.png";
import SF from "../../Assets/scriptfoundation.png";
import OP from "../../Assets/1password.png";
import CB from "../../Assets/cblogo.png";
import HI from "../../Assets/HackathonsInternationalLogo.png";
import RE from "../../Assets/replit.png";


import "./Sponsors.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="past-sponsors" id="sponsors">
      <div className="sponsor-head">
        <span>Sponsors</span>
      </div>
      <div className="grid-container">
        <div data-aos="flip-up" className="grid-item">
          <a href="https://celo.org/" target="_blank" rel="noreferrer">
            <img src={CE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
            <img src={DF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.portis.io/" target="_blank" rel="noreferrer">
            <img src={PORTIS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://tezos.com/" target="_blank" rel="noreferrer">
            <img src={TZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.polygon.technology/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PO} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://wharfstreetstrategies.com/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WSS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="http://rosenfeldmedia.com/" target="_blank" rel="noreferrer">
            <img src={RM} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://xinfin.org/" target="_blank" rel="noreferrer">
            <img className="xdclogosm" src={XDC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.givemycertificate.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GM} alt="Sponsor Logo" />
          </a>
        </div>{" "}
        <div data-aos="flip-up" className="grid-item">
          <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
            <img src={XYZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.scriptindia.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://1password.com/" target="_blank" rel="noreferrer">
            <img src={OP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://codingblocks.com/" target="_blank" rel="noreferrer">
            <img src={CB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.hackathonsinternational.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HI} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://replit.com/" target="_blank" rel="noreferrer">
            <img src={RE} alt="Sponsor Logo" />
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
