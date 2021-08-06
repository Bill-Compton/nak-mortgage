import styled from "styled-components";
import { colors } from "../../Constants/Colors";
import Heading from "../Heading/Heading";

export const PricingContainer = styled.div`
  min-height: 663px;
  padding-top: 80px;
  background-color: ${colors.$NAK_Blue};
`;

export const LeftColumn = styled.div`
  float: left;
  width: 50%;

  #mortgage-calculator {
    margin-left: 180px;
  }
`;

export const RightColumn = styled.div`
  float: left;
  width: 50%;

  #us-rates, #az-rates {
    margin-left: 180px;
  }

  #az-rates {
    margin-top -3px;
  }
`;

export const StyledHeading = styled(Heading)`
  width: 500px;
  margin: 0 auto;
  color: #333;
`;
