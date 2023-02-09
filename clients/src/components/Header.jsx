import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div
        className="header-content-wrapper"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <p className="header-subheading">VALUE ADDITION IS MY ADDICTION</p>
        <svg
          className="circle-icon"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="23"
            stroke="#EC3D3D"
            stroke-opacity="0.69"
            stroke-width="2"
          />
        </svg>

        <h1 className="header-heading">UI/UX, Interaction & Product Design.</h1>
        <p className="header-content">
          I’m highly skilled at turning the objective of the product into a
          functional user experience. I visualize the goal, conceptualize the
          idea and realize the vision through critical, analytical and design
          thinking. I am able to make firm decisions in favor of the client.
        </p>
        <div className="header-btn-wrapper">
          <a
            className="btn-solid"
            href="https://api.whatsapp.com/send?phone=2348168842202&text=Hi,%20how%20best%20can%20i%20serve%20you?"
            target="_blank"
            rel="noopener noreferrer"
          >
            hire me
          </a>
          <Link to="/about" className="btn-outline">
            learn more
          </Link>
        </div>
      </div>
      <img
        src="../../img/home-picture.png "
        alt=""
        className="header-img"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
      <img
        src="../../img/home-background-svg.svg"
        alt=""
        className="background-svg"
      />
    </header>
  );
}
