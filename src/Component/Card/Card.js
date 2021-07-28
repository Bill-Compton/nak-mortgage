import React from "react";
import {
  CardContainer,
  Image,
  ContentArea,
  Heading,
  ContentMessage,
  StyledButton,
  StyledLink,
} from "./Card.style";
import GirlWithDog from "../../Images/girl-with-dog.jpg";
import Default from "../../Images/default.jpg";
import Team from "../../Images/team.jpg";
import Katie from "../../Images/Katie.jpg";
import Rates from "../../Images/rates.jpg";
import { isSpaceKey } from "../../Helpers/events";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Default,
      hasButton: false,
    };
  }

  componentDidMount() {
    if (this.props.href || this.props.link) {
      this.setState({ hasButton: true });
    }

    switch (this.props.image) {
      case "Girl":
        this.setState({ image: GirlWithDog });
        break;
      case "Team":
        this.setState({ image: Team });
        break;
      case "Katie":
        this.setState({ image: Katie });
        break;
      case "Rates":
        this.setState({ image: Rates });
        break;
      default:
        this.setState({ image: Default });
    }
  }

  handleKeyPress = (e) => {
    if (isSpaceKey(e)) {
      window.location.href = `/${this.props.link}`;
    }
  };

  render() {
    return (
      <CardContainer>
        <Image
          alt={this.props.alt}
          src={this.state.image}
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
          {this.props.href && (
            <StyledButton
              href={this.props.href}
              button={this.props.color}
              value={this.props.buttonText}
              className={this.props.className}
            />
          )}
          {this.props.link && (
            <StyledLink
              to={this.props.link}
              button={this.props.color}
              value={this.props.buttonText}
              onKeyPress={this.handleKeyPress}
            >
              {this.props.buttonText}
            </StyledLink>
          )}
        </ContentArea>
      </CardContainer>
    );
  }
}
