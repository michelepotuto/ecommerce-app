import React, { useEffect, useState } from 'react';
import ProdottoCart from './ProdottoCart';
import { storageName } from "../store/counter-store";
import { Link } from "react-router-dom";

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
      {length === 0 ? <div><h1 className='text-center'>Carrello vuoto</h1><div class="row align-items-center">
    
    <div class="col">
      <h2 className='text-center'><Link className="nav-link border border-1" to="/prodotti">
        Inizia la tua spesa</Link></h2></div>
    </div>
    
  </div> :
        storageCart.map((prodotto, key) => (
          <ProdottoCart key={key} prodotto={prodotto} />
        ))
      }
    </>
  )
}

export default Carrello