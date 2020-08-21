import React, { createContext, useState } from "react";

const CategoriesContext = createContext({
  state: { categories: null },
  actions: {
    setCategories: () => {},
  },
});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategoires] = useState(null);
  const value = {
    state: { categories },
    actions: {
      setCategoires,
    },
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

const { Consumer: CategoriesConsumer } = CategoriesContext;

export { CategoriesProvider, CategoriesConsumer };

export default CategoriesContext;
