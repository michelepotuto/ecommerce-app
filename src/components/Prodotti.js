import React, { useEffect } from 'react'
import ProdottoSingolo from './ProdottoSingolo';
import { Routes } from 'react-router-dom';
import useFirebase from "../hooks/use-firebase";

const Prodotti = () => {

  const [list, setList] = React.useState([]);// will contain the list of products
  const firebaseURLProduct = "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/product.json";
  const { readFirebase, isLoading } = useFirebase();
  
  useEffect(() => {
    updateProductsFetch();
  }, []);

  //function that will fetch the products from the firebase using the url
  const updateProductsFetch = async () => {
    const answer = await readFirebase(firebaseURLProduct);
    const risposta = [];
    //put the answer in an array and save it in the state List
    for (const p in answer) {
      risposta.push({
        id: answer[p].id,
        nome: answer[p].nome,
        categoria: answer[p].categoria,
        descrizioneB: answer[p].descrizioneB,
        descrizioneD: answer[p].descrizioneD,
        img: answer[p].img,
        quantita: answer[p].quantita,
        max: answer[p].quantita,
        prezzo: answer[p].prezzo
      })
    }
    setList(risposta);
  };


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