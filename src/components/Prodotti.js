import React, { useEffect } from 'react'
import ProdottoSingolo from './ProdottoSingolo';
import { Routes } from 'react-router-dom';
import useFirebase from "../hooks/use-firebase";

const Prodotti = () => {
  const [list, setList] = React.useState([]);
  const firebaseURLProduct = "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/product.json"
  const { readFirebase, isLoading } = useFirebase();
  
  useEffect(() => {
    updateProductsFetch();
  }, []);


  const updateProductsFetch = async () => {
    const answer = await readFirebase(firebaseURLProduct);
    //console.log("prodotti: " +  answer);
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

      {isLoading ? list.map((prodotto, key) => (
        <ProdottoSingolo prodotto={prodotto} key={key} />
      )) : <h1 className='text-center'>DOWNLOADING PRODUCTS...</h1>}
    </>
  )
}

export default Prodotti