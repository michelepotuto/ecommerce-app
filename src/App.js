import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Application from "./pages/Application";
import useFirebase from "./hooks/use-firsebase";



function App() {
  // Login 
  const [isShown, setIsShown] = useState(true);
  const [isLogged, setIsLoagged] = useState(false);
  const [input, setInput] = useState("");
  const [list, setList] = useState({});
  const firebaseURLProduct =
    "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json";
  const { readFirebase } = useFirebase();

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
      });
    }
    setList(risposta);
  };

  const usernameChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = list.find((user) => user.codiceCliente === input);
    const u = { ...userData };
    if (u.codiceCliente === input) {
      setIsLoagged(true);
      setIsShown(false);
    } else {
      alert("codice errato");
    }
  };

  return (
    <Fragment>
      {/* <form onSubmit={handleSubmit}>
        {isShown && (
          <div>
            <input onChange={usernameChangeHandler} />
            <button>Login</button>
          </div>
        )}
        {isLogged && <Application />}
      </form> */}

      <form className="form" onSubmit={handleSubmit}>
{isShown && (
  <div>
  <div className="input-container">

    <label> Codice cliente </label>
    <div className="input-container">

    </div>
    <input type="password" name="pass" required  onChange={usernameChangeHandler}/>
  </div>
      <div className="input-container">
      <input type="submit" />
    </div>
    </div>

  )}
          {isLogged && <Application />}
</form>
    </Fragment>
  );
}

export default App;





