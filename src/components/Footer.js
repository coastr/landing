import * as React from "react";
import "../styles/styling.css";
import wordmark from "../images/wordmarkBluePNG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faReddit,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer container">
        <div className="footer-contact row justify-content-center">
          <p className="footer-contact-text col-12 col-lg-6 text-center text-lg-start d-flex justify-content-center">
            currently in development
          </p>
          <a
            className="footer-contact-button col-12 col-lg-6 d-flex justify-content-center"
            href={"mailto:info@coastr.io"}
            target="_blank"
          >
            get updates
          </a>
        </div>
        <div className="footer-social-links">
          <a
            className="footer-social-icon"
            href={"https://twitter.com/trycoastr"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.instagram.com/trycoastr"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.youtube.com/channel/UCeU0lTB_vpqZHzGgcCbz1-A"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.linkedin.com/company/coastrapp"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.tiktok.com/@trycoastr?"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.facebook.com/trycoastr"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            className="footer-social-icon"
            href={"https://www.reddit.com/r/coastr"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faReddit} size="2x" />
          </a>
        </div>
        <div className="footer-text-copyright">
          © 2021 Coastr Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
