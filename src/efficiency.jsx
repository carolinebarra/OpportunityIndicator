import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Efficiency } from "./efficiency.svg";

const StyledEfficiency = styled(Efficiency)`
  display: block;
  margin: auto;
`;
const StyledText = styled.h1`
  width: 149px;
  height: 58px;
  color: #272b2f;
  font-family: "Calibre";
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
const StyledCard = styled.div`
  width: 179.89px;
  height: 130.39px;
  border: solid 1px #00d2a0;
  box-shadow: 0px 4px 11px 1px #eeeeee;
  padding: "5";
  padding: "5";
  margin: 25px;
  stroke-linejoin: "1";
  stroke: "#00D2A0";
  border-radius: 10px;
  &:hover {
    width: 206.88px;
    height: 149.77px;
    background: linear-gradient(0deg, #2afbca, #1db6a9, #7d7ccf);
    border-radius: 10px;
    margin: 25px;
    box-shadow: 5px 7px 9px 1px #dcdcdc;
    cursor: pointer;
    ${StyledEfficiency} {
      .Shape {
        fill: #ffffff;
      }
    }
    ${StyledText} {
      width: 192px;
      height: 69px;
      color: #ffffff;
      font-family: "Calibre-Medium";
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      text-align: center;
    }
  }
`;

export default function EfficiencyIcon() {
  return (
    <StyledCard>
      <StyledEfficiency />
      <StyledText>Aim for talent and brand</StyledText>
    </StyledCard>
  );
}
