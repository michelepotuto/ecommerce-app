import React, { useEffect, useState } from 'react';
import ProdottoCart from './ProdottoCart';
import { storageName } from "../store/counter-store";
import { Link } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";

const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);
  const cart = useSelector((store) => store.cartArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: counterActions.UPDATE });
    if (parseInt(sessionStorage.getItem(storageName.COUNT)) >0) {
      //console.log(JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]")) ;
      setLength(parseInt(sessionStorage.getItem(storageName.COUNT)));
      
      const t = JSON.parse("["+sessionStorage.getItem(storageName.CART)+"]");
      //console.log("carrello: " + t)
      
      setStorageCart(t);
      //console.log("typeof: " + t);
      /*console.log("typeof: " + typeof storageCart);*/
    }
  }, []);

  return (
    <>
      {length === 0 ? <div><h1 className='text-center'>Carrello vuoto</h1><div className="row align-items-center">
    
    <div class="col">
      <h2 className='text-center'><button className="inizia_spesa border border-1" to="/prodotti">
        <Link to='/prodotti'>Inizia la tua spesa</Link></button></h2></div>
    </div>
    
  </div> :
        cart.map((prodotto, key) => (
          <ProdottoCart key={key} prodotto={prodotto} />
        ))
      }
    </>
  )
}

export default Carrello