import { collection, doc, onSnapshot, updateDoc, where, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../Firebase";
// import { AddToCartAction } from "../Store/Actions/CartAction";
import "./Category.css";

const CategoryCard = (props) => {
  const product = props.products;

  const { id, name, price, image, quantity, rate, spetialization } = product;

  console.log(id, name);

  const dispatch = useDispatch();

  // const [] = useSelector()
  // const cartItems = useSelector((state) => state.cart);

    const [getDB, setGetDB] = useState("");
    const [getUser2, setGetUser2] = useState({});
    const [getCustomer, setGetCustomer] = useState({})
    const [getProvider, setGetProvider] = useState({})
    const [getEngineer, setGetEngineer] = useState({})

    const { currentUser } = useSelector((state) => state.user);

    const history = useHistory()

    useEffect(() => {
      if(currentUser)
        getData2();

      // history.push("")
      // if(currentUser){
      //   getData2();
      // }
      // else{
      //   toast("you need to sign up first!")
      //   // history.push("/login")
      // }
    }, [])

    const getData2 = () => {
      const q = query(
        collection(db, "providers"),
        where("email", "==", currentUser.email)
      );
  
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setGetProvider({ ...doc.data(), id: doc.id });
          if (getProvider) {
            setGetUser2({ ...doc.data(), id: doc.id });
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
            setGetUser2({ ...doc.data(), id: doc.id });
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
            setGetUser2({ ...doc.data(), id: doc.id });
            setGetDB("users");
          }
          console.log(doc.id, " => ", doc.data());
        });
      });
    };


    const addToCart=(product)=>{
      const added = getUser2?.cart?.find(({name})=>name===product.name)
      // dispatch(AddToCartAction(product));
      // let quantity=parseInt("1")
      console.log(added)
    if(currentUser){
    if (!added) {
      getUser2?.cart?.push({name:product.name,id:product.id,image:product.image,quantity: product.quantity, price: product.price})
      const docRef = doc(db, getDB, getUser2.id);
      updateDoc(docRef, {
        cart: getUser2.cart,
      })
        .then(() => {
          console.log("done cart");
        })
        .catch((error) => {
          console.log("ERROR" + error);
        });}else{
         console.log(getUser2.cart)
         console.log(getUser2);
        }
      }
      else{
        toast("you need to sign up first!")
      }
    }

  // const addToCart = (product) => {
  //   console.log(product);
    
  // };

  return (
    <div className=" contain col-lg-3 col-md-6  col-sm-12 d-block pt-4 pb-4 ">
      <div className=" overflow-hidden position-relative text-center">
        <div>
          <img
            src={image}
            alt={`${name}`}
            className="img-fluid img w-100 mb-2 mt-2"
          />
        </div>

        <div className=" footer text-center mb-2 mt-1 d-flex flex-row justify-content-between">
          <span className="name ">{name}</span>
          <span className="price ">{price} $</span>
        </div>
        <div className="  rounded-circle d-flex flex-row justify-content-between py-4">
          <div className=" bg-white rounded-circle">
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => {
                addToCart(product);
              }}
            ></i>
          </div>
          <div className=" bg-white rounded-circle">
            <i className="fa-regular fa-heart "></i>
          </div>
        </div>
        <Link to={`/view/${spetialization}/${id}`}>
          <button className="btn1 text-center">View Product</button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default CategoryCard;
