import styled from "styled-components";
import Title from "../Heading/Heading";
import { Button } from "../Button/Button";
import { colors } from "../Colors";

export const CardContainer = styled.div`
  margin: 15px 2%;
  width: 98%;
  height: 300px;
`;

export const Image = styled.img`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
`;

export const ContentArea = styled.div`
  width: ${(props) => (props.lg ? `64%` : `48%`)};
  float: left;
  height: 300px;
  background-color: ${colors.$white};
  border: ${colors.$black} dashed 1px;
`;

export const Heading = styled(Title)`
  font-size: 24px;
  line-height: 32px;
  margin-left: 20px;
`;

export const ContentMessage = styled.div`
    margin: 30px 20px 20px 20px;
    font-size: 20px;
    line-height: 28px;

`
export const StyledButton = styled(Button)`
  float: right;
  margin: 30px 30px 0 0;
`