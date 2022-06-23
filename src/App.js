import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';
<<<<<<< HEAD
import Prodotti from './pages/Prodotti';
//import Cart from './pages/Cart';



function App() {
  return (
  <Fragment>
    
    <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prodotti' element={<Prodotti />} />
        <Route path='/login' element={<Login />} />
        {/* { <Route path='/carrello' element={<Cart />} /> } */}
        </Routes>
    <Footer/>
    
  </Fragment>
=======
import Socio from './components/Socio';

function App() {
  return (
  <>
    <Socio/>
    
  </>
>>>>>>> cf8e0559e7b9c1d80c02d56719775aaefe614596
  );
}

export default App;
