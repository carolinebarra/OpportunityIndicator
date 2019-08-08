import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Slider from "./Slider";

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 6;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${"" /* padding-top: 15px; */} ${"" /* justify-content: space-between; */};
`;

const propTypes = {
  userInput: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

const Sliders = props => {
  const { onChange } = props;

  return (
    <Container>
      <Content>
        <Slider
          heading="In our future workplace work will be conducted:"
          labelLeft="Anywhere at anytime"
          labelRight="Mainly from the office"
          name="remoteOrOffice"
          onChange={onChange}
          onInput={onChange}
        />
        <Slider
          heading="Our future workplace will:"
          labelLeft="Provide a differentiating experience"
          labelRight="Provide the necessities"
          name="experienceOrNecessities"
          onChange={onChange}
          onInput={onChange}
        />
        <Slider
          heading="When we think about individual seats in the office:"
          labelLeft="Depends on activity or need"
          labelRight="Depends on title and position"
          name="flatOrHierarchical"
          onChange={onChange}
          onInput={onChange}
        />
      </Content>
    </Container>
  );
};

Sliders.propTypes = propTypes;

export default Sliders;
