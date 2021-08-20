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
  ImageContainer,
  TextContainer,
} from "./AboutUsCard.style";
import Default from "../../Images/default.jpg";
import Katie from "../../Images/Katie.jpg";
import ComingSoon from "../../Images/comingSoon.svg";
import { useWindowSize } from "../../Hooks/useWindowSize";

export default function Card(props) {
  const [image, setImage] = useState(Default);

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
      <ImageContainer>
        <Image
          alt={props.alt}
          src={image}
          className={`image` + (props.lg ? `Large` : `Regular`)}
        />
        </ImageContainer>
      <ContentArea className={`content` + (props.lg ? `Large` : `Regular`)}>
        <TextContainer>
          <Heading
            className={props.className}
            headingMessage={props.headingMessage}
            level={props.level}
          />
          <ContentMessage>{props.messageBody}</ContentMessage>
          <StyledButton
            href={props.href}
            button={props.color}
            value={props.buttonText}
            className={props.className}
          />
        </TextContainer>
      </ContentArea>
    </CardContainer>
  );
}
