import React, { useEffect, useState } from "react";

export const LoggedinCtx = {
  setLoggedinState: (a) => {},
  loggedin: false,
  logout: () => {},
};
export const LoggedinContext = React.createContext(LoggedinCtx);
export const LoginContextProvider = ({ children }) => {
  const [loggedinState, setLoggedin] = useState();
  let authToken;
  useEffect(() => {
    authToken =
      sessionStorage?.getItem("logintoken") ||
      localStorage?.getItem("logintoken");
    setLoggedin(authToken);
  }, []);
  const updateloggedin = (a) => {
    setLoggedin(a);
  };
  const logoutState = () => {
    sessionStorage.removeItem("logintoken");
    localStorage.removeItem("logintoken");
    setLoggedin(false);
  };
  return (
    <LoggedinContext.Provider
      value={{
        setLoggedinState: updateloggedin,
        loggedin: loggedinState,
        logout: logoutState,
      }}
    >
      {children}
    </LoggedinContext.Provider>
  );
};
