import React from "react";
import { Container } from "./Home.style";
import Card from "../Card/Card";
import { GIRL_WITH_DOG_IMAGE } from "../../Constants/Image";
import { photo } from "../../Images/girl-with-dog.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card
          alt={GIRL_WITH_DOG_IMAGE.alt}
          lg={true}
        >
          {GIRL_WITH_DOG_IMAGE.url}
        </Card>
      </Container>
    );
  }
}
