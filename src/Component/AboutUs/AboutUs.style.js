import styled from "styled-components";
import { colors } from "../../Constants/Colors";
import Card from "../Card/Card";

export const Container = styled.div`
  height: 1258px;
  padding-top: 30px;
  background-color: ${colors.$NAK_Blue};

  .imageLarge {
    width: auto;
    border-radius: 50%;
    margin-right: 20px;

    & + div {
      width: 78%;
      height: 550px;
      border: none;
      border-radius: 10px;
      margin-bottom: 40px;
    }
  }
`;

export const StyledCard = styled(Card)``;
