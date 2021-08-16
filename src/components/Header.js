import * as React from "react";
import "../styles/styling.css";
import wordmark from "../images/wordmarkBlue2PNG.png";

const Header = () => {
  return (
    <div className="header">
      <img src={wordmark} className="wordmark"></img>
    </div>
  );
};

export default Header;
