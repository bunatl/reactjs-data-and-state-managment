import React, { createContext, FC, useMemo, useReducer } from 'react'


type ReducerActions =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'RESET' }
    | { type: 'SETNAME'; payload: string }
    | { type: 'SETAGE'; payload: number }

interface IMyPayloadData {
    name: string;
    age: number;
}

interface IData {
    counter: number;
    data: IMyPayloadData;
}

const initData: IData = {
    counter: 0,
    data: {
        name: '',
        age: 0
    }
}

const reducer = (state: IData = initData, action: ReducerActions) => {
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
        case 'SETNAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.payload
                }
            };
        case 'SETAGE':
            return {
                ...state,
                data: {
                    ...state.data,
                    age: action.payload
                }
            };
        default:
            return state;
    }
}

export const GlobalContext = createContext<any>({});
export const ContextProvider: FC = ({ children }) => {
    const [ contextData, dispatch ] = useReducer(reducer, initData);
    const providerValue = useMemo(() => ({ contextData, dispatch }), [ contextData, dispatch ])

    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    )
}
