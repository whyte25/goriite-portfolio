import React from "react";
import Form from "../components/Form";
import PagesHeading from "../components/PagesHeading";
import "./Contact.scss";
import { ScrollRestoration } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <PagesHeading>
        <h1>my contact</h1>
        <p>home / contact</p>
      </PagesHeading>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.112311136645!2d3.9420805181314935!3d7.434450591596721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ecd92e1fa771%3A0x89dcb84ba719e104!2sAkobo%20200132%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1662788255341!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-info">
        <Form />

        <div className="info-wrapper">
          <div className="info-container" data-aos="slide-up">
            <img src="../../img/house.svg" alt="" className="info-icon" />
            <span>
              <p>Ibadan,Nigeria</p>
              <p>Akobo</p>
            </span>
          </div>
          <div className="info-container" data-aos="slide-up">
            <img src="../../img/phone.svg" alt="" className="info-icon" />
            <span>
              <a href="tel:+234 81 6884 2202">+234 81 6884 2202</a>
              <p>Mon To Fri 9am To 6pm</p>
            </span>
          </div>
          <div className="info-container" data-aos="slide-up">
            <img src="../../img/mail.svg" alt="" className="info-icon" />
            <span>
              <a href="mailto:bolafehintolabofets@gmail.com">
                online@fehintolafirst.com
              </a>
              <p>Send Us Your Query!</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
