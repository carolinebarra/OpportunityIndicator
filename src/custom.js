import React from "react";
import styled from "styled-components";
import { ReactComponent as Custom } from "./Icons/custom.svg";

const StyledCustom = styled(Custom)`
  display: block;
  margin: auto;
  .custom {
    &:hover {
      .Shape {
        fill: #ffffff;
      }
    }
  }
`;

export default function CustomIcon() {
  return (
    <React.Fragment>
      <StyledCustom />
    </React.Fragment>
  );
}
