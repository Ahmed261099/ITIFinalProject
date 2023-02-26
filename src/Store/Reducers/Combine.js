import { combineReducers } from "redux";
import UserReducer from "./AuthReducer";
import CollectionNameReducer from "./CollectionNameReducer";

export default combineReducers({

    user: UserReducer,
    collName: CollectionNameReducer

});
