import React, { useState, useEffect } from "react";
import { storageName } from "../store/counter-store";


const storageKey = "logged-user";
const AuthContext = React.createContext({
  isLoggedIn: sessionStorage.getItem(storageKey),
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
    sessionStorage.removeItem(storageName.CART);
    sessionStorage.removeItem(storageName.COUNT);
    sessionStorage.removeItem(storageName.DETAIL);

    sessionStorage.removeItem(storageKey);
  };

  useEffect(() => {
    const storageUser = sessionStorage.getItem(storageKey);
    const obj = JSON.parse(storageUser);
    if (storageUser) {
      setIsLoggedIn(true);
      setLoggedUser(obj.nome);
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
