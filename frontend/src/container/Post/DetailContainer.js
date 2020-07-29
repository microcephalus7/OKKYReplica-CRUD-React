import React from "react";
import Detail from "../../components/Post/Detail";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const DetailContainer = ({ match }) => {
  const { postId } = match.params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`/articles/${postId}`);
        setArticle(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [postId]);
  return <Detail article={article} loading={loading} />;
};

export default withRouter(DetailContainer);