import { combineReducers } from "redux";
import UserReducer from "./AuthReducer";
import { addItemToCartReducer, CartReducer } from "./CartReducer";
import CollReducer from "./CollReducer";


export default combineReducers({

    user: UserReducer,
    coll: CollReducer,
    cartItemsList: CartReducer,
    addToCart: addItemToCartReducer

});
