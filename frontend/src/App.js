import React, { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Template from "./components/Template";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import axios from "axios";
import Detail from "./pages/Detail";
import Updating from "./pages/Updating";
import Writing from "./pages/Writing";
import styled, { css } from "styled-components";

const Display = styled.div``;
const App = () => {
  const [community, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("dummy/article_list.json");
        setArticles(response.data.community);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Template>
      <SideNav community={community} loading={loading}></SideNav>
      <Main community={community}></Main>
    </Template>
  );
};

export default App;
