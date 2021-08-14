import styled from "styled-components";
import { colors, width } from "../../Constants/Styles";
import Card from "../AboutUsCard/AboutUsCard";

export const Container = styled.div`
  background-color: ${colors.$NAK_Blue};

  @media only screen and (max-width: ${width.$mobile}) {
    height: auto;
    padding-bottom: 40px;
  }
`;

export const StyledCard = styled(Card)``;
