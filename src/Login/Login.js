import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Register/register.css";
import { loginInitiate } from "../Store/Actions/AuthAction";

const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
const regPass = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
);
function Login() {

  const history = useHistory();

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setErros] = useState({
    email: null,
    password: null,
  });

  const changeUserData = (e) => {
    if (e.target.name == "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });

      setErros({
        ...error,
        email: reg.test(e.target.value) ? "" : "Invalid email address",
      });
    } else {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErros({
        ...error,
        password:
          e.target.value.length == 0
            ? "This Field is Required"
            : e.target.value.length < 8
            ? "Min Length is 8"
            : regPass.test(e.target.value)
            ? ""
            : "Invalid Password",
      });
    }
  };

  useEffect(() => {
    if(currentUser){
      history.push("profile")
    }
  }, [currentUser, history])

  const submitData = async (e) => {
    e.preventDefault();

    dispatch(loginInitiate(userData.email, userData.password))

  };

  return (
    <body className="reg">
      <div className="container">
        <h1 className="h1 text-light"> Login </h1>
        <br />
        <div className="offset-md-3 col-md-6">
          <form
            onSubmit={(e) => submitData(e)}
            className="border border-light rounded p-5"
          >
            <div className="mb-3">
              <label className="form-label text-light" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                name="email"
                className="form-control p-2"
                placeholder="Enter your email"
                value={userData.email}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.email} </p>
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Password</label> <br />
              <input
                name="password"
                type="password"
                className="form-control p-2"
                placeholder="Enter your password"
                value={userData.password}
                onChange={(e) => changeUserData(e)}
              />
              <p className="text-danger"> {error.password} </p>
            </div>
            <input
              className="btn btn-outline-light"
              id="btn2"
              type="submit"
              value={"Login"}
              disabled={error.email || error.password}
            />
          </form>
          <br />
        </div>
      </div>
    </body>
  );
}

export default Login;
