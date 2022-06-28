import React from 'react'
import { useState, useEffect } from "react";
import useFirebase from '../hooks/use-firsebase';
import { useNavigate } from 'react-router';

const storageKey = 'is-submitted';


function Login() {
    // React States + localStorage (login persistente)
    const [input, setInput] = useState('');
    const [list, setList] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(JSON.parse(localStorage.getItem(storageKey)) || false);
    const firebaseURLProduct = "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json"
    const { readFirebase } = useFirebase();
    const navigate = useNavigate();
    // const [user, setUser] = useState();

    useEffect(() => {
      updateProductsFetch();
    }, []);

    const updateProductsFetch = async () => {
      const answer = await readFirebase(firebaseURLProduct);
      const risposta = [];
      for (const p in answer) {
        risposta.push({
          nome: answer[p].nome,
          cognome: answer[p].cognome,
          username: answer[p].username,
          codiceCliente: answer[p].codiceCliente,
        })
      }
      setList(risposta);
    };
  
    // User Login info
    const database = readFirebase(firebaseURLProduct);
  
    // const errors = {
    //   uname: "invalid username",
    //   pass: "invalid client code"
    // };

    
    const handleSubmit = (event) => {

      event.preventDefault();

      const usernameChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value)

      }
  
      const userData = list.filter((user) => user.codiceCliente === input);

      if (userData.lenght > 0) {
          navigate('/home');
      };
  
      // Compare user info
    //   if (userData) {
    //     if (userData.password !== pass.value) {
    //       // Invalid password
    //       setErrorMessages({ name: "pass", message: errors.pass });
    //     } else {
    //       setIsSubmitted(true);
    //       localStorage.setItem(storageKey, JSON.stringify(!isSubmitted));

    //     }
    //   } else {
    //     // Username not found
    //     setErrorMessages({ name: "uname", message: errors.uname });
    //   }


    // };
  
    // // Generate JSX code for error message
    // const renderErrorMessage = (name) =>
    //   name === errorMessages.name && (
    //     <div className="error">{errorMessages.message}</div>
    //   );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}
        >
          <div className="input-container">
            <label>Codice cliente </label>
           <input type="password" 
            onChange={usernameChangeHandler}
            name="pass" required  />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );


    // const logout = () => {
    //   setIsSubmitted('');
    //    localStorage.removeItem(storageKey);
    // }

    // {isSubmitted ? <div className='button_logout'>Sei loggato nel tuo account! ⇢ <button onClick={logout}>Logout</button></div>  : renderForm}
  
    return (
      <div className="app">
        <div className="login-form">
          {renderForm}
        </div>
      </div>
      
    );
  }}

export default Login