const InitialValues = {
    loading: false,
    cartItems: [],
    newCartItem: {},
    counter: 0
}

export const CartReducer = (state = InitialValues, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "CART_LIST_REQUEST":
        return {
          loading: true,          
        }
      case "CART_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          cartItems: action.payload
        }
      case "CART_LIST_FAIL":
        return {
          loading: false,
          error: action.payload
        }
      
      case "CART_ITEM_ADD_REQUEST":
        return {
          loading: true,
          ...state,
          // cartItems: action.payload
        }
      case "CART_ITEM_ADD_SUCCESS":
        return {
          ...state,
          loading: false,          
          // cartItems: newProduct

          newCartItem: action.payload
        }
      case "CART_ITEM_ADD_FAIL":
        return {
          loading: false,
          error: action.payload
        }
      default:
        return state
    }
  }

  export const addItemToCartReducer = (state = InitialValues, action) => {
    let newProduct = [...state.cartItems];
    console.log(state.cartItems);
    const MOVIE_INDEX = newProduct.findIndex(product => product.name === action.payload.name)
    if(MOVIE_INDEX <= -1){
        newProduct = newProduct.concat({...action.payload})
    }
    switch (action.type) {
      case "CART_ITEM_ADD_REQUEST":
        return {
          loading: true,
          ...state,
          // cartItems: action.payload
        }
      case "CART_ITEM_ADD_SUCCESS":
        return {
          ...state,
          loading: false,          
          newCartItem: newProduct

          // newCartItem: action.payload
        }
      case "CART_ITEM_ADD_FAIL":
        return {
          loading: false,
          error: action.payload
        }
  
      default:
        return state
    }
  }

  export const CountCart = (state = InitialValues, action) => {
    let newProduct = [...state.cartItems];
    console.log(newProduct);
    const MOVIE_INDEX = newProduct.findIndex(product => product.name === action.payload.name)
    if(MOVIE_INDEX <= -1){
        newProduct = newProduct.concat({...action.payload})
    }
    switch(action.type){
      case "CART_COUNT":
        return {
          ...state,
          counter: action.payload
        }
        default:
          return state
    }
    
  }