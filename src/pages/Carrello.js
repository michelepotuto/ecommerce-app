import React, { useEffect, useState } from 'react';
import Singolo from '../components/ProdottoSingolo';



const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";


  useEffect(() => {
        if (localStorage.getItem(storageKey)) {
          const t = localStorage.getItem(storageKey);
          const v = [storageCart,t];
            console.log("qualcosa : " + v); JSON.parse(JSON.stringify(t))
      setStorageCart(v);
      }else{
        
      } 
    if (localStorage.getItem(storageKey2)) {
      console.log(JSON.parse("[" + localStorage.getItem(storageKey) + "]"))
      setLength(parseInt(localStorage.getItem(storageKey2)));
      const t = JSON.parse("[" + localStorage.getItem(storageKey) + "]");
      /*       const json = JSON.parse(t);*/
      setStorageCart(t);

      console.log("typeof: " + typeof storageCart);

    }
  }, [length]);

  
//  function removeItemFromCart(productId){
//    let temp  = Carrello.filter(item => item.id !== productId);
//    localStorage.setItem("Carello", JSON.stringify(temp));
//  }

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
           
                <div className="col"><button >
                  REMOVE         
                   </button>
                </div>
              </div>
            </div>
          </div>))
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