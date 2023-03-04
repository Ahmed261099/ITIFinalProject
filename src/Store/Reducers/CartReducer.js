
const InitialValues = {
    cart: [],
    cartTotal: 0,
    products: [],
    inCart: false
}

export default function CartReducer(state = InitialValues, action){
    const { type, payload } = action;
    // let newFavorite = [...state.favorites];
    // let isFavorited = false;
    // const MOVIE_INDEX = newFavorite.findIndex(movie => movie.id === action.payload.id)
    // if(MOVIE_INDEX <= -1){
    //     newFavorite = newFavorite.concat({...action.payload})
    //     isFavorited = true;
    // }
    // else{
    //     newFavorite = newFavorite.map((movie) => {
    //         if(movie.id === action.payload.id){
    //             return {...movie}
    //         }else{
    //             return movie;
    //         }
    //     })
    //     isFavorited = false;
    // }
    console.log(action.payload);
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart: state.cart.concat(payload),
                cartTotal: state.cartTotal + payload.price
                // favorites: newFavorite,
                // isFavorite: isFavorited
            };
            case "REMOVE_FROM_CART":
                // let removeFavorite = [...state.favorites];
                // removeFavorite = removeFavorite.filter(movie => movie.id !== action.payload)
                // console.log(removeFavorite);
            return {
                ...state,
                favorites: payload
            };
        default: 
            return state

    }

}