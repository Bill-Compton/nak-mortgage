import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../Colors";

export class Button extends Component {
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
      >
        {this.props.value}
      </StyledButton>
    );
  }
}
