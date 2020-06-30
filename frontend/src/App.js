import React from "react";
import SideNav from "./components/SideNav";
import Template from "./components/Template";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Updating from "./pages/Updating";
import Writing from "./pages/Writing";
import styled, { css } from "styled-components";

const AppWrapper = styled.body`
  margin: 0;
  padding: 0;
`;
const App = () => {
  return (
    <Template>
      <SideNav></SideNav>
    </Template>
  );
};

export default App;
