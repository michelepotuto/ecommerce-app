import React, { useEffect, useState } from 'react';
import Singolo from '../components/ProdottoSingolo';


const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";


  useEffect(() => {
    if (localStorage.getItem(storageKey2)) {
      console.log(JSON.parse("[" + localStorage.getItem(storageKey) + "]"))
      setLength(parseInt(localStorage.getItem(storageKey2)));
      const t = JSON.parse("[" + localStorage.getItem(storageKey) + "]");
      setStorageCart(t);
      console.log("typeof: " + typeof storageCart);

    }
  }, [length]);

  const removeFromCart = useEffect((key) => {
    if (localStorage.getItem(storageKey2)) {
      //console.log(JSON.parse("[" + localStorage.getItem(storageKey) + "]"))
      

     /*  const prev = parseInt(localStorage.getItem(storageKey2)) - 1;
      localStorage.setItem(storageKey2, prev);
      setLength(prev);

      const t = JSON.parse("[" + localStorage.getItem(storageKey) + "]");
      const newCart = t.filter((s) => s.key === key)
      setStorageCart(newCart);
      localStorage.setItem(storageKey, newCart);

      console.log("typeof: " + typeof storageCart); */

    }}, []);
  

  return (
    <>

      {length === 0 ? <h1>Carrello vuoto</h1> :
        storageCart.map((prodotto, key) => (

          <div className="container">
            <div className="card">
              <div className="row align-items-center">
                <div className="col-md-4 float-start">
                  <img src={`${prodotto.img}`} className="img-thumbnail" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">
                      {prodotto.nome} - {prodotto.categoria}
                    </h5>
                    <p className="card-text">{prodotto.descrizioneB}</p>
                    <p className="Prezzo">{prodotto.prezzo} € </p>
                  </div>
                </div>
                <div className="col"><button onClick={removeFromCart(key)}>
                  REMOVE         
                   </button>
                </div>
              </div>
            </div>
          </div>))
      }
    </>
  )
}

export default Carrello