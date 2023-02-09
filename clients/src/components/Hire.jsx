import React from "react";
import Button from "./Button";

//
import "./Hire.scss";

export default function Hire({ children }) {
  return (
    <div className="hire">
      <div
        className="hire-heading-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 className="hire-heading">{children}</h1>
        <Button />
      </div>

      <img src="../../img/hire-svg.svg" alt="" className="hire-svg" />
    </div>
  );
}
