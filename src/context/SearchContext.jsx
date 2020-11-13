import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
  description: '',
  setDescription: () => {},
});

SearchContext.displayName = 'SearchContext';

export const SearchContextProvider = ({ children }) => {
  const setDescription = (str) => {
    setSearched({ ...searched, description: str });
  };

  const initSearched = {
    description: '',
    setDescription: setDescription,
  };

  const [searched, setSearched] = useState(initSearched);

  return (
    <SearchContext.Provider value={searched}>{children}</SearchContext.Provider>
  );
};
