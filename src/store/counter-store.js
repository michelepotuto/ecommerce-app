import { useState } from "react";
import { legacy_createStore } from "redux";

export const counterActions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  UPDATE: "UPDATE",
  START: "START",
  TOTAL: "TOTAL",
};

export const storageName = {
  COUNT: "USER-CART-COUNT",
  CART: "USER-CART",
  DETAIL: "USER-DETAIL",
  TOTAL: "USER-TOTAL",
  START: "START",
};

const counterReducer = (
  state = { count: 0, cartArray: [], total: 0 },
  action
) => {
  if (action.type === counterActions.INCREMENT) {
    return {
      ...state,
      count: parseInt(sessionStorage.getItem(storageName.COUNT)) + 1,
    };
  }
  if (action.type === counterActions.DECREMENT) {
    return {
      ...state,
      count: parseInt(sessionStorage.getItem(storageName.COUNT)) - 1,
    };
  }

  if (action.type === counterActions.UPDATE) {
    if (!sessionStorage.getItem(storageName.TOTAL)) {
      sessionStorage.setItem(storageName.TOTAL, 0);
    }

    return {
      count: parseInt(sessionStorage.getItem(storageName.COUNT)),
      cartArray: JSON.parse(
        "[" + sessionStorage.getItem(storageName.CART) + "]"
      ),
      total: sessionStorage.getItem(storageName.TOTAL),
    };
  }
  if (action.type === counterActions.START) {
    if (!sessionStorage.getItem(storageName.COUNT)) {
      sessionStorage.setItem(storageName.COUNT, 0);
    }
    return {
      ...state,
      count: (state.count = parseInt(
        sessionStorage.getItem(storageName.COUNT)
      )),
      total: sessionStorage.getItem(storageName.TOTAL),
    };
  }

  return state;
};

const counterStore = legacy_createStore(counterReducer);
export default counterStore;
