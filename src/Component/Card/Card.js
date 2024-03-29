import React, { useState, useEffect } from "react";
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
import { isSpaceKey } from "../../Helpers/events";
import { useWindowSize } from "../../Hooks/useWindowSize";

export default function Card(props) {
  const EHL = "https://d1g5n2x1uyxgrd.cloudfront.net/images/EHL.png";
  const AJ = "https://d1g5n2x1uyxgrd.cloudfront.net/images/AJ.jpeg";
  const Rates = "https://d1g5n2x1uyxgrd.cloudfront.net/images/rates.jpeg";
  const GetLoan = "https://d1g5n2x1uyxgrd.cloudfront.net/images/getLoan.jpeg";
  const Team = "https://d1g5n2x1uyxgrd.cloudfront.net/images/team.jpeg";
  const EqualHousing =
    "https://d1g5n2x1uyxgrd.cloudfront.net/images/EqualHousing.svg";
  const EqualHousingMobile =
    "https://d1g5n2x1uyxgrd.cloudfront.net/images/EqualHousingMobile.svg";
  const Default = "https://d1g5n2x1uyxgrd.cloudfront.net/images/comingSoon.svg";
  const [image, setImage] = useState(Default);
  const [icon, setIcon] = useState(EHL);
  const [hasButton, setHasButton] = useState(false);
  let isMobile = useWindowSize();

  useEffect(() => {
    if (props.href || props.link) {
      setHasButton(true);
    }
  });

  useEffect(() => {
    switch (props.image) {
      case "Girl":
        setImage(GetLoan);
        break;
      case "Team":
        setImage(Team);
        break;
      case "Rates":
        setImage(Rates);
        break;
      case "Mortgage":
        if (isMobile) {
          setImage(EqualHousingMobile);
        } else {
          setImage(EqualHousing);
        }
        break;
      default:
        setImage(Default);
    }
  });

  const handleKeyPress = (e, url) => {
    if (isSpaceKey(e)) {
      window.location.href = url || `/${this.props.link}`;
    }
  };
  return (
    <CardContainer>
      <Image alt={props.alt} src={image} />
      <ContentArea className={`content` + (props.lg ? `Large` : `Regular`)}>
        <Heading
          className={props.className}
          headingMessage={props.headingMessage}
          level={props.level}
        />
        {!isMobile && <ContentMessage>{props.messageBody}</ContentMessage>}
        {isMobile && props.icon && (
          <ContentMessage>{props.messageBody}</ContentMessage>
        )}
        {props.href && (
          <StyledButton
            href={props.href}
            button={props.color}
            value={props.buttonText}
            className={props.className}
          />
        )}
        {props.link && (
          <StyledLink
            to={props.link}
            button={props.color}
            value={props.buttonText}
            onKeyPress={handleKeyPress}
          >
            {props.buttonText}
          </StyledLink>
        )}
        {props.icon && (
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
            <Icon alt={`Equal Housing Lender Icon`} src={icon}></Icon>
          </a>
        )}
      </ContentArea>
    </CardContainer>
  );
}
