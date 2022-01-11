import styled from "styled-components";
import Title from "../Heading/Heading";
import { Button } from "../Button/Button";
import { colors, width } from "../../Constants/Styles";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  margin: 75px 2.5%;
  height: auto;
  background-color: ${colors.$white}
  position: relative

  &:first-of-type {
    margin-top: 50px;
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 20px 2.5%;
    height: auto;
    display: contents;
    
    width: 97.5%;
    margin- 0 auto;
  }
`;

export const Image = styled.img`
  width: 18%;
  border-radius: 50%;
  margin-right: 20px;
  float: left;
  position: relative;

  @media only screen and (max-width: ${width.$mobile}) {
    width: 312px;
    float: none;
    margin: 20px auto;
    display: block;
  }
`;

export const ContentArea = styled.div`
  width: 78%;
  height: auto;
  border: none;
  border-radius: 10px;
  margin-bottom: 40px;
  background-color: #fff;
  float: left;
  position: relative;
  padding-bottom: 50px;

  @media only screen and (max-width: ${width.$mobile}) {
    float: none;
    width: 97.5%;
    margin: 0 auto;
  }
`;

export const Heading = styled(Title)`
  font-size: 24px;
  line-height: 32px;
  margin-left: 20px;

  @media only screen and (max-width: ${width.$mobile}) {
    font-size: 20px;
    line-height: 30px;
    padding-top: 10px;
    width: 194px;
    margin: 10px auto;
  }
`;

export const ImageContainer = styled.div``;
export const TextContainer = styled.div``;

export const ContentMessage = styled.div`
  margin: 30px 20px 20px 20px;
  font-size: 20px;
  line-height: 28px;

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0 5px;
    font-size: 14px;
    line-height: 21px;
    margin-left: 10px;
    padding-bottom: 30px;
  }
`;

export const StyledButton = styled(Button)`
  float: right;
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 150px;
  position: absolute
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
