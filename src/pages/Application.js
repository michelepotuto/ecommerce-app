import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer";
import Prodotti from "../components/Prodotti";
import ProdottoDettagliato from "../components/ProdottoDettagliato";

//import Cart from './pages/Cart';
import Carrello from "../pages/Carrello";
import App from "../App";

const Application = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/" element={<App />} />
        <Route path="/dettaglio" element={<ProdottoDettagliato />} />
        <Route path="/carrello" element={<Carrello />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Application;
