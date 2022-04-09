import { combineReducers } from "redux";
import shopReducer from "./shopping/reducers";

const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;