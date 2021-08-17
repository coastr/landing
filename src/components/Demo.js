import * as React from "react";
import "../styles/styling.css";
import scanMockupImage from "../images/scanMockup.png";
import reviewMockupImage from "../images/reviewMockup.png";
import payMockupImage from "../images/payMockup1.png";
import scanWave from "../images/scanWave.svg";
import reviewWave from "../images/reviewWave.svg";

const Demo = () => {
  return (
    <div className="demo-container">
      <div
        className="demo-scan-container"
        style={{ backgroundColor: "#4658fd", marginTop: "-1px" }}
      >
        <div className="demo-text-container px-2 px-lg-0">
          <div className="demo-text-title">scan</div>
          <div className="demo-text-subtitle">the QR code at your table</div>
        </div>
        <div className="demo-scan-image-container">
          <img src={scanMockupImage} className="demo-scan-image" />
        </div>
      </div>

      <div className="scan-wave-container">
        <img className="scan-wave" src={scanWave}></img>
      </div>

      <div
        className="demo-scan-container"
        style={{ backgroundColor: "#4664fd", marginTop: "-1px" }}
      >
        <div className="demo-scan-image-container">
          <img src={reviewMockupImage} className="review-scan-image" />
        </div>
        <div className="demo-text-container px-2 px-lg-0">
          <div className="demo-text-title">review</div>
          <div className="demo-text-subtitle">your bill</div>
        </div>
      </div>

      <div className="scan-wave-container">
        <img className="scan-wave" src={reviewWave}></img>
      </div>

      <div
        className="demo-scan-container"
        style={{ backgroundColor: "#466dfd", marginTop: "-1px" }}
      >
        <div className="demo-text-container px-3 px-lg-0">
          <div className="demo-text-title">pay</div>
          <div
            style={{ marginTop: "0px", position: "relative" }}
            className="demo-text-subtitle align-self-start"
          >
            and leave!
          </div>
        </div>
        <div className="demo-scan-image-container">
          <img src={payMockupImage} className="demo-scan-image" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
