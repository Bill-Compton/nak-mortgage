import React from "react";
import {
  CardContainer,
  Image,
  ContentArea,
  Heading,
  ContentMessage,
  StyledButton,
} from "./Card.style";
import GirlWithDog from "../../Images/girl-with-dog.jpg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CardContainer>
        <Image
          alt={this.props.alt}
          src={GirlWithDog}
          className={`image` + (this.props.lg ? `Large` : `Regular`)}
        />
        <ContentArea
          className={`content` + (this.props.lg ? `Large` : `Regular`)}
        >
          <Heading
            className={this.props.className}
            headingMessage={this.props.headingMessage}
            level={this.props.level}
          />
          <ContentMessage>{this.props.messageBody}</ContentMessage>
          <StyledButton
            href="https://www.google.com"
            button="blue"
            value="Get PreQualified"
            className={this.props.className}
          />
        </ContentArea>
      </CardContainer>
    );
  }
}
