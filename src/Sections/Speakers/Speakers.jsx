import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Speakers.css";
import ajit from "../../Assets/Ajit.jpg";
import ukil from "../../Assets/ukil.jpg";
import venky from "../../Assets/venky.jpg";
import shashank from "../../Assets/shashank.jpg";
import kumar from "../../Assets/kumar.jpg";
import rahul from "../../Assets/rahul.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Speakers() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div id="speakers">
      <div data-aos="flip-left" className="separator">
        <span>Past Speakers</span>
      </div>
      <div className="carousel">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1200,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1200,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={ajit} alt="Speaker" />
              <div className="speaker-detail">
                <div>Ajit Sivarkar</div>
                <div>VP &amp; GM</div>
                <div>Lenovo</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={ukil} alt="Speaker" />
              <div className="speaker-detail">
                <div>Raja Ukil</div>
                <div>VP &amp; Global Head</div>
                <div>Wipro</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={venky} alt="Speaker" />
              <div className="speaker-detail">
                <div>Venkatesh Murthy</div>
                <div>Founder &amp; CEO</div>
                <div>Wharf Street Strategies</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={shashank} alt="Speaker" />
              <div className="speaker-detail">
                <div>Shashank Vaishnav</div>
                <div>Founder &amp; CTO</div>
                <div>WittyFeed</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={kumar} alt="Speaker" />
              <div className="speaker-detail">
                <div>Kumar Gaurav</div>
                <div>Founder</div>
                <div>Cashaa</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={rahul} alt="Speaker" />
              <div className="speaker-detail">
                <div>Rahul Narvekar</div>
                <div>Founder</div>
                <div>The Indian Network</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Speakers;
