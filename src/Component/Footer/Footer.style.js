import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  height: 150px;
  bottom: 0px;
  border-top: 2px solid black;
  margin-top: 20px;
`;

export const Column = styled.div`
  width: 33%;
  float: left;
`;

export const Heading = styled.h2`
  width: 84px;
  font-size: 14px;
  font-weight: bold;
  margin: 20px auto;
  text-decoration: underline;
`;

export const Span = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

export const Anchor = styled.a`
    &:hover {
        color: blue
    }

`;

export const Div = styled.div`
    width: 100%;
    margin-bottom: 12px;
`;
