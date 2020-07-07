import React, { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Template from "./components/Template";

import Main from "./pages/Main";
import axios from "axios";

const App = () => {
  const [community, setCommunity] = useState({ categories: "", articles: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("dummy/article_list.json");
        setCommunity(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <Template>
      <SideNav categories={community.categories} loading={loading}></SideNav>
      <Main
        categories={community.categories}
        articles={community.articles}
        loading={loading}
      ></Main>
    </Template>
  );
};

export default App;
