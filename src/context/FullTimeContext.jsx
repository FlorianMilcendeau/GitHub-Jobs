import React, { createContext, useState } from 'react';

export const FullTimeContext = createContext({
  fullTime: false,
  setChecked: () => {},
});

export const FilterContextProvider = ({ children }) => {
  const setChecked = (check) => {
    setfilter({ ...filter, fullTime: check });
  };

  const initFilter = {
    fullTime: false,
    setChecked: setChecked,
  };

  const [filter, setfilter] = useState(initFilter);
  return (
    <FullTimeContext.Provider value={filter}>
      {children}
    </FullTimeContext.Provider>
  );
};
