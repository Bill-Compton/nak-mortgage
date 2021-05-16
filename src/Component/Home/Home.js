import React from "react";
import { Container } from "./Home.style";
import Card from "../Card/Card";
import { GIRL_WITH_DOG_IMAGE } from "../../Constants/Image";
import { photo } from "../../Images/girl-with-dog.jpg";
import { BUYING_HOME } from "../../Constants/Messages"

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card
          alt={GIRL_WITH_DOG_IMAGE.alt}
          lg={true}
          headingMessage={BUYING_HOME.title}
          level={2}
          messageBody={BUYING_HOME.message}
        >
          {GIRL_WITH_DOG_IMAGE.url}
        </Card>
      </Container>
    );
  }
}
