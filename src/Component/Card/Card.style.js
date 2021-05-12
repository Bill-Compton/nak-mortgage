import styled from "styled-components";
import Title from "../Heading/Heading";

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
  background-color: #fff;
  border: black dashed 1px;
`;

export const Heading = styled(Title)`
  font-size: 24px;
  line-height: 32px;
`;
