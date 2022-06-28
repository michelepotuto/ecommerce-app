import React, { useEffect, useState } from 'react';

const ProdottoCart = (prop) => {

    const storageKey = "user-cart";
    const storageKey2 = "user-cart-count";

    const { nome, categoria, descrizioneB, img, quantita, prezzo } =
        prop.prodotto;

    const removeFromCart = (key) => {
        if (sessionStorage.getItem(storageKey2) ) {
            //console.log(JSON.parse("[" + sessionStorage.getItem(storageKey) + "]"))
            console.log("remove");
            const newCount = parseInt(sessionStorage.getItem(storageKey2)) - 1;
            //console.log("new count " + newCount);
            if(newCount === 0){
                sessionStorage.setItem(storageKey2, newCount);
                sessionStorage.removeItem(storageKey);
            }else{
                sessionStorage.setItem(storageKey2, newCount);
            }

            const t =  JSON.parse("["+sessionStorage.getItem(storageKey)+"]");
            //console.log("old cart " + t);

            let newCart = t.filter((s) => s.id !== prop.prodotto.id);
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
           

            console.log("dopo: "+ JSON.stringify(newCart).replace("[",""));
            sessionStorage.setItem(storageKey, JSON.stringify(newArray));
            //console.log("typeof: " + typeof storageCart);  

        }

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