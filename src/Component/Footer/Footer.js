import React from "react";
import { StyledFooter, Column, Heading, Div } from "./Footer.style.js";
import { Anchor } from "../Anchor/Anchor";

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Column>
          <Heading>Social Media</Heading>
          <Anchor
            href="https://www.facebook.com/katietheloanlady"
            size="lg"
            icon="faFacebook"
            value="Facebook"
          />
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <Div>
            <Anchor
              href="tel:(623)606-2055"
              value="(623) 606-2055"
              size="lg"
              icon="faPhoneSquareAlt"
            />
          </Div>
          <Div>
            <Anchor
              href="mailto:katietheloanlady@nakmortgage.com"
              value="katietheloanlady@nakmortgage.com"
              size="lg"
              icon="faEnvelope"
            />
          </Div>
          <Div>
            <Anchor
              href="tel:(602)295-1230"
              value="(602) 295-1230"
              size="lg"
              icon="faPhoneSquareAlt"
            />
          </Div>
          <Div>
            <Anchor
              href="mailto:aj@nakmortgage.com"
              value="aj@nakmortgage.com"
              size="lg"
              icon="faEnvelope"
            />
          </Div>
        </Column>
        <Column>
          <Heading>Resource</Heading>
          <Div>
            <Anchor
              href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=2133582"
              value="NMLS - Mortgage Licensing"
              size="lg"
              icon="faLandmark"
            />
          </Div>
          <Div>
            <Anchor
              href="https://www.consumerfinance.gov/"
              value="Consumer Financial Protection Bureau"
              size="lg"
              icon="faPiggyBank"
            />
          </Div>
        </Column>
      </StyledFooter>
    );
  }
}
export default Footer;
