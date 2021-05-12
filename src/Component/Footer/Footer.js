import React from "react";
import {
  StyledFooter,
  Column,
  Heading,
  Span,
  Anchor,
  Div,
} from "./Footer.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Column>
          <Heading>Social Media</Heading>
          <Anchor href="https://www.facebook.com/katietheloanlady">
            <Span>
              <FontAwesomeIcon size="lg" icon={faFacebook} />
              Facebook
            </Span>
          </Anchor>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <Div>
            <Anchor href="tel:(623)606-2055">
              <Span>
                <FontAwesomeIcon size="lg" icon={faPhoneSquareAlt} />
                (623) 606-2055
              </Span>
            </Anchor>
          </Div>
          <Div>
            <Anchor href="mailto:katietheloanlady@outlook.com">
              <Span>
                <FontAwesomeIcon size="lg" icon={faEnvelope} />
                katietheloanlady@outlook.com
              </Span>
            </Anchor>
          </Div>
        </Column>
        <Column>
          <Heading>Partners</Heading>
          <Div>
            <Anchor href="https://www.prmg.net/">
              <Span>
                <FontAwesomeIcon size="lg" icon={faHandsHelping} />
                PRMG
              </Span>
            </Anchor>
          </Div>
        </Column>
      </StyledFooter>
    );
  }
}
export default Footer;
