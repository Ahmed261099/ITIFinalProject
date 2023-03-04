import React from 'react'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart'

const CartComponent = () => {

    const cartItems = useSelector((state) => state.cart);

  return (
    <div>
        {cartItems.map((item) => <Cart cartItem={item} /> )}
    </div>
  )
}

export default CartComponent