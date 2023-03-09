import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { db } from "../Firebase";
import { listCartItems } from "../Store/Actions/CartAction";
import "./CartComponent.css";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cartItemsList.cartItems);
  const added = useSelector((state) => state.addToCart);
  console.log(cartItems);
  console.log(added);
  const dispatch = useDispatch();

  const [getDB, setGetDB] = useState("");
  const [getCustomer, setGetCustomer] = useState({});
  const [getProvider, setGetProvider] = useState({});
  const [getEngineer, setGetEngineer] = useState({});
  const [getUser, setGetUser] = useState({});

  const { currentUser } = useSelector((state) => state.user);

  const getData = () => {
    const q = query(
      collection(db, "providers"),
      where("email", "==", currentUser.email)
    );

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setGetProvider({ ...doc.data(), id: doc.id });
        if (getProvider) {
          setGetUser({ ...doc.data(), id: doc.id });
          setGetDB("providers");
        }
        console.log(doc.id, " => ", doc.data());
      });
    });

    const q2 = query(
      collection(db, "engineers"),
      where("email", "==", currentUser.email)
    );

    onSnapshot(q2, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setGetEngineer({ ...doc.data(), id: doc.id });
        if (getEngineer) {
          setGetUser({ ...doc.data(), id: doc.id });
          setGetDB("engineers");
        }

        console.log(doc.id, " => ", doc.data());
      });
    });

    const q3 = query(
      collection(db, "users"),
      where("email", "==", currentUser.email)
    );

    onSnapshot(q3, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setGetCustomer({ ...doc.data(), id: doc.id });
        if (getCustomer) {
          setGetUser({ ...doc.data(), id: doc.id });
          setGetDB("users");
        }
        console.log(doc.id, " => ", doc.data());
        console.log(getCustomer);
      });
    });
    console.log(getDB);

    return getDB;
  };

  console.log(getDB);

  useEffect(() => {
    if (currentUser) {
      getData();
      dispatch(listCartItems(getDB, currentUser.email));
      console.log(getDB);

    } else {
      console.log("no user");
    }
  }, [currentUser, dispatch, getDB]);

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
      {cartItems?.length === 0 ? (
        <div className="text-center mb-5 mt-5">
          <img
            src={require("../assets/cart/empty-cart.png")}
            alt="no cart items"
          />
          <h2 className="fw-bolder fs-3 cart">No items in your cart!</h2>
        </div>
      ) : (
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
                    {cartItems?.map((item) => (
                      <Cart cartItem={item} user={getUser} database={getDB} />
                    ))}
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h2>Total: {cartItems?.reduce(function (acc, item) {
                  return acc + item.quantity * item.price;
                }, 0)} EGP</h2>
                <button className="rounded-5 px-4 py-2 text-center btn btn-outline-dark">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
