import React from 'react'
import { useState, useEffect } from "react";
import useFirebase from '../hooks/use-firsebase';
import { useNavigate } from 'react-router';

const Login2 = () => {

  const [input, setInput] = useState('');
  const [list, setList] = useState({});
  const firebaseURLProduct = "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json"
  const { readFirebase } = useFirebase();
  const navigate = useNavigate();

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

  const usernameChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value)

  }

  const handleSubmit = (event) => {

    event.preventDefault();



    const userData = list.find((user) => user.codiceCliente === input);
    const u = {...userData}
    if (u.codiceCliente === input) {
        navigate('/');
    } else {
      alert('codice errato')
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          
        <input
            onChange={usernameChangeHandler}
             />
          <button>Login</button>
          
        </div>
    </form>
  )
}

export default Login2