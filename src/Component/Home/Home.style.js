import styled from "styled-components";
import { colors } from "../../Constants/Styles";

export const Container = styled.div`
  height: auto;
  padding-top: 30px;
  background-color: ${colors.$NAK_Blue};
  padding-bottom: 8px;

  & div:last-child {
    white-space: pre-wrap;
  }
`
