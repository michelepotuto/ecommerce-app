import React, { useEffect } from 'react'
import Singolo from '../components/ProdottoSingolo';
import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";

const Prodotti = () => {
  const [list, setList] = React.useState([]);

  const updateProducts= () => {
    console.log("Eseguo l'update");
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCUXunK44MPnDGgA3uHgI88tlFG9rWb8Ao",
      authDomain: "stage-app-109c7.firebaseapp.com",
      databaseURL:
        "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "stage-app-109c7",
      storageBucket: "stage-app-109c7.appspot.com",
      messagingSenderId: "179813620715",
      appId: "1:179813620715:web:900fabfc49592e176e97ae",
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

      get(child(dbRef, `product`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setList(snapshot.val());
          } else {
            alert("No data available");
          }
        })
        .catch((error) => {
          alert(error);
        });
  };
  useEffect(() =>
    {
      updateProducts();
      
    },[]);
  
    


  return (
    <>
       {list.map((prodotto, key) => (
        <Singolo prodotto={prodotto} key={key} />
      ))} 
    </>
  )
}

export default Prodotti