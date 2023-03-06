import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { db } from "../Firebase";
import { listCartItems } from "../Store/Actions/CartAction";

const CartComponent = () => {
  const { cartItems } = useSelector((state) => state.cartItemsList);
  console.log(cartItems);
  const dispatch = useDispatch();

  const [getDB, setGetDB] = useState("");
  const [getCustomer, setGetCustomer] = useState({});
  const [getProvider, setGetProvider] = useState({});
  const [getEngineer, setGetEngineer] = useState({});

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
          setGetDB("users");
        }
        console.log(doc.id, " => ", doc.data());
        console.log(getCustomer);
      });
    });
    console.log(getDB);
    // return getDB
  };

  console.log(getDB);

  useEffect(() => {
    if (currentUser) {
      // getData();
      const database = "users";
      console.log(database);
      dispatch(listCartItems(database, currentUser.email));
      console.log("yes");
      console.log(getDB);
    } else {
      console.log("no user");
    }
  }, [currentUser, dispatch, getDB]);

  return (
    <div>
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
                    {cartItems.map((item) => (
                      <Cart cartItem={item} />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
