import React from "react";
import "./PagesHeading.scss";

export default function PagesHeading({ children }) {
  return (
    <section className="pages-heading">
      <div>
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
        {children}
      </div>
      <img src="../../img/about-svg.svg" alt="" />
    </section>
  );
}