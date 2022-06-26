import React from 'react'
import { useState } from "react";

const storageKey = 'is-submitted';

function Login() {
    // React States + localStorage (login persistente)
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(JSON.parse(localStorage.getItem(storageKey)) || false);
      // const [user, setUser] = useState();
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid client code"
    };
  
    const handleSubmit = (event) => {
      // local storage per login persistente
      localStorage.setItem(storageKey, JSON.stringify(!isSubmitted));
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Codice cliente </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );


    const logout = () => {
      setIsSubmitted('');
       localStorage.removeItem(storageKey);
    }
  
    return (
      <div className="app">
        <div className="login-form">
          {isSubmitted ? <div className='button_logout'>Sei loggato nel tuo account! ⇢ <button onClick={logout}>Logout</button></div>  : renderForm}
        </div>
      </div>
      
    );
  }

export default Login