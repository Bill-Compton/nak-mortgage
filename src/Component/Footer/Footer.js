import React from "react";
import {
  StyledFooter,
  Column,
  Heading,
  Div,
} from "./Footer.style.js";
import { Anchor } from "../Anchor/Anchor"

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Column>
          <Heading>Social Media</Heading>
          <Anchor href="https://www.facebook.com/katietheloanlady" size="lg" icon="faFacebook" value="Facebook" />
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <Div>
            <Anchor href="tel:(623)606-2055" value="(623) 606-2055" size="lg" icon="faPhoneSquareAlt" />
          </Div>
          <Div>
            <Anchor href="mailto:katietheloanlady@outlook.com" value="katietheloanlady@outlook.com" size="lg" icon="faEnvelope" />
          </Div>
        </Column>
        <Column>
          <Heading>Partners</Heading>
          <Div>
            <Anchor href="https://www.prmg.net/" value="PRMG" size="lg" icon="faHandsHelping" />
          </Div>
        </Column>
      </StyledFooter>
    );
  }
}
export default Footer;
