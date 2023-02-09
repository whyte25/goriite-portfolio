import React from "react";
import Hire from "../components/Hire";
import ContactForm from "../components/ContactForm";
import Testimonail from "../components/Testimonail";

import "./About.scss";
import PagesHeading from "../components/PagesHeading";

export default function About() {
  return (
    <div>
      <PagesHeading>
        <h1>about me </h1>
        <p>home / about me</p>
      </PagesHeading>
      <div
        className="about-wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="about-1">
          <img src="../../img/about-picture.png" alt="" className="about-img" />
          <div className="about-1-content-wrapper">
            <h3 className="about-1-heading">I Create Products Not Just Art.</h3>
            <p className="content-1">
              <span>
                Beyond a competent hand, the success of your project is also
              </span>
              <span>
                dependent on a listening ear. someone who will be empathetic
              </span>
              <span>enough to put themselves in your shoes.</span>
            </p>
            <p className="content-2">
              <span>I map out the key aspects of products;</span>
              <span>
                what it is, who it is for, when & where it will be used.
              </span>
            </p>
            <p className="content-3">
              <span>
                Vision captures the essence of the product. it helps build a
              </span>
              <span>
                common understanding of what you are trying to build and
              </span>
              <span>what you are not building.</span>
            </p>
          </div>
        </div>
        <div className="about-2">
          <div className="about-2-content-wrapper">
            <h3 className="about-2-heading">
              I prioritize benefits over features in my designs.
            </h3>
            <p className="content-1">
              <span>
                At every project discussion, I do my best to help my clients
                identify
              </span>
              <span>
                market opportunities, clearly define the problem, develop a
                proper
              </span>
              <span>
                solution for that problem and help validate the solution with
                real users.
              </span>
            </p>
            <p className="content-2">
              <span>
                Problems are opportunities in disguise. With this in mind, i am
                always
              </span>
              <span>
                quick to identify problems in order to see opportunities.
              </span>
            </p>
          </div>
          <div className="about-info">
            <div className="info-heading-wrapper">
              <img src="../../img/arrow-backward.svg" alt="" />
              <h2>
                <span className="h2-span">Reasons Why You </span>
                <span className="h2-span">Should Hire Me</span>
              </h2>
            </div>

            <small>Talk with me anytime</small>

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
      <Hire>
        <span>Hiring me is a decision </span>
        <span>you won’t regret.</span>
      </Hire>
      <Testimonail />
      <ContactForm />
    </div>
  );
}
