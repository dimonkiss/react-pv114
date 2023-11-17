import { combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer=combineReducers({
    counter: counterReducer
    //...other reducers
})

export default rootReducer;