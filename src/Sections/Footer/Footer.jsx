import IMG from "../../Assets/logo_dark.svg";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookSquare,
//   faTwitterSquare,
//   faLinkedin,
//   faInstagramSquare,
//   faMedium,
// } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={IMG} alt="E-summit VIT" />
      <span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
      <a href="mailto:helloecellvit@gmail.com">helloecellvit@gmail.com</a>
      <a href="tel:+919971523455">+919971523455</a>
      {/* <div className="bottom">
        <div style={{ display: "block" }}>
          <a href="https://twitter.com/ecell_vit">
            <span>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </a>
          <a href="https://www.facebook.com/ecellvit">
            <span>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>
          </a>
          <a href="https://www.linkedin.com/company/ecellvitvellore">
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
          <a href="https://medium.com/e-cell-vit">
            <span>
              <FontAwesomeIcon icon={faMedium} />
            </span>
          </a>
          <a href="https://www.instagram.com/ecell_vit">
            <span>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
