import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-top: 10px;

  .slider {
    -webkit-appearance: none;
    margin-top: 15px;
    height: 15px;
    border-radius: 9px;
    background: linear-gradient(-90deg, #2afbca 0%, #1db6a9 50%, #7d7ccf 100%);
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    width: 311.83px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 3px 3px 20px rgba(3, 3, 3, 0.2);
    background: #7d7ccf;
    cursor: pointer;
    transition: all 1s;
  }

  .slider::-moz-range-thumb {
    width: 27px;
    height: 28.88px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 3px 3px 20px rgba(3, 3, 3, 0.2);
    background: #7d7ccf;
    cursor: pointer;
  }

  .heading {
    width: 385px;
    height: 26px;
    color: #333333;
    font-family: Calibre;
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
  }

  .label-row {
    display: inline-flex;
  }
  .label {
    width: 108px;
    height: 51px;
    color: #333333;
    font-family: Calibre;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .left {
    width: 100px;
  }
  .right {
    margin-left: 125px;
    width: 100px;
  }
`;

const propTypes = {
  onInput: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  labelLeft: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Slider = props => {
  const {
    heading,
    labelLeft,
    labelRight,
    name,
    onChange,
    onInput,
    value
  } = props;

  return (
    <Wrapper>
      <h3 className="heading">{heading}</h3>
      <input
        type="range"
        name={name}
        min="1"
        max="100"
        onChange={onChange}
        onInput={onInput}
        value={value}
        className="slider"
      />
      <div className="label-row">
        <label className="label left">{labelLeft}</label>
        <label className="label right">{labelRight}</label>
      </div>
    </Wrapper>
  );
};

Slider.propTypes = propTypes;

export default Slider;
