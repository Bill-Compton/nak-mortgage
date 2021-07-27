import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/NAK-Logo.svg";
import { Nav, Image } from "./Navbar.style.js";

class Navbar extends React.Component {
  render() {
    return (
      <Nav className="navContainer" id="navigation">
        <Link to="/">
          <Image className="logoImage" src={Logo} />
        </Link>
      </Nav>
    );
  }
}
export default Navbar;
