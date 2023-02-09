import React, { useState } from "react";
import "./ToTop.scss";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className={`${visible ? "to-top" : ""}`} onClick={scrollToTop}>
      <img src="../../img/arrow-up.svg" alt="" />
    </button>
  );
}
