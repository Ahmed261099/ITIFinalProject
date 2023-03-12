import { collection, doc, onSnapshot, updateDoc, where, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../Firebase";
import { addProductToCart } from "../Store/Actions/CartAction";
// import { AddToCartAction } from "../Store/Actions/CartAction";
import "./Category.css";
import { ToastContainer } from "react-toastify";

const CategoryCard = (props) => {
  const product = props.products;

  const { id, name, price, image, quantity, rate, spetialization } = product;

  console.log(id, name);

  const dispatch = useDispatch();

    const [getDB, setGetDB] = useState("");
    const [getUser, setGetUser] = useState({});
    const [getCustomer, setGetCustomer] = useState({})
    const [getProvider, setGetProvider] = useState({})
    const [getEngineer, setGetEngineer] = useState({})

    const { currentUser } = useSelector((state) => state.user);

    const history = useHistory()

    useEffect(() => {
      if(currentUser)
        getData();
    }, [])

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
        });
      });
    };

    const addToCart = () => {
      const exist = getUser?.cart?.find(({ name }) => name === product.name);
        if(exist){
          console.log(exist);
        }
        else{
          history.push("/Cart")
        }
        console.log(product, currentUser, getUser, getDB);

      dispatch(addProductToCart(product, currentUser, getUser, getDB))
      .then(() => {
        console.log("added successfully");
      })
      .catch((error) => {
        toast("error " + error)
      })


    }

  return (
    <div className=" contain col-lg-3 col-md-6  col-sm-12 d-block pt-4 pb-4 card-Eng ">
      <div className=" overflow-hidden position-relative text-center">
      <div className="card-img overflow-hidden">
          <img
            src={
              image
                ? image
                : require("../assets/DeaultImages/defaultProductImage.jpg")
            }
            alt={`${name}`}
            className="img-fluid img w-100 h-100"
          />
        </div>

        <div className=" footer text-center mb-2 mt-1 d-flex flex-row justify-content-between ">
          <span className="name ">{name}</span>
          <span className="price ">{price} $</span>
        </div>
        <div className="  Item-Icon  rounded-circle position-absolute  py-4 ">
          <div className=" view-Icon bg-white my-2 Icon-shape rounded-circle ">
            <i
              className="fa-solid fa-cart-shopping"
              onClick={
                addToCart
              }
            ></i>
          </div>
          <div className=" favorite-Icon bg-white Icon-shape rounded-circle ">
            <i className="fa-regular fa-heart "></i>
          </div>
        </div>
        <Link to={`/view/${spetialization}/${id}`}>
          <button className="rounded-5 px-4 py-2 text-center btn btn-outline-dark">
            View Product
          </button>
        </Link>
      </div>
      <div></div>
      <ToastContainer />
    </div>
  );
};

export default CategoryCard;