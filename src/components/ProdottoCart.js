import React, { useEffect, useState } from 'react';
import { storageName } from "../store/counter-store";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";

const ProdottoCart = (prop) => {
    const dispatch = useDispatch();


    const { nome, categoria, descrizioneB, img, quantita, prezzo } =
        prop.prodotto;

    const removeFromCart = (key) => {

        //console.log(JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]"))
        //console.log("remove");
        const newCount = parseInt(sessionStorage.getItem(storageName.COUNT));
        //console.log("new count " + newCount);
        if (newCount === 0) { // se il carrello è vuoto allora elimino anche il carrello e cart
            sessionStorage.removeItem(storageName.COUNT);
            sessionStorage.removeItem(storageName.CART);
        } else {
            sessionStorage.setItem(storageName.COUNT, newCount - 1);
        }
        //----------------------------------
        // search the product to decrease his quantity
        //find index of this element
        const searchArray = JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]");
        const index = searchArray.findIndex(function (item) {
            return item.nome === nome;
        });

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