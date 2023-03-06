const InitialValues = {
    // loading: false,
    cartItems: []
}

export const CartReducer = (state = InitialValues, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "CART_LIST_REQUEST":
        return {
        //   loading: true,
          cartItems: []
        }
      case "CART_LIST_SUCCESS":
        return {
        //   loading: false,
          cartItems: action.payload
        }
      case "CART_LIST_FAIL":
        return {
        //   loading: false,
          error: action.payload
        }
      default:
        return state
    }
  }