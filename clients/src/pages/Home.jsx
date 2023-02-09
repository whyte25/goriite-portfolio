import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

///////
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hire from "../components/Hire";
import Testimonail from "../components/Testimonail";
import Partners from "../components/Partners";
import ContactForm from "../components/ContactForm";
import PortfolioSection from "../components/PortfolioSection";

export default function home() {
  return (
    <>
      <Header />
      <Hero />
      <PortfolioSection />
      <Hire>
        <span>Dont bother to ask;</span>
        <span>i`m available</span>
      </Hire>
      <Testimonail />
      <Partners />
      <ContactForm />
    </>
  );
}
