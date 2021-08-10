import styled from "styled-components";
import { colors, width } from "../../Constants/Styles";

export const Nav = styled.nav`
  height: 120px;
  width: 100%;
  background-color: ${colors.$white};
  border-bottom: 2px solid ${colors.$NAK_Gray};

  @media only screen and (max-width: ${width.$mobile}) {
    height: 80px;
  }
`;
export const NavContainer = styled.div`
  margin: 0px 2.5%;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  top: 10px;
  padding: 2px;

  @media only screen and (max-width: ${width.$mobile}) {
    height: 60px;
    width: 60px;
    top: 10px;
  }
`;

export const LogoContainer = styled.div`
a {
  border: unset;
  border-radius: unset;
  position: relative;

  @media only screen and (max-width: ${width.$mobile}) {
    display: unset;
    margin: 0px;
  }

  &:focus, &:hover {
    background-color: unset;

    & img {      
      transition: outline ease-in-out 600ms, background-color ease-in-out 600ms;
      outline: solid 2px ${colors.$NAK_Gray};
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
      background-color: unset;
    }
}

`;

export const ButtonContainer = styled.div`
  float: right;

  a {
    margin: 0 16px 0 16px;
    font-size: 24px;
    font-weight: 600;
    color: ${colors.$NAK_Gray};
    text-decoration: none;
    cursor: pointer;
    padding: 0px 8px;
    background: ${colors.$white};
    border: solid 2px ${colors.$NAK_Gray};
    border-radius: 10px;
    position: relative;
    bottom: 32px;

    @media only screen and (max-width: ${width.$mobile}) {
      margin: 0 6px 0 6px;
      padding: 2px 6px;
      font-size: 14px;
      font-weight: 400;
      bottom: 20px;
      position: relative;
    }

    &:focus,
    &:hover {
      color: ${colors.$white};
      background-color: ${colors.$NAK_Gray};
      transition: ease-in-out 600ms;
    }

    &:focus-visible {
      outline: none;
    }
  }
`;
