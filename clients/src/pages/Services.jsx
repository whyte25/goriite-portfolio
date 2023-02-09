import React from "react";
import ContactForm from "../components/ContactForm";
import Hire from "../components/Hire";
import PagesHeading from "../components/PagesHeading";
import Partners from "../components/Partners";
import "./Services.scss";

export default function Services() {
  return (
    <>
      <PagesHeading>
        <h1>my services</h1>
        <p>home / services</p>
      </PagesHeading>
      <div className="about-services">
        <div className="about-services-wrapper">
          <div
            className="about-service-container"
            data-aos="slide-right"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/icon-ux.svg"
                alt=""
                className="about-service-icon"
              />
            </div>
            <h3 className="about-service-heading">UI/UX Design</h3>
            <p className="about-service-content">
              I integrate and align user experience principles into your design
              in order for it to be easy, enjoyable and understandable
            </p>
          </div>
          <div
            className="about-service-container"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/bell.svg"
                alt=""
                className="about-service-icon"
              />
            </div>
            <h3 className="about-service-heading">Digital Marketing</h3>
            <p className="about-service-content">
              I help to boost brand awareness while driving traffic to acquire
              new customers . i create User personas for effective marketing
            </p>
          </div>
          <div
            className="about-service-container"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/airplay.svg"
                alt=""
                className="about-service-icon"
              />
            </div>

            <h3 className="about-service-heading">Website Design</h3>
            <p className="about-service-content">
              My designs help guide the eyes of your users and point them to the
              exact direction you want them to look. safe to say i draw
              attention to the essentials.
            </p>
          </div>
          <div
            className="about-service-container"
            data-aos="slide-right"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/icon-ux.svg"
                alt=""
                className="about-service-icon"
              />
            </div>
            <h3 className="about-service-heading">UX Writing</h3>
            <p className="about-service-content">
              I help to curate in app copy and instructions that are simple
              enough, conveys your message to your users in a pleasing and
              friendly manner.
            </p>
          </div>
          <div
            className="about-service-container"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/bell.svg"
                alt=""
                className="about-service-icon"
              />
            </div>
            <h3 className="about-service-heading"> Branding</h3>
            <p className="about-service-content">
              Any brand that will connect with people should have a story to
              tell and a feeling to inspire. this is exactly what i aim at when
              curating a brand identity for my clients.
            </p>
          </div>
          <div
            className="about-service-container"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <div className="icon-container">
              <img
                src="../../img/airplay.svg"
                alt=""
                className="about-service-icon"
              />
            </div>

            <h3 className="about-service-heading"> Project Management </h3>
            <p className="about-service-content">
              A great product scope without a formidable team to execute is not
              only waste of time but also a waste of money. i manage teams and
              ensure deadlines are met.
            </p>
          </div>
        </div>
      </div>
      <Hire>
        <span>Dont hesistate contacting me,</span>
        <span> i`m available.</span>
      </Hire>
      <Partners />
      <ContactForm />
    </>
  );
}
