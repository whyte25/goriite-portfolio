import React from "react";

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import "./Footer.scss";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-1-wrapper">
        <Logo>
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="../../img/logo-footer.svg"
            alt=""
          />
        </Logo>

        <a
          className="mail"
          data-aos="fade-up-right"
          href="mailto:bolafehintolabofets@gmail.com"
        >
          online@fehintolafirst.com
        </a>

        <h4 data-aos="fade-up-left">Ibadan, Oyo State Nigeria.</h4>
      </div>

      <div className="footer-2-wrapper">
        <div className="footer-content">
          Copyright ©2022 All rights reserved | This website is designed with
          <img src="../../img/icon-love.svg" alt="" className="footer-icon" />
          by
          <span>FehintolaFirst</span>
        </div>
        <div className="social-icons">
          <p className="footer-text">Stay Connected</p>
          <a
            href="https://www.linkedin.com/in/fehintolafirst/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://twitter.com/fehintolafirst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://web.facebook.com/ManOfInfluenceAndAffluence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.instagram.com/fehintolafirst_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
