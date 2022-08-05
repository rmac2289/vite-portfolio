import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/about">About Me</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
