import { combineReducers } from "redux";
import UserReducer from "./AuthReducer";

export default combineReducers({

    user: UserReducer

});
