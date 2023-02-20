import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";
import { registerInitiate } from "../Store/Actions/AuthAction";

import "./register.css";
const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
const regPass = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
);
// const regPhone = RegExp(/^[1-9]\d{2}\s\d{3}\s\d{4}/);
function Register() {
  const history = useHistory();

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    address: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setErros] = useState({
    name: null,
    email: null,
    username: null,
    address: null,
    phone: null,
    password: null,
    confirmpassword: null,
  });

  const changeUserData = (e) => {
    if (e.target.name === "name") {
      setUserData({
        ...userData,
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
      setUserData({
        ...userData,
        email: e.target.value,
      });

      setErros({
        ...error,
        email: reg.test(e.target.value) ? "" : "Invalid email address",
      });
    } else if (e.target.name === "username") {
      setUserData({
        ...userData,
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
    } else if (e.target.name === "address") {
      setUserData({
        ...userData,
        address: e.target.value,
      });

      setErros({
        ...error,
        address:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length < 3
            ? "Min Length is 3 Char"
            : null,
      });
    } else if (e.target.name === "phone") {
      setUserData({
        ...userData,
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
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErros({
        ...error,
        password:
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
            : e.target.value === userData.password
            ? ""
            : "Password and confirm password should be the same",
      });
    }
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      history.push("profile");
    }
  }, [currentUser, history]);

  const submitData = async (e) => {
    e.preventDefault();

    dispatch(
      registerInitiate(
        userData.email,
        userData.password,
        userData.username,
        userData.phone
      )
    );

    await addDoc(collection(db, "users"), {
      // ...userData,
      name: userData.name,
      username: userData.username,
      password: userData.password,
      email: userData.email.toLowerCase(),
      emailFormated: userData.email,
      image: "",
      role: "customer",
      wishlist: [],
      address: userData.address,
      phone: userData.phone,
      cart: [],
      timestamp: serverTimestamp(),
    }).then(function (res) {
        alert("success " + res);
      })
      .catch(function (error) {
        alert("ERROR " + error);
      });
  };

  return (
    <body className="reg">
      <div className="container">
        <div className="offset-md-3 col-md-6">
          <h1 className="h1 text-light"> Sign up </h1> <br />
          <form
            onSubmit={(e) => submitData(e)}
            className="border border-light rounded p-5"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">
                Name
              </label>{" "}
              <br />
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`form-control p-2 ${error.name && "border-danger"}`}
                value={userData.name}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.name} </p>
            </div>

            <div className="mb-3">
              <label className="form-label text-light" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                name="email"
                placeholder="Enter your email"
                className="form-control p-2"
                value={userData.email}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.email} </p>
            </div>
    return (
        <body className="reg">
        <div className="container">
        <div className="offset-md-3  col-md-6">
            <h1 className="h1 text-light pt-5"> Sign up </h1> <br/>
            <form onSubmit={(e) => submitData(e)} className="border border-light blur rounded p-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-light">Name</label> <br />
                    <input name="name" type="text" placeholder="Enter your name"
                        className={`form-control p-2 ${error.name && "border-danger"}`}
                        value={userData.name} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger">  {error.name}  </p>
                </div>

                <div className="mb-3">
                    <label className="form-label text-light" htmlFor="email">Email</label> <br />
                    <input name="email" placeholder="Enter your email" className="form-control p-2" value={userData.email} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.email} </p>
                </div>

                <div className="mb-3">
                    <label className="form-label text-light">Username</label>  <br />
                    <input name="username" placeholder="Enter your username" className="form-control p-2" value={userData.username} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.username} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Address</label>  <br />
                    <input name="address" placeholder="Enter your address" className="form-control p-2" value={userData.address} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.address} </p>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Phone</label>  <br />
                    <input name="phone" placeholder="Enter your phone" className="form-control p-2" value={userData.phone} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.phone} </p>
                </div>

                <div className="mb-3">
                    <label className="form-label text-light">Password</label>  <br />
                    <input name="password" placeholder="Enter your password" className="form-control p-2" value={userData.password} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.password} </p>
                </div>

                <div className="mb-3">
                    <label className="form-label text-light">Confirm Password</label>  <br />
                    <input name="confirmpassword" placeholder="Confirm your password" className="form-control p-2" value={userData.confirmpassword} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.confirmpassword} </p>
                </div>
                <br/>
                <input className="btn btn-outline-dark" id="btn1" type="submit" value={"Sign up"} disabled={error.name || error.email || error.username || error.password || error.confirmpassword} />
            </form>
            <br/> <br/>
        </div>
        </div>
    </body>
    )

            <div className="mb-3">
              <label className="form-label text-light">Username</label> <br />
              <input
                name="username"
                placeholder="Enter your username"
                className="form-control p-2"
                value={userData.username}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.username} </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Address</label> <br />
              <input
                name="address"
                placeholder="Enter your address"
                className="form-control p-2"
                value={userData.address}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.address} </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Phone</label> <br />
              <input
                name="phone"
                placeholder="Enter your phone"
                className="form-control p-2"
                value={userData.phone}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.phone} </p>
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Password</label> <br />
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="form-control p-2"
                value={userData.password}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.password} </p>
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Confirm Password</label>{" "}
              <br />
              <input
                name="confirmpassword"
                type="password"
                placeholder="Confirm your password"
                className="form-control p-2"
                value={userData.confirmpassword}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.confirmpassword} </p>
            </div>
            <br />
            <input
              className="btn btn-outline-dark"
              id="btn1"
              type="submit"
              value={"Sign up"}
              disabled={
                error.name ||
                error.email ||
                error.username ||
                error.address ||
                error.phone ||
                error.password ||
                error.confirmpassword
              }
            />
          </form>
          <br /> <br />
        </div>
      </div>
    </body>
  );
}

export default Register;
