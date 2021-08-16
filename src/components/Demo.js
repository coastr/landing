import * as React from "react";
import "../styles/styling.css";
import scanMockupImage from "../images/scanMockup.png";
import reviewMockupImage from "../images/reviewMockup.png";
import payMockupImage from "../images/payMockup1.png";

const Demo = () => {
  return (
    <div className="demo-container">
      <div className="demo-scan-container" style={{ backgroundColor: "#4658fd" }}>
        <div className="demo-text-container">
          <div className="demo-text-title">Scan</div>
          <div className="demo-text-subtitle">the QR code at your table</div>
        </div>
        <div className="demo-scan-image-container">
          <img src={scanMockupImage} className="demo-scan-image" />
        </div>
      </div>

      <div className="demo-scan-container" style={{ backgroundColor: "#4664fd" }}>
        <div className="demo-scan-image-container">
          <img src={reviewMockupImage} className="demo-scan-image" />
        </div>
        <div className="demo-text-container">
          <div className="demo-text-title demo-review-text">Review</div>
          <div className="demo-text-subtitle demo-review-text">your bill</div>
        </div>
      </div>

      <div className="demo-scan-container" style={{ backgroundColor: "#466dfd" }}>
        <div className="demo-text-container">
          <div className="demo-text-title">
            Pay <span>&#38;</span>
          </div>
          <div style={{ marginTop: "-30px" }} className="demo-text-title">
            leave!
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
