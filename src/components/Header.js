import * as React from "react";
import "../styles/styling.css";
import wordmark from "../images/wordmark.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item-container"></div>
      <div className="header-item-container">
        <img src={wordmark} className="wordmark"></img>
      </div>
      <div className="header-item-container">
        <a
          style={{ marginTop: "10px", position: "relative", top: "2px" }}
          className="footer-contact-button d-none d-md-block"
          href={"http://eepurl.com/hGdZPD"}
          target="_blank"
        >
          get updates
        </a>
      </div>
    </div>
  );
};

export default Header;

// <img src={wordmark} className="wordmark"></img>
