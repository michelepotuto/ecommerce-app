import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-store";


const useCart = () => {
  const cartItems = useSelector((store) => store.cart);
  const cartCount = cartItems.length;
  const isCartEmpty = cartCount === 0;
  const totalAmount = isCartEmpty ? 0 : cartItems.map(c => c.phone.price).reduce((a, b) => a + b);
  const dispatch = useDispatch();
  
  const addToCart = (phone) => {
    console.log("add");
    dispatch({ type: cartActions.ADD, phone });
  }
  const removeFromCart = (cartId) => {
    dispatch({ type: cartActions.REMOVE, cartId });
  }

  return {
    cartItems,
    isCartEmpty,
    cartCount,
    totalAmount,
    addToCart,
    removeFromCart,
  }
}

export default useCart;