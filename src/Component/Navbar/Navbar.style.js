import styled from "styled-components";
import { colors } from "../Colors"

export const Nav = styled.nav`
  height: 100px;
  width: 100%;
  background-color: ${colors.$white};
  position: relative;
  border-bottom: 2px solid ${colors.$NAK_Gray};
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  margin-left: 10px;
`;
