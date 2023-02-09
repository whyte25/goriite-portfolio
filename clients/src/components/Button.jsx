import React from "react";
import Pdf from "./CV-Resume.pdf";

import "./Button.scss";

export default function Button() {
  return (
    <>
      <a className="btn" href={Pdf} download="Resume">
        Get My CV
      </a>
    </>
  );
}
