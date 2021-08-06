import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/NAK-Logo.svg";
import { Nav, Image } from "./Navbar.style.js";

function Navbar() {
  return (
    <Nav className="navContainer" id="navigation">
      <Link to="/">
        <Image className="logoImage" src={Logo} />
      </Link>
      <Link to="/AboutUS">About Us</Link>
      <Link to="/Pricing">Rates & Tools</Link>
      <a href="https://2133582.my1003app.com/">Application</a>
    </Nav>
  );
}
export default Navbar;
