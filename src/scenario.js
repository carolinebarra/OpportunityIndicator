import React from "react";
import "./index1.css";
import Efficiency from "./efficiency";
import InnovetionIcon from "./innovetion";
import Brand from "./brand";
import PropTypes from "prop-types";
import styled from "styled-components";
import CustomIcon from "./src/index";
import BrandIcon from "./Brand/index";
import EfficiencyIcon from "./efficiency";
import { EficiencyIcon } from "./Cards";

const Container = styled.div``;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SelectaSce = styled.h2`
  width: 317px;
  height: 51px;
  color: #044b35;
  font-family: Calibre;
  font-size: 45px;
  font-weight: 500;
  line-height: 51px;
  textalignment: "Left";
  verticalalignment: "Top";
  textwrapping: "Wrap";
`;

const propTypes = {
  selectedScenario: PropTypes.object.isRequired,
  toggleEfficiency: PropTypes.func.isRequired
};

const Scenario = props => {
  return (
    <div class="main">
      <SelectaSce>Select a Scenario</SelectaSce>
      <ul class="rectangle-container">
        <EfficiencyIcon />
        <InnovetionIcon />
        <BrandIcon />
        <CustomIcon />
      </ul>
    </div>
  );
};

export default Scenario;
