import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// animation library
import AOS from "aos";
import "aos/dist/aos.css";
//

/////////pages////////
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ToTop from "./components/ToTop";
import { SkeletonTheme } from "react-loading-skeleton";
////////////////

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToTop />
      <Footer />
    </BrowserRouter>
  );
}
