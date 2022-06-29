import React, { useState, useEffect } from "react";
const storageKey = "logged-user";
const AuthContext = React.createContext({
  isLoggedIn: JSON.parse(sessionStorage.getItem(storageKey) || false),
  loggedUser: "",
  login: (username, password) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem(storageKey) || false)
  );
  const [loggedUser, setLoggedUser] = useState("");

  const loginHandler = (obj) => {
    setIsLoggedIn(true);
    setLoggedUser(obj.nome);
    sessionStorage.setItem(storageKey, JSON.stringify(obj));
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setLoggedUser("");

    sessionStorage.removeItem(storageKey);
  };

  useEffect(() => {
    const storageUser = sessionStorage.getItem(storageKey);
    if (storageUser) {
      setIsLoggedIn(true);
      setLoggedUser(storageUser);
      sessionStorage.setItem(storageKey, storageUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loggedUser: loggedUser,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
