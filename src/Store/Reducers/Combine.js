import { combineReducers } from "redux";
import UserReducer from "./AuthReducer";
import { CartReducer, CountCart } from "./CartReducer";
import CollReducer from "./CollReducer";

export default combineReducers({
  user: UserReducer,
  coll: CollReducer,
  cartItemsList: CartReducer,
  count: CountCart
});
