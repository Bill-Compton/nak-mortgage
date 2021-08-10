import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Constants/Styles";
import { isAllowedKeyPress } from "../../Helpers/events";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    console.log(e);
    console.log(this.buttonRef);
    if (isAllowedKeyPress(e)) {
      e.preventDefault();
      this.buttonRef.click();
    }
  }

  render() {
    let StyledButton = styled.a`
      width: 150px;
      text-decoration: none;
      height: 30px;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;
      font-size: 16px;
      line-height: 28.5px;
      transition: color ease-in-out 600ms, background-color ease-in-out 600ms;

      &:hover,
      &:focus {
        transition: ease-in-out 600ms;
      }
    `;

    if (this.props.button === "white") {
      StyledButton = styled(StyledButton)`
        color: ${colors.$NAK_Gray};
        background-color: ${colors.$white};
        border: 1px solid ${colors.$NAK_Gray};

        &:hover,
        &:focus {
          color: ${colors.$white};
          background-color: ${colors.$NAK_Gray};
        }
      `;
    }

    if (this.props.button === "blue") {
      StyledButton = styled(StyledButton)`
        color: ${colors.$anchorBlue};
        background-color: ${colors.$white};
        border: 1px solid ${colors.$anchorBlue};

        &:hover,
        &:focus {
          color: ${colors.$white};
          background-color: ${colors.$anchorBlue};
        }
      `;
    }

    return (
      <StyledButton
        className={this.props.className}
        button={this.props.button}
        href={this.props.href}
        target="_blank"
        onKeyPress={this.handleKeyPress}
        ref={(el) => (this.buttonRef = el)}
      >
        {this.props.value}
      </StyledButton>
    );
  }
}
