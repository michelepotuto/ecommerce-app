import React, { useEffect, useState } from 'react';
import ProdottoCart from '../components/ProdottoCart';



const Carrello = () => {
  const [length, setLength] = useState(0);
  const [storageCart, setStorageCart] = useState([]);
  const storageKey = "user-cart";
  const storageKey2 = "user-cart-count";


  useEffect(() => {
<<<<<<< HEAD
        if (localStorage.getItem(storageKey)) {
          const t = localStorage.getItem(storageKey);
          const v = [storageCart,t];
            console.log("qualcosa : " + v); JSON.parse(JSON.stringify(t))
      setStorageCart(v);
      }else{
        
      } 
=======
>>>>>>> 310ada55e29d946957cc8c8ebf83eb2d01e11d46
    if (localStorage.getItem(storageKey2)) {
      //console.log(JSON.parse("[" + localStorage.getItem(storageKey) + "]")) ;
      setLength(parseInt(localStorage.getItem(storageKey2)));
      const t = JSON.parse("[" + localStorage.getItem(storageKey) + "]");
      setStorageCart(t);
      /*console.log("typeof: " + typeof storageCart);*/
    }
<<<<<<< HEAD
  }, [length]);

  
//  function removeItemFromCart(productId){
//    let temp  = Carrello.filter(item => item.id !== productId);
//    localStorage.setItem("Carello", JSON.stringify(temp));
//  }
=======
  }, []);



>>>>>>> 310ada55e29d946957cc8c8ebf83eb2d01e11d46

  return (
    <>

      {length === 0 ? <h1>Carrello vuoto</h1> :
        storageCart.map((prodotto, key) => (
<<<<<<< HEAD

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
=======
          <ProdottoCart key={key} prodotto={prodotto} />
        ))
>>>>>>> 310ada55e29d946957cc8c8ebf83eb2d01e11d46
      }
    </>
  )
}

export default Carrello