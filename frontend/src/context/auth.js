import React, { createContext, useState } from "react";

const AuthContext = createContext({
  state: { userInfo: null, auth: false, authError: null },
  actions: {
    setUserInfo: () => {},
    setAuth: () => {},
    setAuthError: () => {},
  },
});

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [auth, setAuth] = useState(null);
  const [authError, setAuthError] = useState(false);

  const value = {
    state: { userInfo, auth, authError },
    actions: { setUserInfo, setAuth, setAuthError },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const { Consumer: AuthConsumer } = AuthContext;

export { AuthProvider, AuthConsumer };

export default AuthContext;
