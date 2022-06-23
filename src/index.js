import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/cart-store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<<<<<<< HEAD
<Provider store={store}>
 
    <App />
  
  </Provider>
=======
  {/* <React.StrictMode> */}
    <App />
 {/*  </React.StrictMode> */}
>>>>>>> cf8e0559e7b9c1d80c02d56719775aaefe614596
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
