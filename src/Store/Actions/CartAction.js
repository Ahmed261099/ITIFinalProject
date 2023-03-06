import { collection, onSnapshot, where, query, getDocs } from "@firebase/firestore";
// import { async } from "q";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../Firebase";

export const listCartItems = (database, email) => async (dispatch) => {
    let cartData = [];

    console.log(email);
    async function getData2() {

        const data = collection(db, database)

        const q = query(data, where("email", "==", email));

        const querySnapshot = await getDocs(q);
        let newData = [];
        querySnapshot.forEach((doc) => newData = doc.data().cart);
        // });

        console.log(newData);
    
        // const list = await getDocs(q3)

        // const cartList = q.docs.map((doc) => doc.id === "XWCmdfcJqW57j5uznCTN" ? doc.data().cart : "")

        // const x = cartList.map((id) => {
        //     if(id) {console.log(id)}
        // })

        // const newlist = cartList.find((index)=> index !== 0);
        // console.log(newlist);
        
        return newData
    }

    try {
        dispatch({ type: "CART_LIST_REQUEST" })
        cartData = await getData2(database)
        console.log(cartData);
        dispatch({ type: "CART_LIST_SUCCESS", payload: cartData})
    }
    catch(error) {
        dispatch({
            type: "CART_LIST_FAIL",
            payload: error.message
        })
    }
  
      
}


