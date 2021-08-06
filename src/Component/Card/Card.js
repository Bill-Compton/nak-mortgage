import React from "react";
import {
  CardContainer,
  Image,
  ContentArea,
  Heading,
  ContentMessage,
  StyledButton,
  StyledLink,
  Icon,
} from "./Card.style";
import GirlWithDog from "../../Images/girl-with-dog.jpg";
import Default from "../../Images/default.jpg";
import Team from "../../Images/team.jpg";
import Katie from "../../Images/Katie.jpg";
import Rates from "../../Images/rates.jpg";
import EHL from "../../Images/EHL.png";
import ComingSoon from "../../Images/coming-soon.webp";
import Mortgage from "../../Images/Mortgage.webp";
import { isSpaceKey } from "../../Helpers/events";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Default,
      icon: EHL,
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
      case "ComingSoon":
        this.setState({ image: ComingSoon });
        break;
      case "Mortgage":
        this.setState({ image: Mortgage });
        break;
      default:
        this.setState({ image: Default });
    }
  }

  handleKeyPress = (e, url) => {
    if (isSpaceKey(e)) {
      window.location.href = url || `/${this.props.link}`;
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
          {this.props.icon && (
            <a
              target="_blank"
              href="https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview"
              onKeyPress={(e) => {
                this.handleKeyPress(
                  e,
                  "https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview"
                );
              }}
            >
              <Icon
                alt={`Equal Housing Lender Icon`}
                src={this.state.icon}
              ></Icon>
            </a>
          )}
        </ContentArea>
      </CardContainer>
    );
  }
}
