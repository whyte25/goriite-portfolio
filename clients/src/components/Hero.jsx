import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-section1  "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="hero-content-wrapper1">
          <h3 className="content-heading">
            Designing & Normalizing Excellence Through Tech....
          </h3>
          <p className="content-1">
            Enthusiastic and optimistic about the processes i carry out at every
            stage in the product development cycle. My open mindedness has been
            unlocking opportunities for me in the global community.
          </p>
          <p className="content-2">
            I look forward to making your project the next big product in the
            market.
          </p>
        </div>

        <div className="discuss">
          <h2 className="discuss-heading">Any Type Of Query & Discussion.</h2>
          <div className="discuss-link-conatiner">
            <p className="mail-text">Late talk with me</p>
            <a className="mail" href="mailto:bolafehintolabofets@gmail.com">
              online@fehintolafirst.com
              <img
                className="mail-icon"
                src="../../img/arrow-forward.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-services">
        <h2
          className="hero-services-title"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          What Services you will Get from me!
        </h2>
        <div className="hero-services-wrapper">
          <div
            className="hero-service-container"
            data-aos="slide-right"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/icon-ux.svg"
                alt=""
                className="hero-service-icon"
              />
            </div>
            <h3 className="hero-service-heading">UI/UX Design</h3>
            <p className="hero-service-content">
              I integrate and align user experience principles into your design
              in order for it to be easy, enjoyable and understandable
            </p>
          </div>
          <div
            className="hero-service-container"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/bell.svg"
                alt=""
                className="hero-service-icon"
              />
            </div>
            <h3 className="hero-service-heading">Digital Marketing</h3>
            <p className="hero-service-content">
              I help to boost brand awareness while driving traffic to acquire
              new customers . i create User personas for effective marketing
            </p>
          </div>
          <div
            className="hero-service-container"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/airplay.svg"
                alt=""
                className="hero-service-icon"
              />
            </div>

            <h3 className="hero-service-heading">Website Design</h3>
            <p className="hero-service-content">
              My designs help guide the eyes of your users and point them to the
              exact direction you want them to look. safe to say i draw
              attention to the essentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
