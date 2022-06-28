import { createStore } from "redux";

export const counterActions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    UPDATE: 'UPDATE',
    START: 'START'
  }

  export const storageName = {
    COUNT: 'USER-CART-COUNT',
    CART: 'USER-CART',
    DETAIL: 'USER-DETAIL',
    START: 'START'
  }

const counterReducer = (state = { count:0, cartArray: [] }, action) => {
  if(action.type === counterActions.INCREMENT) {
    return {
      ...state,
      count: parseInt(sessionStorage.getItem(storageName.COUNT)) + 1,
    }
  }
  if(action.type === counterActions.DECREMENT) {
    return {
      ...state,
      count: parseInt(sessionStorage.getItem(storageName.COUNT)) - 1,
    }
  }

  if(action.type === counterActions.UPDATE) {
    return {
      count: parseInt(sessionStorage.getItem(storageName.COUNT)),
      cartArray: JSON.parse("["+sessionStorage.getItem(storageName.CART)+"]"),
    }
  }
  if(action.type === counterActions.START) {
    if(!sessionStorage.getItem(storageName.COUNT)){
        sessionStorage.setItem(storageName.COUNT, 0);
      }
    return {
      ...state,
      count: state.count = parseInt(sessionStorage.getItem(storageName.COUNT)),
    }
  }
  return state;

}

const counterStore = createStore(counterReducer);
export default counterStore;