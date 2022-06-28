export const initialState = {
    value: '',
    touched: false,
};

const formReducer = (previousState, action) => {
    const { type, val } = action;
    if(type === 'USER_INPUT') {
        return {
            ...previousState,
            value: val
        }
    }
    if(type === 'BLUR') {
        return {
            ...previousState,
            touched: true
        }
    }

    if(type === 'CLEAR') {
        return {
            ...previousState,
            value: ''
        }
    }

    return initialState;
}

export default formReducer;