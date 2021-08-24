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

export default function Card(props) {
  const [image, setImage] = useState(
    "https://nak-assets.s3.us-west-1.amazonaws.com/images/comingSoon.svg"
  );
  const Katie =
    "https://nak-assets.s3.us-west-1.amazonaws.com/images/Katie.jpg";
  const Default =
    "https://nak-assets.s3.us-west-1.amazonaws.com/images/comingSoon.svg";

  useEffect(() => {
    switch (props.image) {
      case "Katie":
        setImage(Katie);
        break;
      case "ComingSoon":
        setImage(Default);
        break;
      default:
        setImage(Default);
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
