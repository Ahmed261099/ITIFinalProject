import { useState } from "react";
import "./register.css";
const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
const regPass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

// const regPhone = RegExp('(^[1-9]\d{2}\s\d{3}\s\d{4})');
function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        username: "",
        street: "",
        city: "",
        phone: "",
        password: "",
        confirmpassword: ""
    })

    const [error, setErros] = useState({
        name: null,
        email: null,
        username: null,
        street: null,
        city: null,
        phone: null,
        password: null,
        confirmpassword: null
    })

    const changeUserData = (e) => {
        if (e.target.name == "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                name: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email: reg.test(e.target.value) ? '' : "Invalid email address"
            })
        }
        else if (e.target.name == "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErros({
                ...error,
                username: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "street") {
            setUserData({
                ...userData,
                street: e.target.value
            })

            setErros({
                ...error,
                street: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "city") {
            setUserData({
                ...userData,
                city: e.target.value
            })

            setErros({
                ...error,
                city: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "phone") {
            setUserData({
                ...userData,
                phone: e.target.value
            })

            setErros({
                ...error,
                phone: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 11 ? "Min Length is 11" : null
            })
        }
        else if (e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                password: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min Length is 8" : regPass.test(e.target.value) ? '' : "Invalid Password"
            })

        } else {
            setUserData({
                ...userData,
                confirmpassword: e.target.value
            })

            setErros({
                ...error,
                confirmpassword: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min length is 8" : e.target.value == userData.password ? '' : "Password and confirm password should be the same"
            })
        }

    }

    const submitData = (e) => {
        e.preventDefault()
    }

    return (
        <body className="reg">
            <div className="container">
                <div className="offset-md-3 col-md-6">
                    <br />
                    <h1 className="h1 text-light"> Sign up </h1> <br />
                    <form onSubmit={(e) => submitData(e)} className="border border-light rounded p-5">
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
                            <div className="d-flex justify-content-between">
                                <div>
                                    <input name="city" placeholder="Enter your city" className="form-control p-2 " value={userData.city} onChange={(e) => changeUserData(e)} />
                                    <p className="text-danger"> {error.city} </p>
                                </div>
                                
                                <div>
                                    <input name="street" placeholder="Enter your street" className="form-control p-2" value={userData.street} onChange={(e) => changeUserData(e)} />
                                    <p className="text-danger"> {error.street} </p>
                                </div>
                            </div>
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
                        <div className="mb-3">
                            <label className="form-label text-light">Roll</label>  <br />
                            <select name="roll" className="form-control  p-2">
                                <option>Engineer</option>
                                <option>Provider</option>
                                {/* <option>Electrical Engineer</option>
                        <option>Mechanical Engineer</option>
                        <option>Mechaelectrical Engineer</option>
                        <option>Telecom Engineer</option>
                        <option>ُEnergy Engineer</option>
                        <option>Archetect</option>
                        <option>Painting Contractor</option>
                        <option>Electrical Contractor</option>
                        <option>Floor Contractor</option>
                        <option>Plumbing Contractor</option>
                        <option>Carpentry contractor</option>
                        <option>Blacksmith contractor</option> */}
                            </select>
                        </div>
                        <br />
                        <input className="btn btn-outline-dark" id="btn" type="submit" value={"Sign up"} disabled={error.name || error.email || error.username || error.password || error.confirmpassword} />
                    </form>
                    <br /> <br />
                </div>
            </div>
        </body>
    )



}

export default Register