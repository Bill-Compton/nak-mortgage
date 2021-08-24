import React from "react";
import { Container, StyledCard } from "./AboutUs.style";
import { KATIE, ANDREW } from "../../Constants/Image";
import { KATIE_COMPTON, ANDREW_JEFFERY } from "../../Constants/Messages";

export default function AboutUs() {
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
        alt={ANDREW.alt}
        lg={true}
        headingMessage={ANDREW_JEFFERY.title}
        level={2}
        messageBody={ANDREW_JEFFERY.message}
        href="mailto:aj@nakmortgage.com"
        image={ANDREW.url}
        color="white"
        buttonText="Email AJ"
      />
    </Container>
  );
}
