import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import { db } from "../Firebase";
import "./CategoryPage.css"

const CategoryPage = () => {
  const {category} = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoryMap = async () => {  
        const categorymap = await getProducts();
        setProducts(categorymap[category.trim()]);
        }
    
        getCategoryMap()
  }, [category]);

  const getProducts = async () => {
    const collectionRef = collection(db, "categories");

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, products } = docSnapshot.data();
      console.log(docSnapshot.data(), docSnapshot.id);
      acc[title] = products;
      setCategories(acc);
      console.log(acc);
      return acc;
    }, {});

    

    return categoryMap;
  };

  console.log(categories[category]);
  console.log(products);
  return (
    <div className="container">
        <h2 className=' mt-5 text-center fs-1 fw-bold '> {category.toUpperCase()} </h2>
        <div className="row">
      {products ? products?.map((product) => (
        
        <CategoryCard key={product.id} products={product} />
      )) : <p className=" restock fs-1 text-center mt-4 fw-bold ">Restoking Soon</p> }
      
      </div>
    </div>
  );
};

export default CategoryPage;
