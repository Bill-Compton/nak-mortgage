import styled from "styled-components";
import Title from "../Heading/Heading";
import { Button } from "../Button/Button";
import { colors } from "../../Constants/Colors";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  margin: 75px 2%;
  width: 98%;
  height: 300px;
  background-color: ${colors.$white}

  &:first-of-type {
    margin-top: 0px;
  }
`;

export const Image = styled.img`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
`;

export const ContentArea = styled.div`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
  background-color: ${colors.$white};
  border: ${colors.$black} dashed 1px;
`;

export const Heading = styled(Title)`
  font-size: 24px;
  line-height: 32px;
  margin-left: 20px;
`;

export const ContentMessage = styled.div`
    margin: 30px 20px 20px 20px;
    font-size: 20px;
    line-height: 28px;

`
export const StyledButton = styled(Button)`
  float: right;
  margin: 30px 30px 0 0;
`
export const StyledLink = styled(Link)`
  float: right;
  margin: 30px 30px 0 0;
   width: 150px;
      text-decoration: none;
      height: 30px;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;
      font-size: 16px;
      line-height: 28.5px;
      transition: color ease-in-out 600ms, background-color ease-in-out 600ms;
      color: ${(props) => (props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue )};
      background-color: ${colors.$white};
      border: 1px solid  ${(props) => (props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue )}; 

      &:hover,
      &:focus {
        transition: ease-in-out 600ms;
        color: ${colors.$white};
        background-color: ${(props) => (props.button === "white" ? colors.$NAK_Gray : colors.$anchorBlue )}; 
      }
    `;

    
    