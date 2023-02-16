import { useState } from "react";
import "../Register/register.css";
const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
const regPass = RegExp('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,20})');
// const regPass = new RegExp(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/);
function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [error, setErros] = useState({
        email: null,
        password: null,
    })

    const changeUserData = (e) => {
        
        if (e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email:reg.test(e.target.value)?'':"Invalid email address"
            })
        }
        else {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                password: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 8 ? "Min Length is 8"
                 :regPass.test(e.target.value)? '': "Invalid Password"
            })
        }
    }
    const submitData = (e) => {
        e.preventDefault()
    }

    return (
        <body>
        <div className="container">
            <h1 className="h1 text-light"> Login  </h1>
            <br/>
            <div className="offset-md-3 col-md-6">
            <form onSubmit={(e) => submitData(e)} className="border border-light rounded p-5" >

                <div className="mb-3">
                    <label className="form-label text-light" htmlFor="email">Email</label> <br/>
                    <input name="email" className="form-control p-2" placeholder="Enter your email" value={userData.email} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.email} </p>
                </div>

                <div className="mb-3">
                    <label className="form-label text-light">Password</label>  <br/>
                    <input name="password" className="form-control p-2" placeholder="Enter your password" value={userData.password} onChange={(e) => changeUserData(e)} />
                    <p className="text-danger"> {error.password} </p>
                </div>
                <input className="btn btn-outline-light" type="submit" value={'Login'} disabled={error.email ||error.password} />
            </form>
        </div>
        </div>
        </body>
    )



}

export default Login