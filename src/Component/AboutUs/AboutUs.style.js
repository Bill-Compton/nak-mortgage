import styled from "styled-components";
import { colors } from "../../Constants/Colors";
import Card from "../Card/Card";

export const Container = styled.div`
  height: 1450px;
  padding-top: 30px;
  background-color: ${colors.$NAK_Blue};

  .imageLarge {
    width: 240px;
    border-radius: 50%;
    margin-right: 20px;

    & + div {
      width: 78%;
      height: 728px;
      border: none;
      border-radius: 10px;
      margin-bottom: 40px;
    }
  }

  div:nth-child(2) {
    div {
      height: 550px;
    }
  }
`;

export const StyledCard = styled(Card)``;
