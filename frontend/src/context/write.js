import React, { createContext, useState } from "react";

const WriteContext = createContext({
  state: {
    title: "",
    body: "",
    category: "Free",
    username: null,
    originalId: null,
  },
  actions: {
    setUserInfo: () => {},
    setAuth: () => {},
    setAuthError: () => {},
  },
});

const WriteProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ username: "호우", id: "hou123" });
  const [auth, setAuth] = useState(true);
  const [authError, setAuthError] = useState(false);

  const value = {
    state: { userInfo, auth, authError },
    actions: { setUserInfo, setAuth, setAuthError },
  };
  return (
    <WriteContext.Provider value={value}>{children}</WriteContext.Provider>
  );
};

const { Consumer: WriteConsumer } = WriteContext;

export { WriteProvider, WriteConsumer };

export default WriteContext;
