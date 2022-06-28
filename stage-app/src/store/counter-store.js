import { createStore } from "redux";

export const counterActions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    START: 'START'
  }

  export const storageName = {
    COUNT: 'USER-CART-COUNT',
    CART: 'USER-CART',
    DETAIL: 'USER-DETAIL',
    START: 'START'
  }

const counterReducer = (state = { count:0 }, action) => {
  if(action.type === counterActions.INCREMENT) {
    //TODO: read from session storage the count instead of "state.count"
    return {
      count: state.count + 1,
    }
  }
  if(action.type === counterActions.DECREMENT) {
    //TODO: read from session storage the count instead of "state.count"
    return {
      count: state.count - 1,
    }
  }

  if(action.type === counterActions.RESET) {
    return {
      count: state.count = null,
    }
  }
  if(action.type === counterActions.START) {
    if(!sessionStorage.getItem(storageName.COUNT)){
        sessionStorage.setItem(storageName.COUNT, 0);
      }
    return {
      count: state.count = parseInt(sessionStorage.getItem(storageName.COUNT)),
    }
  }
  return state;

}

const counterStore = createStore(counterReducer);
export default counterStore;