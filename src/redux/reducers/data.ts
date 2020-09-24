type ReducerActions =
    | { type: 'SETNAME'; payload: string }
    | { type: 'SETAGE'; payload: number }

interface IMyPayloadData {
    name: string;
    age: number;
}

interface IStateData {
    data: IMyPayloadData;
}

const initData: IStateData = {
    data: {
        name: '',
        age: 0
    }
}

const dataReducer = (state: IStateData = initData, action: ReducerActions) => {
    switch (action.type) {
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

export default dataReducer;
