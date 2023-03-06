import React from "react";
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
          <div id="AboutHero">
            <div className="header ">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="ps-5">
                            <h2 className="h1">Shopping Cart</h2>
                            <ul className="paths">
                                <li className="dvider">
                                    <Link to="/" className="text-decoration-none text-dark">
                                    Home{" "}
                                    </Link>
                                </li>
                                <li>Shopping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>

      <div className=" cart-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20 mt5 ">
        <div className="container py-5">
        <h2 className="h1 fw-bold text-center">Cart</h2>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line1"></div>
          <div className="row py-5">
            <div className="col-12">
              <div className="cart-table table-responsive mb-30">
                <table className="table">
                  <thead className="Cart-table-head">
                    <tr>
                      <th className="pro-thumbnail">Image</th>
                      <th className="pro-title">Product</th>
                      <th className="pro-price">Price</th>
                      <th className="pro-quantity">Quantity</th>
                      <th className="pro-subtotal">Total</th>
                      <th className="pro-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="Cart-table-body">
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
