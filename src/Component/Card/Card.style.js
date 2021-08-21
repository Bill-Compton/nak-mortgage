import styled from "styled-components";
import Title from "../Heading/Heading";
import { Button } from "../Button/Button";
import { colors, width } from "../../Constants/Styles";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  margin: 75px 2.5%;
  height: 300px;
  background-color: ${colors.$white}

  &:first-of-type {
    margin-top: 0px;
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 20px 2.5%;
    height: 428px;
  }
`;

export const Image = styled.img`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media only screen and (max-width: ${width.$mobile}) {
    float: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: unset;
  }
`;

export const styledSVG = styled.svg`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media only screen and (max-width: ${width.$mobile}) {
    float: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: unset;
  }
`;

export const ContentArea = styled.div`
  width: ${(props) => (props.lg ? `64%` : `52%`)};
  float: left;
  height: 300px;
  background-color: ${colors.$white};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;

  &:last-of-type a {
    img {
      padding: 2px;
    }

    &:focus img {
      border: solid 2px ${colors.$NAK_Gray};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
  }

  @media only screen and (max-width: ${width.$mobile}) {
    width: 100%;
    float: none;
    height: 120px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: unset;
    bottom: 16px;
  }
`;

export const Heading = styled(Title)`
  font-size: 24px;
  line-height: 32px;
  margin-left: 20px;

  @media only screen and (max-width: ${width.$mobile}) {
    font-size: 16px;
    line-height: 24px;
    padding-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const ContentMessage = styled.div`
  margin: 30px 20px 20px 20px;
  font-size: 20px;
  line-height: 28px;

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0;
    font-size: 14px;
    line-height: 12px;
    margin-left: 10px;
  }
`;

export const StyledButton = styled(Button)`
  float: right;
  margin: 30px 30px 0 0;
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 150px;
  text-decoration: none;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 28.5px;
  transition: color ease-in-out 600ms, background-color ease-in-out 600ms;
  color: ${(props) =>
    props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};
  background-color: ${colors.$white};
  border: 1px solid
    ${(props) =>
      props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};

  &:hover,
  &:focus {
    transition: ease-in-out 600ms;
    color: ${colors.$white};
    background-color: ${(props) =>
      props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  float: right;
  margin: 30px 30px 0 0;
  width: 150px;
  text-decoration: none;
  height: 30px;
  width: 150px;
  position: absolute;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  line-height: 28.5px;
  transition: color ease-in-out 600ms, background-color ease-in-out 600ms;
  color: ${(props) =>
    props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};
  background-color: ${colors.$white};
  border: 1px solid
    ${(props) =>
      props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};

  &:hover,
  &:focus {
    transition: ease-in-out 600ms;
    color: ${colors.$white};
    background-color: ${(props) =>
      props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue};
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0;
  }
`;

export const Icon = styled.img`
  position: absolute;
  height: 75px;
  bottom: 25px;
  right: 40px;

  @media only screen and (max-width: ${width.$mobile}) {
    height: 55px;
    bottom: 6px;
    right: 8px;
  }
`;
