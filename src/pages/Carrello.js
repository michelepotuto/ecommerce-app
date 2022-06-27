import React, { useEffect, useState } from 'react';
import Singolo from '../components/ProdottoSingolo';


const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState("");
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";


  useEffect(() => {
    /*     if (localStorage.getItem(storageKey)) {
          const t = localStorage.getItem(storageKey);
          const v = [storageCart,t];
    /*        console.log("qualcosa : " + v); //JSON.parse(JSON.stringify(t))
     */     /*  setStorageCart(v);
       }else{
         
       } */
    if (localStorage.getItem(storageKey2)) {
      setLength(parseInt(localStorage.getItem(storageKey2)));
      const t = localStorage.getItem(storageKey);
/*       const json = JSON.parse(t);
 */      setStorageCart([JSON.stringify(t)]);

      console.log("carrello: " + JSON.stringify(t));

    }
  }, [length]);





  return (
    <>
      {length === 0 ? <h1>Carrello vuoto</h1> :
        storageCart.map((prodotto, key) => (

          <div key={key}><h1 key={key}>{prodotto} sflknkdflknfndlkj </h1></div>))
      }

      {/*  { !length && storageCart.map( (prodotto) => (
        <Singolo prodotto={prodotto} key={prodotto.id} /> )) */}

      {/*   .map((prodotto) => (
        <Singolo prodotto={prodotto} key={prodotto.id} /> ))
      }  */}
    </>
  )
}

export default Carrello