import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCartAction } from '../Store/Actions/CartAction';
import "./Category.css"

const CategoryCard = (props) => {

    const product = props.products;

    const {id, name, price, image, quantity, rate, spetialization} = product

    console.log(id, name);

    const dispatch = useDispatch();

    // const [] = useSelector()

    const addToCart = (product) => {
      console.log(product);
      dispatch(AddToCartAction(product));


    }

  return (
    <div className='col-lg-3 col-md-6  col-sm-12 d-block pt-4 pb-4'>
        <div className=" overflow-hidden position-relative text-center">
          <div>
            <img src={image} alt={`${name}`} className="img-fluid img w-100 mb-2 mt-2" />
          </div>
        
          <div className=' footer text-center mb-2 mt-1 d-flex flex-row justify-content-between'>
              <span className='name '>{name}</span>
              <span className='price '>{price} $</span>
          </div>
          <div className="  rounded-circle d-flex flex-row justify-content-between py-4">
            <div className=" bg-white rounded-circle">
              <i className="fa-solid fa-cart-shopping" onClick={() => {addToCart(product)}}></i>
            </div>
            <div className=" bg-white rounded-circle">
              <i className="fa-regular fa-heart "></i>
            </div>
          </div>
          <Link to={`/view/${spetialization}/${id}`}><button className="btn1 text-center">View Product</button></Link>
          
          
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default CategoryCard