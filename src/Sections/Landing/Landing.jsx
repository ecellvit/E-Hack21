import React, { useEffect } from "react";
import LOGO from "../../Assets/logo.png";
// import Burger from "../../Components/Burger/Burger";
// import Menu from "../../Components/Menu/Menu";
// import "vscode-codicons/dist/codicon.css";
import "./Landing.css";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-scroll";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  // const [open, setOpen] = useState(false);
  // const menuId = "main-menu";
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 H 0.728 C 0.760,0,0.76,0.057,0.744,0.104 L 0.483,0.87 C 0.477,0.889,0.466,0.902,0.452,0.904 L 0,1 V 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCliped" clipPathUnits="objectBoundingBox">
            <path d="M 0.776,0.039 C 0.786,0.015,0.787,0,0.824,0 H 1 V 0.813 L 0.543,0.88 C 0.543,0.88,0.491,0.879,0.522,0.794 L 0.776,0.039" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClipS" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.763 C1,0.777,0.973,0.809,0.933,0.816 L0.127,0.987 C0.09,0.996,0,0.98,0,0.94 V0" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClipedS" clipPathUnits="objectBoundingBox">
            <path d="M0,0.419 C0,0.395,0.005,0.356,0.056,0.325 L0.873,0.025 C0.956,0.00,1,0.061,1,0.17 V1 H0 V0.419" />
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <div id="blue-bg">
          <div className="content">
            <img src={LOGO} alt="E-Summit" />
            <p className="top">E-Cell, VIT Presents</p>
            <h1>E-Hack'21</h1>
            <p className="bottom">
              An overnight hackathon for leaders of tomorrow
            </p>
            <div>
              <a id="df" href="https://devfolio.co">
                <button id="devfolio-apply-now">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 115.46 123.46"
                    style={{ height: 24, width: 24, marginRight: 8 }}
                  >
                    <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                    <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
                  </svg>
                  Apply with Devfolio
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <Sidebar open={open} setOpen={setOpen} id={menuId} /> */}
      </div>
    </div>
  );
}

export default Landing;
