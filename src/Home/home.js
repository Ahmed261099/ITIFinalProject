import React from 'react'
import './home.css'
import Header from '../Header/header'
import Banners from '../Banners/banners'
import { NavLink, useHistory } from 'react-router-dom'
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
  getDocs,
  where,
  updateDoc,
  doc
} from "firebase/firestore";

import Testmonial from '../testmonials/testmonials' ;
import Footer from '../Footer/footer';

function Home()
{
    const [dataEng, setDataEng] = useState([]);
    const [dataCont, setDataCont] = useState([]);
    const [dataProd, setDataProd] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataEngFilter, setDataEngFilter] = useState([]);
    const [dataContFilter, setDataContFilter] = useState([]);
    const [dataProFilter, setDataProFilter] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [keyword, setKeyword] = useState("providers");
    const [operation, setOperation] = useState("");
    const dataEngColl = query(collection(db, "engineers"), limit(4));
    const dataContColl = query(collection(db, `providers`), limit(4));
    // const dataProdColl = query(collection(db, `products`), limit(4));
    const dataRef = collection(db, `${keyword}`);
    const [getDB, setGetDB] = useState("");
    const [getUser2, setGetUser2] = useState({});
    const [getProvidor, setGetProvidor] = useState({});
  const [getEngineer, setGetEngineer] = useState({});
  const [getCustomer, setGetCustomer] = useState({});
    const dispacth = useDispatch()
    const history = useHistory();
    const loadDataFilter = async () => {
      if(keyword==="engineers"){
        const dataRefEng = collection(db, "engineers");
        onSnapshot(dataRefEng, (snapshot) => {
          setDataEngFilter(
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
        
      }else if(keyword==="providers"){
        const dataRefCont = collection(db, "providers");
        onSnapshot(dataRefCont, (snapshot) => {
          setDataContFilter(
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
      }else{
        const dataRefPro = collection(db, "categories");
        onSnapshot(dataRefPro, (snapshot) => {
          setDataProFilter(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              title: doc.data().title,
              products: doc.data().products,
              spetialization: doc.data().spetialization,
            }))
          );
        });

      }
     
    };
    const loadDataEng = async () => {
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
    
    // console.log(getUser2.cart)
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
    const loadDataCategory = async () => {
      const collectionRef = collection(db, "categories");

      const q = query(collectionRef, limit(4));

      onSnapshot(q, (snapshot) => {
        setDataCategory(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            products: doc.data().products,
            spetialization: doc.data().spetialization,
            // name: doc.data().name
          }))
        );
      });
    };
    // const loadDataProd = async () => {
    //   onSnapshot(dataProdColl, (snapshot) => {
    //     setDataProd(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         name: doc.data().name,
    //         category: doc.data().category,
    //         spetialization: doc.data().spetialization,
    //         price:doc.data().price
    //       }))
    //     );
    //   });
    // };
    // const { currentUser } = useSelector((state) => state.user);
    // const addToCart=(item)=>{
    //   const added = getUser2.cart.find(({id})=>id===item.id)
    //   // let quantity=parseInt("1")
    //   console.log(added)
    // if (!added) {
    //   getUser2.cart.push({name:item.name,id:item.id,role:item.role})
    //   const docRef = doc(db, getDB, getUser2.id);
    //   updateDoc(docRef, {
    //     cart: getUser2.cart,
    //   })
    //     .then(() => {
    //       console.log("done cart");
    //     })
    //     .catch((error) => {
    //       console.log("ERROR" + error);
    //     });}else{
    //     //  console.log(getUser2.cart.Quantity)
    //     }
    // }
    const handleFilter = (e) => {
      let value = e.target.value;
      // setSortValue(value);
      setOperation("filter");
      setKeyword(value);
    };
  
    const handleRest = async () => {
      setOperation("");
      setSearchValue("");
      setSortValue("");
      loadDataEng();
      loadDataCont();
      // loadDataProd();
      loadDataCategory();
    };
    const handleSearch = async (e) => {
      e.preventDefault();
      loadDataEng();
      loadDataCont();
      // loadDataProd();
      loadDataCategory();
    };
    // const getData2 = () => {
    //   const q = query(
    //     collection(db, "providers"),
    //     where("email", "==", currentUser.email)
    //   );
  
    //   onSnapshot(q, (snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       setGetProvidor({ ...doc.data(), id: doc.id });
    //       if (getProvidor) {
    //         setGetUser2({ ...doc.data(), id: doc.id });
    //         setGetDB("providers");
    //       }
    //       console.log(doc.id, " => ", doc.data());
    //     });
    //   });
  
    //   const q2 = query(
    //     collection(db, "engineers"),
    //     where("email", "==", currentUser.email)
    //   );
  
    //   onSnapshot(q2, (snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       setGetEngineer({ ...doc.data(), id: doc.id });
    //       if (getEngineer) {
    //         setGetUser2({ ...doc.data(), id: doc.id });
    //         setGetDB("engineers");
    //       }
  
    //       console.log(doc.id, " => ", doc.data());
    //     });
    //   });
  
    //   const q3 = query(
    //     collection(db, "users"),
    //     where("email", "==", currentUser.email)
    //   );
  
    //   onSnapshot(q3, (snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       setGetCustomer({ ...doc.data(), id: doc.id });
    //       if (getCustomer) {
    //         setGetUser2({ ...doc.data(), id: doc.id });
    //         setGetDB("users");
    //       }
    //       console.log(doc.id, " => ", doc.data());
    //     });
    //   });
    // };
    // const exists = (movie) => {
    //   if (getUser2.wishlist.filter((item) => item.id === movie.id).length > 0) {
    //     return true;
    //   }
  
    //   return false;
    // };
    
    useEffect(() => {
      loadDataEng();
      loadDataCont();
      loadDataCategory();
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
                  // value={sortValue}
                >
                  <option selected>Select By Category</option>
                  <option value="engineers">Engineers</option>
                  <option value="providers">Providers</option>
                  <option value="categories">Categories</option>
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
      {operation === "filter" ? (
        <section id="Popular-Eng" className="pt-5">
          <div className="container text-center">
            <h2 className="fw-bold">{keyword}</h2>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line1"></div>
            <div className="row py-3 gy-2">
              {keyword==="engineers"?(
                dataEngFilter.filter(user=>user.spetialization.toLowerCase().includes(`${searchValue}`.toLowerCase())).map((item) => {
                  return(
                      
                      <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                        <div className='card-Eng-img'>
                           <img src={require('../assets/Engineers/client-1.png')} className='w-100' alt=''/>
                        </div>
                        </div>
                        <h3 className="py-2">{item.name}</h3>
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
                          
                          <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-regular fa-eye"></i>
                            </div>
                            </Link>
                        </div>
                      </div>
                    </div>
                  )
          
                })
              ):keyword==="providers"?(
                dataContFilter.filter(user=>user.spetialization.toLowerCase().includes(`${searchValue}`.toLowerCase())).map((item) => {
                  return(
                      
                      <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                        <div className='card-Eng-img'>
                           <img src={require('../assets/Engineers/client-1.png')} className='w-100' alt=''/>
                        </div>
                        </div>
                        <h3 className="py-2">{item.name}</h3>
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
                          
                          <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-regular fa-eye"></i>
                            </div>
                            </Link>
                        </div>
                      </div>
                    </div>
                  )
          
                })
              ):(
                dataProFilter.filter(user=>user.spetialization.toLowerCase().includes(`${searchValue}`.toLowerCase())).map((item) => {
                return(
                    
                    <div className="col-lg-3">
                    <div className="card-Eng position-relative">
                      <div className="card-Eng-img">
                      <div className='card-Eng-img'>
                          <img src={require('../assets/Engineers/client-1.png')} className='w-100' alt=''/>
                      </div>
                      </div>
                      <h3 className="py-2">{item.name}</h3>
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
                      
                          

                        <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                          <i className="fa-regular fa-eye"></i>
                          </div>
                          </Link>
                      </div>
                    </div>
                  </div>
                )
        
              }))}
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
                        <h3 className="py-2">{item.name}</h3>
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
                        
                          <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                          <i className="fa-regular fa-eye"></i>
                          </div>
                          </Link>
                            
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
                        <h3 className="py-2">{item.name}</h3>
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
                          <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                          <i className="fa-regular fa-eye"></i>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* <section id="Popular-Products" className="py-5">
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
                       <h3 className="py-2">{item.name}</h3>
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
                          <div onClick={()=>addToCart(item)} className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                          <div onClick={()=>addToWhishList(item)}  className="favorite-Icon bg-white Icon-shape rounded-circle">
                          {exists(item)?(<i className="fa-solid fa-heart "></i>):(<i className="fa-regular fa-heart "></i>)} 
                          </div>
                          <Link  className='text-decoration-none text-success-emphasis' to={`view/${item.role}/${item.id}`}> <div className="view-Icon bg-white my-2 Icon-shape rounded-circle">
                          <i className="fa-regular fa-eye"></i>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}

          <section id="Popular-Categories" className="pt-5">
            <div className="container text-center">
              <h2 className="fw-bold">Popular Categories</h2>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line1"></div>
              <div className="row py-3 gy-2">
                {dataCategory.map((item) => {
                  return (
                    <div className="col-lg-3">
                      <div className="card-Eng position-relative">
                        <div className="card-Eng-img">
                        <img src={require('../assets/Engineers/client-4.png')} className='w-100' alt=''/>
                        <img src={item.image} className='w-100' alt=''/>
                        </div>
                        <Link  to={`/category/${item.id}`}><h3 className="py-2">{item.title}</h3></Link>
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


        </div>
      ) :dataEngFilter.length===0 ||dataContFilter.length===0||dataProFilter===0?(
        <h3 className="text-danger">No data</h3>
      ):(<div></div>)}
    </div>
    <Testmonial/>
        </div>
    )
}
export default Home;