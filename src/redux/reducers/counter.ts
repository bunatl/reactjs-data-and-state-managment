type ReducerActions =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'RESET' }

interface ICounterState {
    counter: number;
}

const initData: ICounterState = {
    counter: 0
}

const counterReducer = (state: ICounterState = initData, action: ReducerActions) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload
            };
        case 'RESET':
            return {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
}

export default counterReducer;