import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Svg from "./svg";

const Wrapper = styled.div`
  height: ${props => (props.selected ? "149.77px" : "130.39px")};
  width: ${props => (props.selected ? "206.88px" : "179.89px")};
  background: ${props =>
    props.selected
      ? "linear-gradient(360deg, #2AFBCA 0%, #1DB6A9 30%, #7D7CCF 100% )"
      : "white"};
  border: ${props => (props.selected ? "" : "1px solid #00d2a0")};
  box-shadow: ${props =>
    props.selected ? "3px 3px 30px rgba(3,3,3,0.4)" : ""};
  border-radius: ${props => (props.selected ? "5.6px" : "5px")};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 190ms ease-out;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: ${props => (props.selected ? "30px" : "20px")};
`;

const Heading = styled.p`
  font-family: ${props =>
    props.selected ? "CalibreMedium" : "CalibreRegular"};
  font-weight: ${props => (props.selected ? "500" : "400")};
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.selected ? "white" : "#333")};
  padding: ${props => (props.padding ? props.padding : "15px 5.5px 0")};
  text-align: center;
  transition: all 150ms ease;
`;

const propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  padding: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  toggleScenario: PropTypes.func.isRequired
};

const ScenarioCard = props => {
  const { heading, icon, padding, selected, toggleScenario } = props;
  return (
    <Wrapper selected={selected} onClick={toggleScenario}>
      <IconWrapper selected={selected}>
        <Svg
          icon={icon}
          stroke={selected ? "white" : "#044B35"}
          fill={selected ? "white" : "#044B35"}
        />
      </IconWrapper>
      <Heading selected={selected} padding={padding}>
        {heading}
      </Heading>
    </Wrapper>
  );
};

ScenarioCard.propTypes = propTypes;

export default ScenarioCard;
