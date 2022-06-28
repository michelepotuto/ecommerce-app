import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Prodotti from "./pages/Prodotti";
import ProdottoDettagliato from "./components/ProdottoDettagliato";
import Login2 from "./pages/Login2";
import { useState, useEffect } from "react";

//import Cart from './pages/Cart';
import Carrello from "./pages/Carrello";





 function App() {
//   const [isLogged, setLogged] = useState(false);

//   const HandlerIsLogged = (val) => {
//     setLogged(val)
//   }


  return (
    <Fragment>

      {/* <Login2/> */}
        {/* logged={HandlerIsLogged} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/login" element={<Login2 />} />
        <Route path='/dettaglio' element={<ProdottoDettagliato/>} /> 
        <Route path='/carrello' element={<Carrello />} />
      </Routes>
       <Footer />
    </Fragment>
  );
  }

export default App;
