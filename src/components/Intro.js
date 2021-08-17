import * as React from "react";
import "../styles/styling.css";
import mockup from "../images/payMockup2.png";
import wave from "../images/introWave.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="intro-mockup-container">
          <img src={mockup} className="intro-mockup"></img>
        </div>
        <div className="intro-text-container">
          <div className="intro-title">instantly pay </div>
          <div className="intro-title" style={{ marginTop: "-5px" }}>
            at restaurants
          </div>
          <div className="intro-text">
            coastr allows restaurant <br></br>customers to pay their bill <br></br>through their phones
          </div>
        </div>
      </div>
      <div className="intro-wave-container">
        <img className="intro-wave" src={wave}></img>
      </div>
    </div>
  );
};

export default Intro;
