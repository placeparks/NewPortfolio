import React, { createContext, useContext, useRef } from 'react';

const AboutRefContext = createContext();

export const useAboutRef = () => {
  return useContext(AboutRefContext);
};

export const AboutRefProvider = ({ children }) => {
  const aboutRef = useRef(null);
  return (
    <AboutRefContext.Provider value={aboutRef}>
      {children}
    </AboutRefContext.Provider>
  );
};
