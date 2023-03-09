import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartQuantity, deleteFromCart } from "../Store/Actions/CartAction";
import "./Cart.css";
// import { Link } from 'react-router-dom';

const Cart = ({ cartItem, user, database }) => {
  const { name, quantity, price, image, id } = cartItem;
  console.log(cartItem, user, database, quantity);

  // const [qty, setQty] = useState(Number(cartItem.quantity));
  // const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [quantity, cartItem]);

  const handleQty = (action, id) => {
    console.log(id);
    // console.log(qty);

    if (action === "add") {
      // console.log(qty);
      cartItem.quantity += 1;
      // setQty(qty + 1);

      // console.log(qty);
      dispatch(CartQuantity(cartItem, user, cartItem.quantity, database, id));
    } else if (action === "remove") {
      // setQty(qty - 1);
      // console.log(qty);
      if (cartItem.quantity === 0) {
        cartItem.quantity = 0;
      } else {
        cartItem.quantity -= 1;
      }
      dispatch(CartQuantity(cartItem, user, cartItem.quantity, database, id));
    } else {
      console.log("no change");
    }

    // dispatch(CartQuantity(cartItem, user, qty, database, id))
  };

  const deleteItemFromCart = () => {
    // console.log("object");
    dispatch(deleteFromCart(user, id, database));
  };

  return (
      <tbody className="Cart-table-body">
        <tr>
          <td className="pro-thumbnail">
              <img
                src={image}
                alt="Product"
              />
          </td>
          <td className="pro-title">
            <span className="pro-title">{name}</span>
          </td>
          <td className="pro-price">
            <span>{price} EGP</span>
          </td>
          <td className="pro-quantity">
            <div className="pro-qty">
              <button className="qtybtn"
              onClick={() => {
                // setQty(qty - 1);
                handleQty("remove", id);
              }}
              >-</button>
              <span className="input">{quantity}</span>
              <button className="qtybtn"
              onClick={() => {
                  // setQty(qty + 1);
                handleQty("add", id);
              }}>+</button>
            </div>
          </td>
          <td className="pro-subtotal">
            <span>{Number(price) * quantity} EGP</span>
          </td>
          <td className="pro-remove">
          <span onClick={() => deleteItemFromCart()}>
              <i className="fa fa-trash-o"></i>
              </span>
          </td>
        </tr>
      </tbody>
  );
};

export default Cart;
