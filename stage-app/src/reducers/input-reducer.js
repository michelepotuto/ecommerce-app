
export const inputAction = {
  RESET: 'asdfghjkjhgfdfghj'
}

export const initalInputState = {
  value: '',
  touched: false,
};
const inputReducer = (previousState, action) => {
  if(action.type === 'INPUT') {
    return {
      ...previousState,
      value: action.val,
    }
  } else if (action.type === 'BLUR') {
    return {
      ...previousState,
      touched: true
    }
  } else if(action.type === inputAction.RESET) {
    return {
      ...previousState,
      value: ''
    }
  }
  return initalInputState;
}
export default inputReducer;