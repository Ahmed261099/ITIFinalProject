import React from 'react'
import { Link } from 'react-router-dom';
import "./Category.css"

const CategoryCard = (props) => {

    const {id, name, price, image, quantity, rate, spetialization} = props.products

    console.log(id, name);
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 d-block pt-4 pb-4 card-Eng'>
        <div className="overflow-hidden position-relative text-center">
          <div className='card-img overflow-hidden'>
            <img src={image} alt={`${name}`} className="img-fluid img w-100 h-100" />
          </div>
        
          <div className=' footer text-center mb-2 mt-1 d-flex flex-row justify-content-between'>
              <span className='name '>{name}</span>
              <span className='price '>{price} $</span>
          </div>
          <Link to={`/view/${spetialization}/${id}`}><button className="rounded-5 px-4 py-2 text-center btn btn-outline-dark">View Product</button></Link>
          
          <div className="Item-Icon  rounded-circle position-absolute  py-4">
            <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="favorite-Icon bg-white Icon-shape rounded-circle">
              <i className="fa-regular fa-heart "></i>
            </div>
          </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default CategoryCard