import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CartQuantity, deleteFromCart } from "../Store/Actions/CartAction";
import "./Cart.css";

const Cart = ({ cartItem, user, database }) => {
  const { name, quantity, price, image, id } = cartItem;
  console.log(cartItem, user, database, quantity);

  const dispatch = useDispatch();

  useEffect(() => {}, [quantity, cartItem]);

  const handleQty = (action, id) => {
    console.log(id);

    if (action === "add") {
      cartItem.quantity += 1;
      dispatch(CartQuantity(cartItem, user, cartItem.quantity, database, id));
    } else if (action === "remove") {
      if (cartItem.quantity === 0) {
        cartItem.quantity = 0;
      } else {
        cartItem.quantity -= 1;
      }
      dispatch(CartQuantity(cartItem, user, cartItem.quantity, database, id));
    } else {
      console.log("no change");
    }
  };

  const deleteItemFromCart = () => {
    console.log(user, id, database);
    dispatch(deleteFromCart(user, id, database));
  };

  return (
    <tbody className="Cart-table-body">
      <tr>
        <td className="pro-thumbnail">
          <img src={image} alt="Product" />
        </td>
        <td className="pro-title">
          <span className="pro-title">{name}</span>
        </td>
        <td className="pro-price">
          <span>{price} EGP</span>
        </td>
        <td className="pro-quantity">
          <div className="pro-qty">
            <button
              className="qtybtn"
              onClick={() => {
                handleQty("remove", id);
              }}
            >
              -
            </button>
            <span className="input">{quantity}</span>
            <button
              className="qtybtn"
              onClick={() => {
                handleQty("add", id);
              }}
            >
              +
            </button>
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
