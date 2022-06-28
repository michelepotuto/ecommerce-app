import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Prodotti from "./components/Prodotti";
import ProdottoDettagliato from "./components/ProdottoDettagliato";
import Carrello from "./components/Carrello";




function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dettaglio' element={<ProdottoDettagliato/>} /> 
        <Route path='/carrello' element={<Carrello />} />
      </Routes>
       <Footer />
    </Fragment>
  );
}

export default App;
