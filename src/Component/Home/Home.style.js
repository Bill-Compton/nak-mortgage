import styled from "styled-components";
import { colors } from "../../Constants/Colors";

export const Container = styled.div`
  height: 1542px;
  padding-top: 30px;
  background-color: ${colors.$NAK_Blue};

  & div:last-child {
    white-space: pre-wrap;
  }
`
