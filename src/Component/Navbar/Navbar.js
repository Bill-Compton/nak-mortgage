import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../Hooks/useWindowSize";
import {
  Nav,
  Image,
  NavContainer,
  ButtonContainer,
  LogoContainer,
} from "./Navbar.style.js";

function Navbar() {
  const Logo =
    "https://nak-assets.s3.us-west-1.amazonaws.com/images/NAK-Logo.svg";
  let isMobile = useWindowSize();
  let rates = isMobile ? "Rates" : "Rates & Tools";
  let app = isMobile ? "App" : "Application";
  return (
    <Nav className="navContainer" id="navigation">
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <Image className="logoImage" src={Logo} />
          </Link>
        </LogoContainer>
        <ButtonContainer>
          <Link to="/AboutUS">About Us</Link>
          <Link to="/Pricing">{rates}</Link>
          <a href="https://2133582.my1003app.com/">{app}</a>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
}
export default Navbar;
