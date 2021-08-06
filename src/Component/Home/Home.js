import React from "react";
import { Container } from "./Home.style";
import Card from "../Card/Card";
import { GIRL_WITH_DOG_IMAGE, RATES, TEAM_IMAGE, MORTGAGE } from "../../Constants/Image";
import {
  BUYING_HOME,
  ABOUT_US,
  PRICING,
  LEGAL,
} from "../../Constants/Messages";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card
          id="test"
          alt={GIRL_WITH_DOG_IMAGE.alt}
          lg={true}
          headingMessage={BUYING_HOME.title}
          level={2}
          messageBody={BUYING_HOME.message}
          color="blue"
          href="https://2133582.my1003app.com/"
          buttonText="Get PreQualified"
          image={GIRL_WITH_DOG_IMAGE.url}
        />
        <Card
          alt={TEAM_IMAGE.alt}
          lg={true}
          headingMessage={ABOUT_US.title}
          level={2}
          messageBody={ABOUT_US.message}
          link="aboutUs"
          image={TEAM_IMAGE.url}
          color="white"
          buttonText="About Us"
        />
        <Card
          alt={RATES.alt}
          lg={true}
          headingMessage={PRICING.title}
          level={2}
          messageBody={PRICING.message}
          color="blue"
          link="pricing"
          buttonText="See Pricing"
          image={RATES.url}
        />
        <Card
          alt={MORTGAGE.alt}
          lg={true}
          headingMessage={LEGAL.title}
          level={2}
          messageBody={LEGAL.message}
          image={MORTGAGE.url}
          icon={true}
        />
      </Container>
    );
  }
}
