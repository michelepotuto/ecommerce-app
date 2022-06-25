import React from 'react';
import useCart from '../hooks/use-cart';
import Singolo from '../components/ProdottoSingolo';


const Carrello = () => {
  const{ cartItems } = useCart();
  console.log("ciao:"+cartItems)
  const length = cartItems.length === 0;
  
  
  return (
    <>
{length && <h1>Carrello vuoto</h1>}
{ !length && cartItems.map((prodotto) => (
        <Singolo prodotto={prodotto} key={prodotto.id} />
      ))}
    </>
  )
}

export default Carrello