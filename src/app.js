import React, { Component } from "react";
import Head from "./heading";
import CurrentOffice from "./body";
import Scenario from "./scenario";
import "./index1.css";
import styled from "styled-components";
import Sliders from "./Sliders";

const Container = styled.div`
  width: 1442px;
  height: 313px;
  box-shadow: 0px 2px 8px rgba(227, 227, 227, 0.5);
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
`;
const Title = styled.h1`
  width: 853px;
  height: 109px;
  color: #044b35;
  font-family: Calibre;
  font-size: 54px;
  font-weight: 500;
  line-height: 61px;
  text-align: center;
  display: grid;
  grid-row-start: row1-end;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 5;
  justify-self: end;
`;
const P = styled.p`
  width: 1194px;
  height: 120px;
  color: #333333;
  font-family: "FuturaBookBT";
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
`;
const Side = styled.div`
  float: right;
  width: 35%;
`;

class App extends Component {
  render() {
    const heading = [
      "About",
      "Getting Started",
      "Running a Project",
      "Design Principles",
      "Data DashBoard",
      "Contacts and FAQ's",
      "Opportunity Indicator"
    ];
    return (
      <Container>
        <Head headingData={heading} />
        <br />

        <div>
          <div>
            <Title>Opportunity Indicator</Title>
            <P>
              Welcome to the Opportunity Indicator – our handy tool to help you
              estimate the amount of space you need, typical project costs and
              the benefits
              <br />
              your project could deliver. To use the Opportunity Indicator,
              simply input the information for your project below. You can then
              select the scenario
              <br /> which best fits your project by clicking on the appropriate
              box below, or create your own custom scenario using the slider
              bars.
            </P>
          </div>
          <br />

          <CurrentOffice />

          <br />
          <Side>
            <Sliders />
          </Side>
          <Scenario />
        </div>
      </Container>
    );
  }
}

export default App;
