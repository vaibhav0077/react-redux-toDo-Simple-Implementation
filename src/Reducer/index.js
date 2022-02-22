
// General Todo Reducer declare karvanu je multiple Reducers ne handle kari sake


import todoReducers from "./todoReducers";

import { combineReducers } from "redux";


const rootReducers = combineReducers({
    todoReducers
})


export default rootReducers;