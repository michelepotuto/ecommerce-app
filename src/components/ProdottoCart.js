import React, { useEffect, useState } from 'react';
import { storageName } from "../store/counter-store";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";


const ProdottoCart = (prop) => {
    const dispatch = useDispatch();

    // attributes of the product in this card
    const { nome, categoria, descrizioneB, img, quantita, prezzo } =
        prop.prodotto;

    //remove this item from the cart
    const removeFromCart = (key) => {
        //get current count to check if it's equals to 0
        const newCount = parseInt(sessionStorage.getItem(storageName.COUNT));

        if (newCount === 0) { // if the cart is empty i remove the cart
            sessionStorage.removeItem(storageName.COUNT);
            sessionStorage.removeItem(storageName.CART);
        } else {// else i just decrease the count
            sessionStorage.setItem(storageName.COUNT, newCount - 1);
        }
        //----------------------------------
        // search the product to decrease his quantity
        //find index of this element
        const searchArray = JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]");
        const index = searchArray.findIndex(function (item) {
            return item.nome === nome;
        });
        //if its quantity is >1 i decrease it
        if (searchArray[index].quantita > 1) {
            //decrease quantity
            searchArray[index].quantita--;
            sessionStorage.setItem(storageName.CART, JSON.stringify(searchArray).replace("[", "").replace("]", ""));
        } else {
            //quantity is 1 so i have to remove this element
            let newCart = searchArray.filter((s) => s.nome !== nome);
            sessionStorage.setItem(storageName.CART, JSON.stringify(newCart).replace("[", "").replace("]", ""));
        }
        dispatch({ type: counterActions.UPDATE });
    }

    return (<div className="container">
        <div className="card">
            <div className="row align-items-center">
                <div className="col-md-4 float-start">
                    <img src={`${img}`} className="img-thumbnail" alt="..." />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">
                            {nome} - {categoria}
                        </h5>
                        <p className="card-text">{descrizioneB}</p>
                        <p className="Prezzo">{quantita} X </p>
                        <p className="Prezzo">{prezzo} € </p>
                    </div>
                </div>
                <div className="col"><button onClick={removeFromCart}>
                    REMOVE
                </button>
                </div>
            </div>
        </div>
    </div>);
};


export default ProdottoCart;