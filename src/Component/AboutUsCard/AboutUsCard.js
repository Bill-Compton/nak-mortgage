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
import GirlWithDog from "../../Images/girl-with-dog.jpg";
import Default from "../../Images/default.jpg";
import Team from "../../Images/team.jpg";
import Katie from "../../Images/Katie.jpg";
import Rates from "../../Images/rates.jpg";
import EHL from "../../Images/EHL.png";
import ComingSoon from "../../Images/coming-soon.webp";
import Mortgage from "../../Images/Mortgage.webp";
import { isSpaceKey } from "../../Helpers/events";
import { useWindowSize } from "../../Hooks/useWindowSize";

export default function Card(props) {
  const [image, setImage] = useState(Default);
  let isMobile = useWindowSize();

  useEffect(() => {
    if (props.href || props.link) {
      setHasButton(true);
    }
  });

  useEffect(() => {
    switch (props.image) {
      case "Katie":
        setImage(Katie);
        break;
      case "ComingSoon":
        setImage(ComingSoon);
        break;
      default:
        setImage(ComingSoon);
    }
  });
  return (
    <CardContainer>
      <Image
        alt={props.alt}
        src={image}
        className={`image` + (props.lg ? `Large` : `Regular`)}
      />
      <ContentArea className={`content` + (props.lg ? `Large` : `Regular`)}>
        <Heading
          className={props.className}
          headingMessage={props.headingMessage}
          level={props.level}
        />
        {!isMobile && <ContentMessage>{props.messageBody}</ContentMessage>}
        <StyledButton
          href={props.href}
          button={props.color}
          value={props.buttonText}
          className={props.className}
        />
      </ContentArea>
    </CardContainer>
  );
}
