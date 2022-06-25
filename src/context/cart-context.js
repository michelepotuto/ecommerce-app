
import { useState, createContext } from "react";

const CartContext = createContext({
    cartList: [],
    addToCart: ({}) => {},
    removeCartList: ({}) => {},
    cartCount: 0,

  });

  export default CartContext;

  export const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const cartAddToHandler = (value) => {
        setCartList([...value]);
        setCartCount( (cartCount) => cartCount+1 ); 
        console.log("incremento:" + cartCount);
    };

    return (
        <CartContext.Provider
          value={{
            cartList: cartList,
            addToCart: cartAddToHandler,
          }}
        >
          {props.children}
        </CartContext.Provider>
      );
  }