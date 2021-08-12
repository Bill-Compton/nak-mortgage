import styled from "styled-components";
import { colors, width } from "../../Constants/Styles";
import Heading from "../Heading/Heading";

export const PricingContainer = styled.div`
  height: 663px;
  padding-top: 80px;
  background-color: ${colors.$NAK_Blue};

  @media only screen and (max-width: ${width.$mobile}) {
    height: auto;
    padding-bottom: 20px;
    padding-top: 30px;
  }
`;

export const LeftColumn = styled.div`
  float: left;
  width: 50%;

  #mortgage-calculator {
    width: 301px;
    margin: 0 auto;
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0 auto;
    width: 301px;
    float: none;

    #mortgage-calculator {
      margin-left: 0;
    }
  }
`;

export const ColumnContainer = styled.div`
  @media only screen and (max-width: ${width.$mobile}) {
  }
`;

export const RightColumn = styled.div`
  float: left;
  width: 50%;

  #us-rates, #az-rates {
    width: 301px;
    margin: 0 auto;
  }

  #az-rates {
    margin-top -3px;
    }
  }

  @media only screen and (max-width: ${width.$mobile}) {
    margin: 0 auto;
    width: 301px;
    float: none;
    
     #us-rates, #az-rates {
      margin-left: 0px;
    }

    #az-rates { 
      margin-top: 12px; 
    }
  }
}
`;

export const StyledHeading = styled(Heading)`
  width: 500px;
  margin: 0 auto;
  color: #333;
`;
