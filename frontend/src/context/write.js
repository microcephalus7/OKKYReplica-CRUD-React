import React, { createContext, useState, useContext } from "react";
import AuthContext from "../../context/auth";
const WriteContext = createContext({
  state: {
    title: "",
    body: "",
    category: "Free",
    username: null,
    originalId: null,
    newArticle: null,
  },
  actions: {
    setUserInfo: () => {},
    setAuth: () => {},
    setAuthError: () => {},
  },
});

const WriteProvider = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { userInfo } = state;
  // 글 쓰기 정보
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: null,
    username: userInfo.username,
    originalId: null,
  });
  // 글 작성 시 return 됨
  const [newArticle, setNewArticle] = useState(null);

  const value = {
    state: { article, newArticle },
    actions: { setArticle, setNewArticle },
  };

  return (
    <WriteContext.Provider value={value}>{children}</WriteContext.Provider>
  );
};

const { Consumer: WriteConsumer } = WriteContext;

export { WriteProvider, WriteConsumer };

export default WriteContext;
