import React from "react";
import "./navbar.css";

const NavBar = ({ onTextChange, productcategories }) => {
  return (
    <nav>
      <p> Shopping Store </p>
      <input type="text" onChange={onTextChange} placeholder="Search product" />
    </nav>
  );
};

export default NavBar;
