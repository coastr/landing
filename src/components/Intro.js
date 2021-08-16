import * as React from "react";
import "../styles/styling.css";
import mockup from "../images/payMockup2.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-mockup-container">
        <img src={mockup} className="intro-mockup"></img>
      </div>
      <div className="intro-text-container">
        <div className="intro-title">instantly pay </div>
        <div className="intro-title">at restaurants</div>
        <div className="intro-text">
          coastr allows restaurant <br></br>customers to pay their bill <br></br>through their phones
        </div>
      </div>
    </div>
  );
};

export default Intro;
