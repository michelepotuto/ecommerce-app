import { createStore } from "redux";

export const cartActions = {
  ADD: 'add',
  REMOVE: 'remove',
}

const cartReducer = (state = { cart: [] }, action) => {
  const { type, phone, cartId } = action;
  if (type === cartActions.ADD) {
    const { cart } = state;
    const newId = !cart.length ? 0 : Math.max(...state.cart.map(c => c.cartId)) + 1;
    return {
      cart: [...state.cart, {
        cartId: newId,
        phone,
      }]
    }
  }

  if(type === cartActions.REMOVE) {
    return {
      cart: state.cart.filter(c => c.cartId !== cartId),
    }
  }

  return state;
}

const store = createStore(cartReducer);

export default store;