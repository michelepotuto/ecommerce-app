import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Prodotti from "./pages/Prodotti";
import ProdottoDettagliato from "./pages/ProdottoDettagliato"

//import Cart from './pages/Cart';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/login" element={<Login />} />
        {<Route path="/prodottodettagliato" element={<ProdottoDettagliato/>} /> }
        {/* { <Route path='/carrello' element={<Cart />} /> } */}
      </Routes>
       <Footer />
    </Fragment>
  );
}

export default App;
