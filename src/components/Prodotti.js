import React, { useEffect } from 'react'
import Singolo from './ProdottoSingolo';
import { Routes } from 'react-router-dom';
import useFirebase from '../hooks/use-firsebase';

const Prodotti = () => {
  const [list, setList] = React.useState([]);
  const firebaseURLProduct = "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/product.json"
  const { readFirebase } = useFirebase();
  
  useEffect(() => {
    updateProductsFetch();
  }, []);


  const updateProductsFetch = async () => {
    const answer = await readFirebase(firebaseURLProduct);
    const risposta = [];
    for (const p in answer) {
      risposta.push({
        id: answer[p].id,
        nome: answer[p].nome,
        categoria: answer[p].categoria,
        descrizioneB: answer[p].descrizioneB,
        descrizioneD: answer[p].descrizioneD,
        img: answer[p].img,
        quantita: answer[p].quantita,
        prezzo: answer[p].prezzo
      })
    }
    setList(risposta);
  };

//console.log("prima lista: "+list);
  return (
    <>
      <Routes>
      </Routes>
      {list.map((prodotto, key) => (
        <Singolo prodotto={prodotto} key={key} />
      ))}
    </>
  )
}

export default Prodotti