import React, { useEffect, useState } from 'react';
import { storageName } from "../store/counter-store";
import {   useDispatch } from "react-redux";
import { counterActions } from "../store/counter-store";

const ProdottoCart = (prop) => {
    const dispatch = useDispatch();


    const { nome, categoria, descrizioneB, img, quantita, prezzo } =
        prop.prodotto;

    const removeFromCart = (key) => {

        if (sessionStorage.getItem(storageName.COUNT) ) {
            //console.log(JSON.parse("[" + sessionStorage.getItem(storageName.CART) + "]"))
            console.log("remove");
            const newCount = parseInt(sessionStorage.getItem(storageName.COUNT));
            //console.log("new count " + newCount);
            if(newCount === 0){
                sessionStorage.removeItem(storageName.COUNT);
                sessionStorage.removeItem(storageName.CART);
            }else{
                sessionStorage.setItem(storageName.COUNT, newCount-1);
            }

            const t =  JSON.parse("["+sessionStorage.getItem(storageName.CART)+"]");
            //console.log("old cart " + t);
            
            let newCart = t.filter((s) => s.id !== prop.prodotto.id);
            //console.log("new cart " + JSON.stringify(newCart).replace("[","").replace("]",""));
            const newArray = [];
            newCart.map ((p)=> {
                newArray.push({
                  id: p.id,
                  nome: p.nome,
                  categoria: p.categoria,
                  descrizioneB: p.descrizioneB,
                  descrizioneD: p.descrizioneD,
                  img: p.img,
                  quantita: p.quantita,
                  prezzo: p.prezzo
                })
              })
           //console.log("new cart " + JSON.stringify(newCart));
           

            //console.log("dopo: "+ JSON.stringify(newCart).replace("[",""));
            sessionStorage.setItem(storageName.CART, JSON.stringify(newCart).replace("[","").replace("]",""));
            //console.log("typeof: " + typeof storageCart);  

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