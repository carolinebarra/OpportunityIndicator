import Flexbox from "flexbox-react";
import React, { Component } from "react";
import "./index1.css";
import Dropdown from "react-dropdown";
import Slider, { Range } from "rc-slider";
import styled from "styled-components";
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import "rc-slider/assets/index.css";
const Input = styled.input`
  width: 180px;
  height: 3px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: solid 1px #00d2a0;
  padding: 20px;
  color: #044b35;
  font-family: Calibre;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.462857px;
`;
const StyledSelect = styled.div`
  float: left;
  color: #333333;
  font-family: Calibre;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  grid-area: select;
`;
const Label = styled.label`
  width: 133px;
  height: 28px;
  color: #333333;
  font-family: Calibre;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;

function MyTextInput(props) {
  function handleChange(e) {
    if (props.onChange) props.onChange(e);
  }
  return (
    <Input
      placeholder=" "
      type="number"
      value={props.value}
      name={props.name}
      onChange={handleChange}
    />
  );
}
class CurrentOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: "",
      headcount: "",
      aheadcount: "",
      region: ""
    };
  }
  state = {};
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const options = ["NA", "LATAM", "EMEA", "ASIA PAC"];
    return (
      <Flexbox
        justifyContent="space-around"
        alignItems="baseline"
        flexWrap="wrap"
      >
        <StyledSelect>
          <MyTextInput
            value={this.state.office}
            name="office"
            onChange={this.handleInputChange}
          />
          <Label>sqm</Label>
          <br />

          <Label>Current Office</Label>
        </StyledSelect>
        <StyledSelect>
          <MyTextInput
            value={this.state.headcount}
            name="headcount"
            onChange={this.handleInputChange}
          />
          <br />
          <Label>Current Headcount</Label>
        </StyledSelect>
        <StyledSelect>
          <MyTextInput
            value={this.state.aheadcount}
            name="aheadcount"
            onChange={this.handleInputChange}
          />
          <br />
          <Label>Anticipated Headcount</Label>
        </StyledSelect>
        <StyledSelect>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={""}
            placeholder=""
          />
          <br /> <Label>Region</Label>
        </StyledSelect>
      </Flexbox>
    );
  }
}
export default CurrentOffice;

//<form onSubmit={this.handleSubmit}>
//<input
//class="lineCopy5"
//placeholder=" "
//type="number"
//value={this.state.value}
//onChange={this.handleCurrentOffice}
///>
//<Label id="sqm">sqm</Label>
//<br />

//<Label id="currentOff">Current Office</Label>
//</form>
//);
