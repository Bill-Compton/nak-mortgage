import React from "react";
import { CardContainer, Image, ContentArea, Heading } from "./Card.style";
//import "./Card.scss";
import GirlWithDog from "../../Images/girl-with-dog.jpg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log(GirlWithDog);

    return (
      <CardContainer>
        <Image
          alt={this.props.alt}
          src={GirlWithDog}
          className={`image` + (this.props.lg ? `Large` : `Regular`)}
        />
        <ContentArea
          className={`content` + (this.props.lg ? `Large` : `Regular`)}
            
        ></ContentArea>
      </CardContainer>
    );
  }
}
