import React from 'react'
import './home.css'
import Header from '../Header/header'
import Banners from '../Banners/banners'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "./../Firebase";
import { useDispatch, useSelector } from 'react-redux'
import {
  collection,
  onSnapshot,
  query,
  limit,
} from "firebase/firestore";

import Testmonial from '../testmonials/testmonials' ;
import Footer from '../Footer/footer' ;





function Home()
{
    const [dataEng, setDataEng] = useState([]);
    const [dataCont, setDataCont] = useState([]);
    const [dataProd, setDataProd] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [keyword, setKeyword] = useState("engineers");
    const [operation, setOperation] = useState("");
    const dataEngColl = query(collection(db, "engineers"), limit(4));
    const dataContColl = query(collection(db, `providers`), limit(4));
    const dataProdColl = query(collection(db, `products`), limit(4));
    const dataRef = collection(db, `${keyword}`);
    const dispacth = useDispatch()
    const loadDataFilter = async (optType = null) => {
      onSnapshot(dataRef, (snapshot) => {
        setDataFilter(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            role: doc.data().role,
            phone: doc.data().phone,
            rate: doc.data().rate,
            spetialization: doc.data().spetialization,
          }))
        );
      });
    };
    const loadDataEng = async (optType = null) => {
      onSnapshot(dataEngColl, (snapshot) => {
        setDataEng(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            role: doc.data().role,
            phone: doc.data().phone,
            rate: doc.data().rate,
            spetialization: doc.data().spetialization
          }))
        );
      });
    };
    console.log(dataFilter);
    const loadDataCont = async () => {
      onSnapshot(dataContColl, (snapshot) => {
        setDataCont(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            role: doc.data().role,
            phone: doc.data().phone,
            rate: doc.data().rate,
            spetialization: doc.data().spetialization
          }))
        );
      });
    };
    const loadDataProd = async () => {
      onSnapshot(dataProdColl, (snapshot) => {
        setDataProd(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            category: doc.data().category,
            spetialization: doc.data().spetialization,
            price:doc.data().price
          }))
        );
      });
    };
    const handleFilter = (e) => {
      let value = e.target.value;
      setSortValue(value);
      setOperation("filter");
      setKeyword(e.target.value);
    };
  
    const handleRest = async () => {
      setOperation("");
      setSearchValue("");
      setSortValue("");
      loadDataEng();
      loadDataCont();
      loadDataProd();
    };
    const handleSearch = async (e) => {
      e.preventDefault();
      loadDataEng();
      loadDataCont();
      loadDataProd();
    };
    // const changeCollectionName=(e)=>{
    //   dispacth(CollectionName(e))
    // }
    useEffect(() => {
      loadDataEng();
      loadDataCont();
      loadDataProd();
      loadDataFilter();
    }, [keyword]);

    return(
        <div className='bg-white'>
          <Header></Header>
          <Banners></Banners>


          <div className="container">
           <div className=" row d-flex justify-content-evenly w-75 mx-auto">
              <div className="col-lg-6 mt-3 d-flex flex-row">
                <h3 className="col-xl-5 col-md-5">Filter By Category:</h3>
                <select
                  onChange={(e) => handleFilter(e)}
                  className="form-select "
                  value={sortValue}
                >
                  <option selected>Select By Category</option>
                  <option value="engineers">Engineers</option>
                  <option value="providers">Providers</option>
                  <option value="products">Products</option>
                </select>
              </div>
              <div className='col-lg-6 mt-3 d-flex flex-row'>
                  <Form className="d-flex flex-row w-100" onSubmit={handleSearch}>
                    <Form.Control
                      type="search"
                      placeholder="Search By Specialization..."
                      className="me-2 w-75"
                      aria-label="Search"
                      value={searchValue}
                      onChange={(e) => 
                          setSearchValue(e.target.value)
                          // setDataFilter(dataFilter.filter(user=>user.name.toLowerCase().includes(`${searchValue}`.toLowerCase())))}
                      }
                    />
                    {/* <Button type="submit" variant="outline-success">
                      Search
                    </Button> */}
                    <Button variant="outline-danger ms-2 w-25" onClick={() => handleRest()}>
                      Rest
                    </Button>
                  </Form>
              </div>
            </div>
      {operation === "filter" && dataFilter.length>0 ? (
        <section id="Popular-Eng" className="pt-5">
          <div className="container text-center">
            <h2 className="fw-bold">{keyword}</h2>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line1"></div>
            <div className="row py-3 gy-2">
              {dataFilter.filter(user=>user.spetialization.toLowerCase().includes(`${searchValue}`.toLowerCase())).map((item) => {
                return(
                    
                    <div className="col-lg-3">
                    <div className="card-Eng position-relative">
                      <div className="card-Eng-img">
                      <div className='card-Eng-img'>
                         <img src={require('../assets/Engineers/client-1.png')} className='w-100' alt=''/>
                      </div>
                      </div>
                      <Link className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}><h3 className="py-2">{item.name}</h3></Link>
                      <h3 className="py-2">{item.role}</h3>
                      <div className="d-flex align-items-center position-absolute item-vote bg-white fw-bolder p-1">
                        {item?.engRate && (
                          <>
                            <i class="fa-solid fa-star star pe-1 text-warning"></i>
                            <p className="mb-0 star text-warning">
                              {item?.engRate?.toFixed(1)}
                            </p>
                          </>
                        )}
                        {!item.engRate && null}
                      </div>
                      <div className="Item-Icon position-absolute rounded-circle  py-4">
                        <div className="favorite-Icon bg-white Icon-shape rounded-circle">
                          <i className="fa-regular fa-heart "></i>
                        </div>
                        <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                )
        
              })}
            </div>
          </div>
        </section>
      ) : operation === "" ? (
        <div>
          <section id="Popular-Eng" className="pt-5">
            <div className="container text-center">
              <h2 className="fw-bold">Popular Engineers</h2>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line1"></div>
              <div className="row py-3 gy-2">
                {dataEng.map((item) => {
                  return (
                    <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                        
                        <img src={require('./../assets/Engineers/client-1.png')} className='w-100' alt=''/>
                                           
                        </div>
                        <Link className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}><h3 className="py-2">{item.name}</h3></Link>
                        <h3 className="py-2">{item.role}</h3>
                        <div className="d-flex align-items-center position-absolute item-vote bg-white fw-bolder p-1">
                          {item?.engRate && (
                            <>
                              <i className="fa-solid fa-star star pe-1 text-warning"></i>
                              <p className="mb-0 star text-warning">
                                {item?.engRate?.toFixed(1)}
                              </p>
                            </>
                          )}
                          {!item.engRate && null}
                        </div>
                        <div className="Item-Icon position-absolute rounded-circle  py-4">
                          <div className="favorite-Icon bg-white Icon-shape rounded-circle">
                            <i className="fa-regular fa-heart "></i>
                          </div>
                          <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-regular fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="Popular-Proivers" className="pt-5">
            <div className="container text-center">
              <h2 className="fw-bold">Popular Providers</h2>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line1"></div>
              <div className="row py-3 gy-2">
                {dataCont.map((item) => {
                  return (
                    <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                        <img src={require('../assets/Engineers/client-4.png')} className='w-100' alt=''/>
                        </div>
                        <Link className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}><h3 className="py-2">{item.name}</h3></Link>
                        <h3 className="py-2">{item.role}</h3>
                        <div className="d-flex align-items-center position-absolute item-vote bg-white fw-bolder p-1">
                          {item?.engRate && (
                            <>
                              <i className="fa-solid fa-star star pe-1 text-warning"></i>
                              <p className="mb-0 star text-warning">
                                {item?.engRate?.toFixed(1)}
                              </p>
                            </>
                          )}
                          {!item.engRate && null}
                        </div>
                        <div className="Item-Icon position-absolute rounded-circle  py-4">
                          <div className="favorite-Icon bg-white Icon-shape rounded-circle">
                            <i className="fa-regular fa-heart "></i>
                          </div>
                          <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-regular fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="Popular-Products" className="pt-5">
            <div className="container text-center">
              <h2 className="fw-bold">Popular Products</h2>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line1"></div>
              <div className="row py-3 gy-2">
                {dataProd.map((item) => {
                  return (
                    <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                      
                     <img src={require('../assets/Products/product-1.jpg')} className='w-100' alt=''/>
                                          
                        </div>
                        <Link className='text-decoration-none text-success-emphasis' to={`view/${item.spetialization}/${item.id}`}><h3 className="py-2">{item.name}</h3></Link>
                        <div className="Item-Extra-Data d-flex justify-content-center">
                          <h5 className="text-danger pe-4">{item.category}</h5>
                          <h5 className="text-muted ">
                            {item.price}$
                          </h5>
                        </div>
                        <div className="d-flex align-items-center position-absolute item-vote bg-white fw-bolder p-1">
                          {item?.productRate && (
                            <>
                              <i className="fa-solid fa-star star pe-1 text-warning"></i>
                              <p className="mb-0 star text-warning">
                                {item?.productRate?.toFixed(1)}
                              </p>
                            </>
                          )}
                          
                        </div>
                        <div className="Item-Icon position-absolute rounded-circle  py-4">
                          <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                          <div className="favorite-Icon bg-white Icon-shape rounded-circle">
                            <i className="fa-regular fa-heart "></i>
                          </div>
                          <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-regular fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      ) :dataFilter.length===0 ?(
        <h3 className="text-danger">No data</h3>
      ):(<div></div>)}
    </div>
        <Footer/>
        </div>
    )
}
export default Home;