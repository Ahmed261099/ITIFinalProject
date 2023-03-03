import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="header1 mb-5">
        <div className="container">
          <div className="d-flex align-items-center">
            <div>
              <h2 className="cart-title">Shopping Cart</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" cart-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20 mt5 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-table table-responsive mb-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">Image</th>
                      <th className="pro-title">Product</th>
                      <th className="pro-price">Price</th>
                      <th className="pro-quantity">Quantity</th>
                      <th className="pro-subtotal">Total</th>
                      <th className="pro-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pro-thumbnail">
                        <a href="#">
                          <img
                            src={require("../assets/Products/product-1.jpg")}
                            alt="Product"
                          />
                        </a>
                      </td>
                      <td className="pro-title">
                        <a href="#">Product1 name</a>
                      </td>
                      <td className="pro-price">
                        <span>200 EGP</span>
                      </td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <button className="dec qtybtn">-</button>
                          <input type="number" value="1" />
                          <button className="inc qtybtn">+</button>
                        </div>
                      </td>
                      <td className="pro-subtotal">
                        <span>200 EGP</span>
                      </td>
                      <td className="pro-remove">
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="pro-thumbnail">
                        <a href="#">
                          <img
                            src={require("../assets/Products/product-1.jpg")}
                            alt="Product"
                          />
                        </a>
                      </td>
                      <td className="pro-title">
                        <a href="#">Product2 name</a>
                      </td>
                      <td className="pro-price">
                        <span>600 EGP</span>
                      </td>
                      <td className="pro-quantity">
                        <div className="pro-qty">
                          <button className="dec qtybtn">-</button>
                          <input type="number" value="1" />
                          <button className="inc qtybtn">+</button>
                        </div>
                      </td>
                      <td className="pro-subtotal">
                        <span>200 EGP</span>
                      </td>
                      <td className="pro-remove">
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
