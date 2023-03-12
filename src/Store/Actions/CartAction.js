import {
  collection,
  where,
  query,
  getDocs,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../Firebase";
import { v4 as uuid } from "uuid";

export const listCartItems = (database, email) => async (dispatch) => {
  let cartData = [];

  // console.log(email);
  async function getData() {
    const data = collection(db, database);

    const q = query(data, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    let newData = [];
    querySnapshot.forEach((doc) => (newData = doc.data().cart));

    console.log(newData);

    return newData;
  }

  try {
    dispatch({ type: "CART_LIST_REQUEST" });
    cartData = await getData(database);
    console.log(cartData);
    dispatch({ type: "CART_LIST_SUCCESS", payload: cartData });
  } catch (error) {
    dispatch({
      type: "CART_LIST_FAIL",
      payload: error.message,
    });
  }
};

export const addProductToCart =
  (product, currentUser, getUser, database) => async (dispatch) => {
    try {
      dispatch({
        type: "CART_ITEM_ADD_REQUEST",
        payload: product,
      });

      const existItem = getUser?.cart?.find(
        ({ name }) => name === product.name
      );
      if (currentUser) {
        if (!existItem) {
          getUser?.cart?.unshift({
            name: product.name,
            id: uuid(),
            image: product.image,
            quantity: 1,
            price: product.price,
          });
          const docRef = doc(db, database, getUser.id);
          updateDoc(docRef, {
            cart: getUser.cart,
          });
          toast("Item " + product.name + " successfully added");

          dispatch({
            type: "CART_ITEM_ADD_SUCCESS",
            payload: product,
          });
        } else {
          console.log(getUser.cart);
          console.log(getUser);
          toast(product.name + " already in cart");

          dispatch({
            type: "CART_ITEM_ADD_SUCCESS",
            payload: product,
          });
        }
      } else {
        toast("you need to sign up first!");
        console.log("you need to sign up first!");
      }
    } catch (error) {
      alert("Failed To Add " + product.name + " " + error.message);
      dispatch({
        type: "CART_ITEM_ADD_FAIL",
        payload: error.message,
      });
    }
  };

export const CartQuantity =
  (product, getUser, qty, database, item_id, indx) => async (dispatch) => {
    console.log(getUser, qty, database);
    try {
      dispatch({
        type: "CART_ITEM_UPDATE_REQUEST",
      });

      const editedProduct = {
        id: item_id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty,
      };

      const newItem = getUser?.cart?.map((u) =>
        u.id !== item_id ? u : editedProduct
      );
      console.log(newItem);
      await updateDoc(doc(db, database, getUser.id), {
        ...getUser,
        cart: newItem,
      });

      dispatch({
        type: "CART_ITEM_UPDATE_SUCCESS",
        payload: qty,
      });
    } catch (error) {
      dispatch({
        type: "CART_ITEM_UPDATE_FAIL",
        payload: error.message,
      });
    }
  };

export const deleteFromCart =
  (getUser, item_id, database) => async (dispatch) => {
    try {
      dispatch({ type: "CART_ITEM_REMOVE_REQUEST" });
      const items = getUser?.cart?.filter((item) => item.id !== item_id);
      console.log(items);

      await updateDoc(doc(db, database, getUser.id), {
        ...getUser,
        cart: items,
      });

      window.location.reload();

      dispatch({ type: "CART_ITEM_REMOVE_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "CART_ITEM_REMOVE_FAIL",
        payload: error.message,
      });
    }
  };
