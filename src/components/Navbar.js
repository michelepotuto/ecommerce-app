import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import useCart from '../hooks/use-cart';


const Navbar = () => {

  const [cartCount, setCartCount] = useState(0);
  const storageKey2 = "user-cart-count";

  useEffect(() => {

  if (localStorage.getItem(storageKey2)) {
    setCartCount(parseInt(localStorage.getItem(storageKey2)));
  }
  },[]);
  /* const cartCountHandler = (val) => {
    setCartCount(val);
  }

  if(localStorage.getItem("user-cart-count")){
    cartCountHandler(parseInt(localStorage.getItem("user-cart-count")));
  } */
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
      ☫ TEAM SHOP
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <NavLink className="nav-link" to="/">
              Home
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/prodotti">
              Prodotti
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/carrello"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Carrello ({cartCount})
          
            </NavLink>


          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
          </ul>

  
          </li>
          
        </ul>
        
      </div>
    </nav>
  );
};


export default Navbar