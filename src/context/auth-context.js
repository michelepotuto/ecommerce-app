
import React, { useState, useEffect } from "react";

const storageKey = "logged-user";
const AuthContext = React.createContext({
  isLoggedIn: false,
  loggedUser: "",
  login: (username, password) => {},
  logout: () => {},
  showLoginDialog: false,
  showLogoutDialog: false,
  hideLoginDialog: () => {},
  hideLogoutDialog: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  

  const loginHandler = (username, password) => {
    setIsLoggedIn(true);
    setLoggedUser(username);
    setShowLoginDialog(true);
    sessionStorage.setItem(storageKey, username);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setLoggedUser("");
    setShowLogoutDialog(true);
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

  const hideLoginDialog = () => {
    setShowLoginDialog(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loggedUser: loggedUser,
        login: loginHandler,
        logout: logoutHandler,
        showLoginDialog,
        showLogoutDialog,
        hideLoginDialog,
        hideLogoutDialog: () => {
          setShowLogoutDialog(false);
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
