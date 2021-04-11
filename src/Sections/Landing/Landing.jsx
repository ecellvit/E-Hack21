import React, { useEffect, useState } from "react";
import LOGO from "../../Assets/logo.png";
import Burger from "../../Components/Burger/Burger";
import Menu from "../../Components/Menu/Menu";
import "vscode-codicons/dist/codicon.css";
import "./Landing.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import BG from "../../Assets/bg-landing.png";
import Devfolio from "../../Components/Devfolio/Devfolio";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  return (
    <div>
      <div className="container">
          <img id="blue-bg" src={BG} />
          <div className="content">
            <nav className="flex justify-between nav">
              <div className="lefty flex items-center">
                <div className="logo">
                  <img src={LOGO} alt="E-Summit" />
                </div>
              </div>
              <div className="righty">
                <Menu />
              </div>
              <div className="rightcode">
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              </div>
            </nav>
            <img src={LOGO} alt="E-Summit" />
            <p className="top">E-Cell, VIT Presents</p>
            <h1>E-Hack'21</h1>
            <p className="bottom">
              The 3rd edition of the biggest business fest in South India
            </p>
            <div>
                <Devfolio />
            </div>
          </div>
        <Sidebar open={open} setOpen={setOpen} id={menuId} />
      </div>
    </div>
  );
}

export default Landing;
