import React, { useEffect, useState } from "react";
import "./ViewProfile.css";
import Carousel from "react-bootstrap/Carousel";
import { Link, useHistory, useParams } from "react-router-dom";
import { logoutInitiate } from "../Store/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { db, storage, auth } from "../Firebase.js";


function ViewProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const param = useParams()
  console.log(param)

  const dispatch = useDispatch();

  console.log(currentUser)

  const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
  const regPass = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  );
  const [getProvidor, setGetProvidor] = useState({});
  const [getEngineer, setGetEngineer] = useState({});
  const [getProduct, setGetProduct] = useState({});
  const [getUser, setGetUser] = useState({});
  const [getAddress, setAddress] = useState([]);
  const [getFeedback, setFeedback] = useState([]);
  const [getPortofolio, setPortofolio] = useState([]);
  const [getDB, setGetDB] = useState("");
  const [getMessage, setMessage] = useState([]);
  const [message, setGetMessages] = useState("");


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (param.role === "Provider") {
      const docRef = doc(db, "providers", param.id);
      onSnapshot(docRef, (snapshot) => {
        setGetProvidor({ ...snapshot.data(), id: doc.id });
        setGetUser({ ...snapshot.data(), id: doc.id });
        setAddress(snapshot.data().address);
        setFeedback(snapshot.data().feedback);
        setMessage(snapshot.data().messages);
        setPortofolio(snapshot.data().portofolio);
        setGetDB("providers");

      })

    } else if (param.role === "Engineer") {
      const docRef = doc(db, "engineers", param.id);
      onSnapshot(docRef, (snapshot) => {
        setGetEngineer({ ...snapshot.data(), id: snapshot.id });
        setGetUser({ ...snapshot.data(), id: snapshot.id });
        setAddress(snapshot.data().address);
        setFeedback(snapshot.data().feedback);
        setMessage(snapshot.data().messages);
        setPortofolio(snapshot.data().portofolio);
        setGetDB("engineers")
      })

    } else {
      const docRef = doc(db, "products", param.id);
      onSnapshot(docRef, (snapshot) => {
        setGetProduct({ ...snapshot.data(), id: snapshot.id });
        setGetUser({ ...snapshot.data(), id: snapshot.id });
        setAddress(snapshot.data().address);
        setFeedback(snapshot.data().feedback);
        setPortofolio(snapshot.data().portofolio);
        setGetDB("products")
      })
    }
  };
  console.log(getUser, getDB)


  const [userData, setUserData] = useState({
    city: "",
    street: "",
    title: "",
    caption: "",
    comment: "",
    rating: "",
    img: "",
    image: "",
    newPassword: "",
    confirmpassword: "",
    message:"",
  });

  const [error, setErros] = useState({
    name: null,
    username: null,
    image: null,
    email: null,
    role: null,
    spetialization: null,
    street: null,
    city: null,
    phone: null,
    experience: null,
    img: null,
    title: null,
    caption: null,
    comment: null,
    rating: null,
    password: null,
    newPassword: null,
    confirmpassword: null,
  });
  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
  });

  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }
  const addUserData = (e) => {
    if (e.target.name === "img") {
      if (e.target.files[0]) {
        setUserData({
          ...userData,
          img: e.target.files[0],
        });
      }
      setErros({
        ...error,
        img:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });

    } 
    else if (e.target.name === "message") {
      setUserData({
        ...userData,
        message: e.target.value,
      });
      setErros({
        ...error,
        message:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    }
    else if (e.target.name === "title") {
      setUserData({
        ...userData,
        title: e.target.value,
      });

      setErros({
        ...error,
        title:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "caption") {
      setUserData({
        ...userData,
        caption: e.target.value,
      });

      setErros({
        ...error,
        caption:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "comment") {
      setUserData({
        ...userData,
        comment: e.target.value,
      });

      setErros({
        ...error,
        comment:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "rating") {
      setUserData({
        ...userData,
        rating: e.target.value,
      });

      setErros({
        ...error,
        rating: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "city") {
      setUserData({
        ...userData,
        city: e.target.value,
      });

      setErros({
        ...error,
        city:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "street") {
      setUserData({
        ...userData,
        street: e.target.value,
      });

      setErros({
        ...error,
        street:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "newPassword") {
      setUserData({
        ...userData,
        newPassword: e.target.value,
      });

      setErros({
        ...error,
        newPassword:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 8
              ? "Min Length is 8"
              : regPass.test(e.target.value)
                ? ""
                : "Invalid Password",
      });
    } else {
      setUserData({
        ...userData,
        confirmpassword: e.target.value,
      });

      setErros({
        ...error,
        confirmpassword:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 8
              ? "Min length is 8"
              : e.target.value === userData.newPassword
                ? ""
                : "Password and confirm password should be the same",
      });
    }
  };
  const changeUserData = (e) => {
    if (e.target.name === "name") {
      setGetUser({
        ...getUser,
        name: e.target.value,
      });

      setErros({
        ...error,
        name:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "email") {
      setGetUser({
        ...getUser,
        email: e.target.value,
      });

      setErros({
        ...error,
        email: reg.test(e.target.value) ? "" : "Invalid email address",
      });
    } else if (e.target.name === "image") {
      if (e.target.files[0]) {
        setGetUser({
          ...getUser,
          image: e.target.files[0],
        });
      }
      setErros({
        ...error,
        image: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "username") {
      setGetUser({
        ...getUser,
        username: e.target.value,
      });

      setErros({
        ...error,
        username:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "role") {
      setGetUser({
        ...getUser,
        role: e.target.value,
      });

      setErros({
        ...error,
        role:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
              ? "Min Length is 3 Char"
              : null,
      });
    } else if (e.target.name === "experience") {
      setGetUser({
        ...getUser,
        experience: e.target.value,
      });

      setErros({
        ...error,
        experience:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 10
              ? "Min Length is 10 Char"
              : null,
      });
    } else if (e.target.name === "spetialization") {
      setGetUser({
        ...getUser,
        spetialization: e.target.value,
      });

      setErros({
        ...error,
        spetialization:
          e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "rate") {
      setGetUser({
        ...getUser,
        rate: e.target.value,
      });

      setErros({
        ...error,
        rate: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "phone") {
      setGetUser({
        ...getUser,
        phone: e.target.value,
      });

      setErros({
        ...error,
        phone:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 11
              ? "Min Length is 11"
              : null,
      });
    } else if (e.target.name === "password") {
      setErros({
        ...error,
        password:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value === getUser.password
              ? ""
              : "password is not correct",
      });
    }
  };

  const calcRating = () => {
    getUser.rate = 0;
    let count = 0;

    getFeedback?.forEach((element, index) => {
      getUser.rate += parseInt(element.rating);
      count = index;
    });
    getUser.rate = getUser.rate / (count + 1);

    return getUser.rate;
  };
  const drawStar = (rateing) => {
    let rate = parseInt(rateing);
    var star = [];
    for (let index = 0; index < rate; index++) {
      star.push(<i key={index} className=" fa-star fa-solid"></i>);
    }
    for (let index = 0; index < 5 - rate; index++) {
      star.push(<i key={index + 10} className="fa-star fa-regular"></i>);
    }

    return star;
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  const handleButtonComment = () => {
    getUser.feedback.push({
      comment: userData.comment,
      rating: userData.rating,
    });

    const docRef = doc(db, getDB, getUser.id);

    updateDoc(docRef, {
      feedback: getUser.feedback,
      rate: getUser.rate,
    })
      .then(() => {
        console.log("done feedback");
      })
      .catch((error) => {
        console.log("ERROR" + error);
      });

    userData.comment = "";
    userData.rating = "";
  };
  console.log(message)
  const sendMessage = () => {
    
    const { uid, displayName} = auth.currentUser;
    console.log(auth.currentUser)
    const docRef2 = doc(db, getDB, getUser.id)
      getUser.messages.push({
      text: userData.message,
      name: displayName,
      uid,

    })
    updateDoc(docRef2, {
      messages: getUser.messages
    }).then(() => {
      console.log("message sent successfully")
    }).catch((error) => {
      console.log("Error" + error)
    })
    getMessage.text="";
  }
        return (
          <>
            {getDB === "engineers" || getDB === "providers" ? (<div id="profile">
              {/* start of header */}
              <div className="header ">
                <div className="container">
                  <div className="d-flex align-items-center">
                    {/* start op p.p */}

                    <div className="d-flex ">
                      {getUser.image === "" ? (
                        <img
                          className="imgprofile"
                          src={require("../assets/avatar2.png")}
                          alt=""
                        ></img>
                      ) : (
                        <img className="imgprofile" src={getUser.image} alt=""></img>
                      )}
                    </div>

                    {/* end op p.p */}
                    <div className="ps-5">
                      <div className="d-flex">
                        <h2 className="ps-0 fs-1">{getUser.name}</h2>
                        <div className="m-3">{drawStar(calcRating())}</div>
                      </div>
                      <ul className="paths ">
                        <li className="dvider">
                          <Link to="/" className="text-decoration-none text-dark">
                            Home{" "}
                          </Link>
                        </li>
                        <li>My Account</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of header */}

              {/* start of carousel */}
              <div className="container mt-5">
                <Carousel fade className="align-center w-100 ">
                  {getPortofolio?.map((onePort, index) => {
                    return (
                      <Carousel.Item key={index} className=" ">
                        <img
                          className="d-block w-100 "
                          height={"400px"}
                          src={onePort.image}
                          alt=""
                        />
                        <Carousel.Caption>
                          <h3 className="">{onePort.title}</h3>
                          <p>{onePort.caption}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              {/* end of Carousel */}
              {/*start section buttons and content  */}
              <div className="mt-5  p-5">
                <div className="container">
                  <div className="col-12">
                    <div className="row">
                      {/* start section of buttons */}

                      <div className="col-xl-3 col-12 mb-5">
                        <div className=" flex-column  nav" role="tablist">
                          <button
                            className="btn btn-outline-dark text-start border-secondary-subtle  rounded-0 p-3 text-uppercase active"
                            type="button"
                            id="info-tab"
                            data-bs-target="#info"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-selected="true"
                          >
                            <i className="pe-2 fa fa-dashboard"></i>
                            info
                          </button>
                          <button
                            className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase"
                            type="button"
                            id="feedback-tab"
                            data-bs-target="#feedback"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="feedback"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            <i className="pe-2 fa fa-comment"></i>
                            FeedBack
                          </button>
                          <button
                            className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase"
                            type="button"
                            id="message-tab"
                            data-bs-target="#message"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="message"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            <i className="pe-2 fa fa-message"></i>
                            Message
                          </button>
                          {" "}
                          <button
                            className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase"
                            type="button"
                            id="address-tab"
                            data-bs-target="#address-edit"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="address-edit"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            <i className="pe-2 fa fa-map-marker"></i>
                            address
                          </button>
                        </div>
                      </div>
                      {/* end section of buttons */}

                      {/* start section of content */}
                      <div className="col-xl-9 col-12 w-xl-100">
                        <div className="tab-content" id="myaccountContent">
                          {/* <!-- Single Tab Content Start --> */}

                          <div
                            className="tab-pane fade show active"
                            id="info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                            tabIndex="0"
                          >
                            <div className="border p-4">
                              <h3 className="border-bottom pb-2 mb-4">Info</h3>

                              <div className="">
                                <p>
                                  <strong>Name :</strong> {getUser.name}{" "}
                                </p>
                                <p>
                                  <strong>Email :</strong> {getUser.email}{" "}
                                </p>
                                <p>
                                  <strong>Role :</strong> {getUser.role}{" "}
                                </p>
                                <p>
                                  <strong>spetialization :</strong>{" "}
                                  {getUser.spetialization}{" "}
                                </p>
                                <p>
                                  <strong>Experiance :</strong> {getUser.experience}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Tab Content End --> */}
                          {/* <!-- Single Tab Content Start --> */}
                          <div
                            className="tab-pane fade"
                            id="feedback"
                            role="tabpanel"
                            aria-labelledby="feedback-tab"
                            tabIndex="0"
                          >
                            <div className="border p-4">
                              <h3 className="border-bottom pb-2 mb-4">FeedBack</h3>

                              {getFeedback?.map((feedback, index) => {
                                return (
                                  <>
                                    <div
                                      className="bg-body-secondary rounded-3 d-flex m-2 align-items-center"
                                      key={index}
                                    >
                                      <p className="m-4 w-75">
                                        <strong>{feedback.comment}</strong>
                                      </p>
                                      <div className="m-4 d-flex justify-content-end w-25">
                                        {drawStar(feedback.rating)}
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                              <hr />
                              <form onSubmit={(e) => submitData(e)}>
                                <div className="col-12 ">
                                  <textarea
                                    className="border m-2 border-secondary-subtle w-100 p-3 d-block "
                                    placeholder="Left FeedBack"
                                    type="text"
                                    name="comment"
                                    onChange={(e) => addUserData(e)}
                                  />
                                  <p className="text-danger ms-2">
                                    {" "}
                                    <small>{error.comment}</small>{" "}
                                  </p>
                                </div>
                                <div className="mb-3 d-flex">
                                  <select
                                    name="rating"
                                    onChange={(e) => addUserData(e)}
                                    className="border m-2 border-secondary-subtle w-50 p-3 d-block"
                                  >
                                    <option selected>rating</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>

                                  <div className="m-4 d-flex justify-content-center w-50">
                                    {drawStar(userData.rating)}
                                  </div>
                                </div>
                                <div className="col-12">
                                  <button
                                    className="btn btn-outline-dark text-uppercase p-2 m-2"
                                    disabled={
                                      error.rating ||
                                      error.comment ||
                                      userData.comment === "" ||
                                      userData.rating === "rating"
                                    }
                                    onClick={() => handleButtonComment()}
                                    type="reset"
                                  >
                                    Comment
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* <!-- Single Tab Content End --> */}
                          {/* <!-- Single Tab Content Start --> */}
                          <div
                            className="tab-pane fade"
                            id="message"
                            role="tabpanel"
                            aria-labelledby="message-tab"
                            tabIndex="0"
                          >
                            <div className="border p-4">
                              <h3 className="border-bottom pb-2 mb-4">Message</h3>
                              
                             
                              <form onSubmit={(e) => submitData(e)}>
                                <div className="col-12 ">
                                  <textarea
                                    className="border m-2 border-secondary-subtle w-100 p-3 d-block "
                                    placeholder="Send Message"
                                    type="text"
                                    name="message"
                        
                                  onChange={(e) => addUserData(e)}
                                  />
                                </div>
                                <div className="col-12">
                                  <button className="btn btn-outline-dark text-uppercase p-2 m-2" 
                                  type="reset" 
                                  disabled={getMessage.text===""}
                                   onClick={()=>sendMessage()}>
                                    Send
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* <!-- Single Tab Content End --> */}
                          {/* <!-- Single Tab Content Start --> */}
                          <div
                            className="tab-pane fade"
                            id="address-edit"
                            role="tabpanel"
                            aria-labelledby="address-tab"
                            tabIndex="0"
                          >
                            <div className="border p-4">
                              <h3 className="border-bottom pb-2 mb-4">
                                Billing Address
                              </h3>
                              {getAddress?.map((address, index) => {
                                return (
                                  <>
                                    <div key={index}>
                                      <p>
                                        <strong>{address.city}</strong>
                                      </p>
                                      <p>{address.street}</p>
                                    </div>
                                  </>
                                );
                              })}

                              <p>Mobile: {getUser.phone}</p>

                            </div>
                          </div>
                          {/* <!-- Single Tab Content End --> */}
                        </div>
                      </div>
                      {/* end section of content */}
                    </div>
                  </div>
                </div>
              </div>
              {/*end section of buttons and content */}
            </div>
            ) : (
              <div className="container">
                <div class="row g-0 rounded overflow-hidden flex-md-row m-5 shadow-sm h-md-250 position-relative shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">Products</strong>
                    <div className="d-flex">
                      <p class="mb-1 fs-1 fw-bolder text-success-emphasis">{getUser.name}</p>
                      <div className="m-3">{drawStar(calcRating())}</div>
                    </div>
                    <div class="mb-1 text-muted">{getUser.spetialization}</div>
                    <p class="card-text mb-auto">
                      {getUser.description}
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="d-flex flex-row mt-4 justify-content-around">
                      <span className="fs-3">Price:</span> <p className="col-6 text-success fs-3 text-danger">{getUser.price} EGP</p>
                      {/* <Button className="col-6" variant="outline-success">Add To Card</Button>{' '} */}
                      <button class="cart-button btn btn-outline-primary">
                        <span class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>  Add to cart</span>
                        <span class="added">Added</span>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-box"></i>
                      </button>

                    </div>
                  </div>
                  <div class="col-auto d-none d-lg-block">

                    {getUser.image === "" ? (
                      <img
                        // className="imgprofile"
                        src={require("./../assets/Products/product-1.jpg")}
                        alt=""
                      ></img>
                    ) : (
                      <img className="imgprofile" src={getUser.image} alt=""></img>
                    )}
                  </div>

                </div>
                {/*start section buttons and content  */}
                <div className="mt-5  p-5">
                  <div className="container">
                    <div className="col-12">
                      <div className="row">
                        {/* start section of buttons */}

                        <div className="col-xl-3 col-12 mb-5">
                          <div className=" flex-column  nav" role="tablist">
                            <button
                              className="btn btn-outline-dark text-start border-secondary-subtle  rounded-0 p-3 text-uppercase active"
                              type="button"
                              id="info-tab"
                              data-bs-target="#info"
                              data-bs-toggle="tab"
                              role="tab"
                              aria-selected="true"
                            >
                              <i className="pe-2 fa fa-dashboard"></i>
                              more info
                            </button>

                            <button
                              className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase"
                              type="button"
                              id="feedback-tab"
                              data-bs-target="#feedback"
                              data-bs-toggle="tab"
                              role="tab"
                              aria-controls="feedback"
                              aria-selected="false"
                              tabIndex="-1"
                            >
                              <i className="pe-2 fa fa-comment"></i>
                              FeedBack
                            </button>
                          </div>
                        </div>
                        {/* end section of buttons */}

                        {/* start section of content */}
                        <div className="col-xl-9 col-12 w-xl-100">
                          <div className="tab-content" id="myaccountContent">
                            {/* <!-- Single Tab Content Start --> */}

                            <div
                              className="tab-pane fade show active"
                              id="info"
                              role="tabpanel"
                              aria-labelledby="info-tab"
                              tabIndex="0"
                            >
                              <div className="border p-4">
                                <h3 className="border-bottom pb-2 mb-4">Info</h3>

                                <div className="">
                                  <p>
                                    <strong>Quantity :</strong> {getUser.quantity}{" "}
                                  </p>
                                  <p>
                                    <strong>Rate :</strong> {getUser.rate}{" "}
                                  </p>
                                  <p>
                                    <strong>Category :</strong>{" "}
                                    {getUser.spetialization}{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Single Tab Content End --> */}
                            {/* <!-- Single Tab Content Start --> */}
                            <div
                              className="tab-pane fade"
                              id="feedback"
                              role="tabpanel"
                              aria-labelledby="feedback-tab"
                              tabIndex="0"
                            >
                              <div className="border p-4">
                                <h3 className="border-bottom pb-2 mb-4">FeedBack</h3>

                                {getFeedback?.map((feedback, index) => {
                                  return (
                                    <>
                                      <div
                                        className="bg-body-secondary rounded-3 d-flex m-2 align-items-center"
                                        key={index}
                                      >
                                        <p className="m-4 w-75">
                                          <strong>{feedback.comment}</strong>
                                        </p>
                                        <div className="m-4 d-flex justify-content-end w-25">
                                          {drawStar(feedback.rating)}
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                                <hr />
                                <form onSubmit={(e) => submitData(e)}>
                                  <div className="col-12 ">
                                    <textarea
                                      className="border m-2 border-secondary-subtle w-100 p-3 d-block "
                                      placeholder="Left FeedBack"
                                      type="text"
                                      name="comment"
                                      onChange={(e) => addUserData(e)}
                                    />
                                    <p className="text-danger ms-2">
                                      {" "}
                                      <small>{error.comment}</small>{" "}
                                    </p>
                                  </div>
                                  <div className="mb-3 d-flex">
                                    <select
                                      name="rating"
                                      onChange={(e) => addUserData(e)}
                                      className="border m-2 border-secondary-subtle w-50 p-3 d-block"
                                    >
                                      <option selected>rating</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>

                                    <div className="m-4 d-flex justify-content-center w-50">
                                      {drawStar(userData.rating)}
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <button
                                      className="btn btn-outline-dark text-uppercase p-2 m-2"
                                      disabled={
                                        error.rating ||
                                        error.comment ||
                                        userData.comment === "" ||
                                        userData.rating === "rating"
                                      }
                                      onClick={() => handleButtonComment()}
                                      type="reset"
                                    >
                                      Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/* <!-- Single Tab Content End --> */}


                          </div>
                        </div>
                        {/* end section of content */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*end section of buttons and content */}

              </div>


            )}
          </>
        );
      }

      export default ViewProfile;
