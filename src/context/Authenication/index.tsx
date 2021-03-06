import React, { useState, createContext, useEffect } from "react";

const INITIAL_STATE = false;
const localState = JSON.parse(localStorage.getItem("info"));

export const IsAuthenticatedContext = createContext(null);

export const IsAuthenticatedProvider = ({ children }: any) => {
  const localState = JSON.parse(localStorage.getItem("isAuthenticated"));
  const [isAuthenticated, setIsAuthenicated] = useState(
    localState || INITIAL_STATE
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <IsAuthenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenicated }}
    >
      {children}
    </IsAuthenticatedContext.Provider>
  );
};
