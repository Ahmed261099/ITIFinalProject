import {
  collection,
  getDocs,
  query
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CategoryPreview from "../CategoryPreview/CategoryPreview";
import { db } from "../Firebase";
import "./Category.css";

const Category = () => {

  const [getCategory, setGetCategory] = useState([]);

  useEffect(() => {
    const getCategoryMap = async () => {
    const categorymap = await getProducts();
    console.log(categorymap);
    }

    getCategoryMap()
  }, []);

  const getProducts = async () => {

    const collectionRef = collection(db, "categories");

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, products} = docSnapshot.data();
        acc[title] = products;
        setGetCategory(acc);
        return acc;
    }, {})

    return categoryMap;
  };
    console.log(getCategory);

  return (
    <div className="container-fluid">
      <div className="row">
      <p>{Object.keys(getCategory).map((title) => {
        const products = getCategory[title];
        return(
          <div className="container">
          <CategoryPreview key={title} title={title} products={products} />
          </div>
        )
        })}</p>
        </div>
    </div>
  );
};

export default Category;
