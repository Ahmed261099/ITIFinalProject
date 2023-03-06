import React from "react";
import "./Cart.css";

const Cart = ({ cartItem }) => {
  
  const { name, quantity, price, image } = cartItem;

  return (
      <tbody>
        <tr>
          <td className="pro-thumbnail">
              <img
                src={image}
                alt="Product"
              />
          </td>
          <td className="pro-title">
            {name}
          </td>
          <td className="pro-price">
            <span>{price} EGP</span>
          </td>
          <td className="pro-quantity">
            <div className="pro-qty">
              <button className="dec qtybtn">-</button>
              <input type="number" value="1" />
              <button className="inc qtybtn">+</button>
            </div>
          </td>
          <td className="pro-subtotal">
            <span>{price} EGP</span>
          </td>
          <td className="pro-remove">
              <i className="fa fa-trash-o"></i>
          </td>
        </tr>
      </tbody>
                
  );
};

export default Cart;
