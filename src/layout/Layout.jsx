import React from "react";
import { Nav } from "../Components/Nav";
import "../styles/layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      {children}
    </div>
  );
};
