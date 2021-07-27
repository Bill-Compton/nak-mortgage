import React from "react";
import { Container, StyledCard } from "./AboutUs.style";
import { KATIE, TEAM_IMAGE } from "../../Constants/Image";
import { KATIE_COMPTON, ANDREW } from "../../Constants/Messages";

export default class AboutUs extends React.Component {
  render() {
    return (
      <Container>
        <StyledCard
          alt={KATIE.alt}
          lg={true}
          headingMessage={KATIE_COMPTON.title}
          level={2}
          messageBody={KATIE_COMPTON.message}
          color="blue"
          href="mailto:katietheloanlady@nakmortgage.com"
          buttonText="Email Katie"
          image={KATIE.url}
        />
        <StyledCard
          alt={KATIE.alt}
          lg={true}
          headingMessage={ANDREW.title}
          level={2}
          messageBody={ANDREW.message}
          href="mailto:aj@nakmortgage.com"
          image={KATIE.url}
          color="white"
          buttonText="Email AJ"
        />
      </Container>
    );
  }
}
