import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Prodotti from "./pages/Prodotti";
import ProdottoDettagliato from "./components/ProdottoDettagliato";

//import Cart from './pages/Cart';
import Carrello from "./pages/Carrello";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        {<Route path="/prodottodettagliato:prodottoid" element={<ProdottoDettagliato/>} /> }
        {/* { <Route path='/carrello' element={<Cart />} /> } */}
        { <Route path='/carrello' element={<Carrello />} /> } 
=======
        <Route path='/dettaglio' element={<ProdottoDettagliato/>} /> 
        <Route path='/carrello' element={<Carrello />} />
>>>>>>> da778a550e6d0cd9468b5aeeb9158a0d44e18c60
      </Routes>
       <Footer />
    </Fragment>
  );
}

export default App;
