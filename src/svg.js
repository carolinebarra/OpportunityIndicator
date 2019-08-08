import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.svg`
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const SVG = ({
  onMouseEnter,
  onMouseLeave,
  stroke,
  fill,
  onClick,
  width,
  icon,
  left,
  top,
  className
}) => (
  <Wrapper
    viewBox={icon.viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={icon.width}
    left={left}
    top={top}
    className={className}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {icon.shape}
  </Wrapper>
);

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.object.isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

SVG.defaultProps = {
  stroke: "transparent",
  width: 8,
  fill: "none",
  left: "0%",
  top: "0%",
  className: "fancy-icon",
  onClick: () => "onClick",
  onMouseEnter: () => "onMouseEnter",
  onMouseLeave: () => "onMouseLeave"
};

export default SVG;
