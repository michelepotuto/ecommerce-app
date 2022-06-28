import React, { useEffect, useState } from 'react';
import ProdottoCart from '../components/ProdottoCart';



const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";


  useEffect(() => {
    if (localStorage.getItem(storageKey2)) {
      //console.log(JSON.parse("[" + localStorage.getItem(storageKey) + "]")) ;
      setLength(parseInt(localStorage.getItem(storageKey2)));
      const t = JSON.parse("[" + localStorage.getItem(storageKey) + "]");
      setStorageCart(t);
      /*console.log("typeof: " + typeof storageCart);*/
    }
  }, []);




  return (
    <>

      {length === 0 ? <h1>Carrello vuoto</h1> :
        storageCart.map((prodotto, key) => (
          <ProdottoCart key={key} prodotto={prodotto} />
        ))
      }
    </>
  )
}

export default Carrello