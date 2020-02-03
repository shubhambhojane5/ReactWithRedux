const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {
    console.log("Reducer",action);
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case "SUBTRACT_COUNTER":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
                return state;
    }
}

export default reducer;