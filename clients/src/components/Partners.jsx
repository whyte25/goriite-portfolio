import React from "react";
import "./Partners.scss";

export default function Partners() {
  return (
    <div className="partners">
      <div className="partners-logo-container">
        <a
          href="https://newdawnsupportservices.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../img/newdawn-logo.svg" alt="" className="newdawn" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            className="partner-logo"
            src="../../img/flotab-logo.svg"
            alt=""
          />
        </a>
        <a
          href="https://goriite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="partner-logo"
            src="../../img/goriite-logo.svg"
            alt=""
          />
        </a>
        <a
          href="https://giftedhands.net.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="partner-logo"
            src="../../img/Giftedhands-logo.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
