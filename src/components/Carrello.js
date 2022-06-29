import React, { useEffect, useState } from "react";
import ProdottoCart from "./ProdottoCart";
import { storageName } from "../store/counter-store";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";

const Carrello = () => {
  const count = useSelector((store) => store.count);
  const cart = useSelector((store) => store.cartArray);
  const dispatch = useDispatch();

  useEffect(() => {//get the items after rendering the component
    dispatch({ type: counterActions.UPDATE });
  }, []);

  const emptyCart = () => {//remove all the item in the cart and set 0 to the count
    sessionStorage.setItem(storageName.COUNT, 0);
    sessionStorage.removeItem(storageName.CART);
    dispatch({ type: counterActions.UPDATE });//refresh the cart
    console.log("reset cart");
  };

  return (
    <>
      {count === 0 ? (
        <div>
          <h1 className="text-center">Empty cart</h1>
          <div className="row align-items-center">
            <div className="col">
              <h2 className="text-center">
                <button className="inizia_spesa border border-1" to="/prodotti">
                  <Link to="/prodotti">Start your shopping</Link>
                </button>
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container_emptypay">
            
            <p type="button" className="btn btn-danger m-3" onClick={emptyCart} >EMPTY</p>
              
            <p type="button" className="btn btn-success m-3">PAY</p>
            </div>

          {cart.map((prodotto, key) => (
            <ProdottoCart key={key} prodotto={prodotto} />
          ))}


        </div>
      )}
    </>
  );
};

export default Carrello;
