import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useFirebase from "./hooks/use-firebase";
import { useDispatch } from "react-redux";
import { counterActions, storageName } from "./store/counter-store";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "./components/Footer";
import Prodotti from "./components/Prodotti";
import ProdottoDettagliato from "./components/ProdottoDettagliato";
//import Cart from './pages/Cart';
import Carrello from "./components/Carrello";

function App() {
  const navigate = useNavigate();

  const token = "token-user";
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(
    JSON.parse(sessionStorage.getItem(token)) || false
  );
  const [input, setInput] = useState("");
  const [list, setList] = useState({});

  const firebaseURLProduct =
    "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json";
  const { readFirebase } = useFirebase();

  useEffect(() => {
    updateProductsFetch();
  }, []);

  const dispatch = useDispatch();
  dispatch({ type: counterActions.START });

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
    const userData = list.find((p) => p.codiceCliente === input);
    const u = { ...userData };

    if (userData) {
      sessionStorage.setItem(token, JSON.stringify(u));
      setUser(u.nome);
      setIsLogged(true);
      navigate("/home");
    } else {
      alert("codice errato");
    }
  };

  const logFunc = () => {
    sessionStorage.removeItem(token);
    sessionStorage.removeItem(storageName.COUNT);
    sessionStorage.removeItem(storageName.CART);
    sessionStorage.removeItem(storageName.DETAIL);
    setIsLogged(false);
  };

  return (
    <Fragment>
      {!isLogged ? (
        // <form onSubmit={handleSubmit}>
        //   {isShown && (
        //     <div>
        //       <input onChange={usernameChangeHandler} />
        //       <button>Login</button>
        //     </div>
        //   )}
        // </form>

        <div className="login_container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Codice cliente </label>
              <input
                onChange={usernameChangeHandler}
                type="password"
                name="pass"
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Navbar log={logFunc} user={user} />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/dettaglio" element={<ProdottoDettagliato />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="*" element={<App />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
