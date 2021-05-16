import styled from "styled-components";
import { colors } from "../Colors";

export const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  height: 150px;
  bottom: 0px;
  border-top: 2px solid ${colors.$NAK_Blue};
  margin-top: 20px;
`;

export const Column = styled.div`
  width: 25%;
  float: left;
  margin-left: 8%;
`;

export const Heading = styled.h2`
  width: 84px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Span = styled.p`
  font-size: 12px;
`;

export const Anchor = styled.a`
  margin: 30px 0 0 0;
  display: block;
  &:hover,
  &:focus {
    color: ${colors.$anchorBlue};
  }
  &:focus {
    border: 2px solid ${colors.$NAK_Blue};
  }
`;

export const Div = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;
