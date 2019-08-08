import React, { Component } from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";

const Button = styled.button`
  width: 60px;
  height: 32px;
  color: #004b35;
  font-family: "Calibre";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  display: table-cell;
  border: 0;
  padding: 0;
  background: none;
`;
const Home = styled.img`
  width: 22px;
  height: 22px;
`;
const Nav = styled.nav`
  margin-left: 26px;
  margin-top: 26px;
  height: 32px;
  width: 1046px;
  display: flex;
  justify-content: space-between;
`;
const Header = props => {
  const rows = props.headingData.map((row, index) => {
    return <Button key={index}>{row}</Button>;
  });
  return (
    <Nav>
      <Home src={logo} />
      {rows}
    </Nav>
  );
};

class Head extends Component {
  render() {
    const { headingData } = this.props;
    return <Header headingData={headingData} />;
  }
}

export default Head;
