import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  description: "",
  location: "",
  fullTime: false,
  setDescription: () => {},
  setLocation: () => {},
  setFullTime: () => {},
});

SearchContext.displayName = "SearchContext";

export const SearchContextProvider = ({ children }) => {
  const setLocation = (location) => {
    setSearched({ ...searched, location: location });
  };

  const setFullTime = (bool) => {
    setSearched({ ...searched, fullTime: bool });
  };

  const setDescription = (str) => {
    setSearched({ ...searched, description: str });
  };

  const initSearched = {
    description: "",
    location: "",
    fullTime: false,
    setDescription: setDescription,
    setLocation: setLocation,
    setFullTime: setFullTime,
  };

  const [searched, setSearched] = useState(initSearched);

  return <SearchContext.Provider value={searched}>{children}</SearchContext.Provider>;
};
