import { combineReducers } from 'redux'

// import all reducers
import counterReducer from './counter';
import dataReducer from './data'

const combinedReducer = combineReducers({
    counterReducerName: counterReducer,
    dataReducerName: dataReducer
})

export default combinedReducer;