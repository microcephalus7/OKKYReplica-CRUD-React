import React, { createContext, useState } from "react";

const WriteContext = createContext({
  state: {
    updateInfo: null,
  },
  actions: {
    setUpdateInfo: () => {},
  },
});

const WriteProvider = ({ children }) => {
  // 글 쓰기 정보
  const [updateInfo, setUpdateInfo] = useState(null);

  const value = {
    state: { updateInfo },
    actions: { setUpdateInfo },
  };

  return (
    <WriteContext.Provider value={value}>{children}</WriteContext.Provider>
  );
};

const { Consumer: WriteConsumer } = WriteContext;

export { WriteProvider, WriteConsumer };

export default WriteContext;
