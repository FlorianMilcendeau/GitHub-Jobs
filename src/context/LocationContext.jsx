import React, { createContext, useState } from 'react';

export const LocationContext = createContext({
  location: '',
  setLocation: () => {},
});

LocationContext.displayName = 'SearchContext';

export const LocationContextProvider = ({ children }) => {
  const setLocation = (locate) => {
    setlocation({ ...location, location: locate });
  };

  const initLocation = {
    location: '',
    setLocation: setLocation,
  };

  const [location, setlocation] = useState(initLocation);
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
