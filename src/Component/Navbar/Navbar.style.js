import styled from "styled-components";
import { colors } from "../../Constants/Colors";

export const Nav = styled.nav`
  height: 120px;
  width: 100%;
  background-color: ${colors.$white};
  position: relative;
  border-bottom: 2px solid ${colors.$NAK_Gray};

  a {
    & {
      margin: 0 54px 0 54px;
      font-size: 24px;
      font-weight: 600;
      color: ${colors.$NAK_Gray};
      text-decoration: none;
      cursor: pointer;
      padding: 4px 13px;
      background: ${colors.$white};
      border: solid 2px ${colors.$NAK_Gray};
      border-radius: 10px;

      &:last-of-type {
        margin-right: 40px;
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

      &:first-of-type {
        margin-right: 29%;
        border: unset;
        border-radius: unset;
        position: relative;
        top: 7px;

        &:hover {
          background-color: unset;
        }

        &:focus {
          background-color: unset;

          & img {
            outline: solid 2px ${colors.$NAK_Gray};
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
            background-color: unset;
          }
        }
      }
    }
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  margin-left: 30px;
  margin-bottom: -6px;
  padding: 2px;
`;
