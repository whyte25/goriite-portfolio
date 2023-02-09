import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import Logo from "./Logo";
import Pdf from "./CV-Resume.pdf";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const toggleLinks = () => {
    setShow(!show);
  };
  return (
    <nav>
      <Logo>
        <img src="../../img/logo-header.svg" alt="" className="logo" />
      </Logo>
      <button className="menu" onClick={toggleLinks}>
        <FaBars />
      </button>
      <ul
        className={`${show ? "nav-links show-nav" : "nav-links"}`}
        onClick={toggleLinks}
      >
        <button className="close-nav" onClick={toggleLinks}>
          <FaTimes />
        </button>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            about
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            contact
          </NavLink>
        </li>
      </ul>
      <a className="btn-resume" href={Pdf} download="Resume">
        Get My CV
      </a>
    </nav>
  );
}
