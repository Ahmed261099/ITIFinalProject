
export const AddToCartAction = (product) => {
    return { 
        type: "ADD_TO_CART", 
        payload: product 
    };
}

export const RemoveFromCartAction = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: product.id
    };
}

const AddItemToCart = (cartItems, ProductToAdd) => {
    // const cartItem;
    const exist = cartItems.find((cartItem) => cartItem.id === ProductToAdd.id)
}



