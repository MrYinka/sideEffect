import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isValid: false
};

const inputReducerFn = (prevState, action) => {

    if(action.type === 'INPUT_VALUE'){
        return {
            value: action.payload,
            isValid: prevState.isValid
        };
    }

    if(action.type === 'INPUT_BLUR'){
        return {
            value: prevState.value,
            isValid: true
        };
    }
    return initialInputState;
};


const useLogin = (validate) => {

    const [inputState, inputDispatchFn] = useReducer(inputReducerFn, initialInputState);

    const validateInputValue = validate(inputState.value);
    const hasError = !validateInputValue && inputState.isValid; //Empty Input and True

    const inputChangeHandler = (event) => {
        inputDispatchFn({
            type: 'INPUT_VALUE',
            payload: event.target.value
        });
    };

    const validateInputHandler = () => {
        inputDispatchFn({
            type: 'INPUT_BLUR'
        })
    };

    return {
        value: inputState.value,
        isValid: validateInputValue,
        hasError,
        inputChangeHandler,
        validateInputHandler
    };

};

export default useLogin;


