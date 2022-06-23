import firebase from "firebase";

const Socio = () => {
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
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
  
  return <>ciao socio, provo a leggere dal db: </>;
};

export default Socio;
