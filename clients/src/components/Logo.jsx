import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

export default function Logo({ children }) {
  return (
    <>
      <Link to="/">{children}</Link>
    </>
  );
}
