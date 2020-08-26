import React, { useState, useContext } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../context/auth";

const WritingContainer = ({ history, match }) => {
  // 파라미터 값
  const { boardCategory, postId } = match.params;

  // user 전역 값
  const { state: authState } = useContext(AuthContext);
  const { userInfo, auth } = authState;
  // write 전역 값

  // 카테고리 값
  const [categories, setCategories] = useState(null);
  // article 값
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: boardCategory,
    username: userInfo.username,
  });
  const { title, body, category, username } = article;
  // 로딩 값
  const [loading, setLoading] = useState(false);
  // 글 작성 시 return 값
  const [newArticle, setNewArticle] = useState(null);

  useEffect(() => {
    if (!auth) {
      alert("로그인을 해야 글 쓰기가 가능합니다");
      history.push("/");
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get("/categories");
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    if (postId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await Axios.get(`/articles/${postId}`);
          setArticle(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
      if (userInfo.username !== article.username) {
        alert("본인의 계정의 글만 수정 가능합니다!");
        history.goBack();
      }
    }

    if (!!newArticle) {
      history.push(`/detail/${newArticle.id}`);
    }
  }, [history, newArticle, auth, postId, article.username, userInfo.username]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!title || !body || !category) {
      alert("빈 부분을 채워주세요!");
      return null;
    }
    if (postId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const date = Date.now();
          const response = await Axios.patch(`/articles/${postId}`, {
            title,
            body,
            category,
            date,
          });
          setNewArticle(response.data);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const date = Date.now();
          const response = await Axios.post(`/articles`, {
            title,
            body,
            category,
            username,
            date,
          });
          setNewArticle(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }
  };
  const handleCancel = () => {
    history.goBack();
  };
  return (
    <Writing
      title={title}
      body={body}
      category={category}
      loading={loading}
      categories={categories}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      postId
    />
  );
};

export default withRouter(WritingContainer);
