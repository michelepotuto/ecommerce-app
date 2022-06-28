import React, { useEffect, useState } from 'react';
import ProdottoCart from './ProdottoCart';
import { storageName } from "../store/counter-store";
import { Link, NavLink } from "react-router-dom";

const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);



  useEffect(() => {
    if (sessionStorage.getItem(storageName.COUNT)) {
      //console.log(JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]")) ;
      setLength(parseInt(sessionStorage.getItem(storageName.COUNT)));
      const t = JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]");
      setStorageCart(t);
      /*console.log("typeof: " + typeof storageCart);*/
    }
  }, []);

  return (
    <>
      {length === 0 ? <div><h1 className='text-center'>Carrello vuoto</h1> <div><h2 className='text-center'><button className="inizia_spesa border border-1" to="/prodotti">
        <Link to='/prodotti'>Inizia la tua spesa</Link></button></h2></div></div> :
        storageCart.map((prodotto, key) => (
          <ProdottoCart key={key} prodotto={prodotto} />
        ))
      }
    </>
  )
}

export default Carrello