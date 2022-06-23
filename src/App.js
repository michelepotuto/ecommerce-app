import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';

function App() {
  return (
  <Fragment>
    <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/prodotti' element={<Prodotti />} /> */}
        <Route path='/login' element={<Login />} />
        {/* <Route path='/carrello' element={<Carrello />} /> */}
        </Routes>
    <Footer/>
  </Fragment>
  );
}

export default App;
