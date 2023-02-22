import React, { useState } from 'react'
import './Profile.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { logoutInitiate } from '../Store/Actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';


function Profile() {

    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
    const regPass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

    const user = {
        name: "Ramy Menassa",
        userName: "rami menassa",
        email: "rami@gmail.com",
        role: "Engineer",
        specialization: "Civil Engineer",
        address: [{
            city: "minia",
            street: "tahaHassen",
        }, {
            city: "cairo",
            street: "zatoon",
        }],
        phone: "001212252",
        experiance: "2 year experince in nile group now work in trenty ",
        portfolios: [{
            img: "../assets/img1.jpeg",
            title: "First slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }, {
            img: "../assets/img2.jpeg",
            title: "Second slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },],
        password: "R@mi1234"
    }
    const [userData, setUserData] = useState({
        name: user.name,
        userName: user.userName,
        email: user.email,
        role: user.role,
        specialization: user.specialization,
        address: user.address,
        city:"",
        street:"",
        phone: user.phone,
        experiance: user.experiance,
        portfolios: user.portfolios,
        title:"",
        caption:"",
        img:"",
        currentpassword:"",
        password: "",
        confirmpassword: ""
    })

    const [error, setErros] = useState({
        name: null,
        userName: null,
        email: null,
        role: null,
        specialization: null,
        street: null,
        city: null,
        phone: null,
        experiance: null,
        img: null,
        title: null,
        caption: null,
        currentpassword:null,
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
        else if (e.target.name == "userName") {
            setUserData({
                ...userData,
                userName: e.target.value
            })

            setErros({
                ...error,
                userName: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "img") {
            setUserData({
                ...userData,
                img: e.target.value
            })

            setErros({
                ...error,
                img: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "title") {
            setUserData({
                ...userData,
                title: e.target.value
            })

            setErros({
                ...error,
                title: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }
        else if (e.target.name == "caption") {
            setUserData({
                ...userData,
                caption: e.target.value
            })

            setErros({
                ...error,
                caption: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        }

        else if (e.target.name == "role") {
            setUserData({
                ...userData,
                role: e.target.value
            })

            setErros({
                ...error,
                role: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
            })
        } else if (e.target.name == "experiance") {
            setUserData({
                ...userData,
                experiance: e.target.value
            })

            setErros({
                ...error,
                experiance: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 10 ? "Min Length is 10 Char" : null
            })
        }
        else if (e.target.name == "specialization") {

            setUserData({
                ...userData,
                specialization: e.target.value
            })

            setErros({
                ...error,
                specialization: e.target.value.length == 0 ? "This Field is Required" : e.target.value.length < 3 ? "Min Length is 3 Char" : null
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
        else if (e.target.name == "currentpassword") {
            setUserData({
                ...userData,
                currentpassword: e.target.value
            })

            setErros({
                ...error,
                currentpassword: e.target.value.length == 0 ? "This Field is Required" : e.target.value == user.password ? '' : "password is not correct"
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

    const handleAuth = () => {
        if (currentUser) {
          dispatch(logoutInitiate());
        }
    }

    const submitData = (e) => {
        e.preventDefault()
    }


    const handleButtonPortfolio =() =>{
        user.portfolios.push({"title":userData.title,"caption":userData.caption,"img":userData.img})
        userData.img="";
        userData.caption="";
        userData.title="";
        console.log(user.portfolios);
    }

    return (

        <>
            <div id='profile'>
                {/* start of header */}
                <div className='header '>
                    <div className='container'>
                        <div className='d-flex align-items-center'>
                            {/* start op p.p */}

                            <div className='d-flex '>
                                <img className='imgprofile' src={require('../assets/avatar2.png')} alt=''>
                                </img>
                            </div>

                            {/* end op p.p */}
                            <div className='ps-5'>
                                <h2 className='ps-0 fs-1'>
                                    {user.name}
                                </h2>
                                <ul className='paths '>
                                    <li className='dvider'>
                                        <Link to="/" className='text-decoration-none text-dark'>Home </Link>
                                    </li>
                                    <li>
                                        My Account
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* end of header */}


                {/* start of carousel */}
                <div className='container mt-5'>
                    <Carousel fade className='align-center w-100 '>
                        {userData.portfolios.map((onePort, index) => {
                            return (
                                <Carousel.Item key={index} className=' '>
                                    <img
                                        className="d-block w-100 " height={'400px'}
                                        src={require(`../assets/img1.jpeg`)}
                                        alt=''
                                    />
                                    <Carousel.Caption>
                                        <h3>{onePort.title}</h3>
                                        <p>{onePort.caption}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                        }
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
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle  rounded-0 p-3 text-uppercase active" type="button" id="info-tab" data-bs-target="#info" data-bs-toggle="tab" role='tab' aria-selected="true"  >
                                            <i className="pe-2 fa fa-dashboard"></i>
                                            info
                                        </button>
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="addPortfolio-tab" data-bs-target="#addPortfolio" data-bs-toggle="tab" role="tab" aria-controls="addPortfolio" aria-selected="false" tabIndex="-1">
                                            <i class="pe-2 fa-solid fa-wand-magic-sparkles"></i>
                                            Add Portfolio
                                        </button>
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="message-tab" data-bs-target="#message" data-bs-toggle="tab" role="tab" aria-controls="message" aria-selected="false" tabIndex="-1">
                                            <i className="pe-2 fa fa-message"></i>
                                            Message
                                        </button>
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="address-tab" data-bs-target="#address-edit" data-bs-toggle="tab" role="tab" aria-controls="address-edit" aria-selected="false" tabIndex="-1">
                                            <i className="pe-2 fa fa-map-marker"></i>
                                            address
                                        </button>
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="account-tab" data-bs-target="#account-info" data-bs-toggle="tab" role="tab" aria-controls="account-info" aria-selected="false" tabIndex="-1">
                                            <i className="pe-2 fa fa-edit"></i>
                                            Edit Details
                                        </button>
                                        <a className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" href="login-register.html" onClick={handleAuth}><i className="pe-1 fa fa-sign-out"></i> Logout</a>
                                    </div>
                                </div>
                                {/* end section of buttons */}

                                {/* start section of content */}
                                <div className="col-xl-9 col-12 w-xl-100">
                                    <div className="tab-content" id="myaccountContent">
                                        {/* <!-- Single Tab Content Start --> */}

                                        <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Info</h3>

                                                <div className="">
                                                    <p><strong>Name :</strong> {userData.name} </p>
                                                    <p><strong>Email :</strong> {userData.email} </p>
                                                    <p><strong>Role :</strong> {userData.role} </p>
                                                    <p><strong>specialization :</strong> {userData.specialization} </p>
                                                    <p><strong>Experiance :</strong> {userData.experiance} </p>


                                                </div>


                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}

                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="addPortfolio" role="tabpanel" aria-labelledby="addPortfolio-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>add Portfolio</h3>
                                                <form onSubmit={(e) => submitData(e)} >
                                                    <div className=" col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="Write title for Portfolio " type="text" name='title' value={userData.title} onChange={(e) => changeUserData(e)} />
                                                        <p className="text-danger ms-2" > <small>{error.title}</small> </p>
                                                    </div>
                                                    <div className=" col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="Write caption for Portfolio" type="text" name='caption' onChange={(e) => changeUserData(e)} />
                                                        <p className="text-danger ms-2"> <small>{error.caption}</small> </p>
                                                    </div>
                                                    <div className="col-12 ">
                                                        <input className='w-100 p-3 m-2  m-2   form-control ' accept="image/*" type="file" name='img' onChange={(e) => changeUserData(e)} />
                                                        <p className="text-danger ms-2"> <small>{error.img}</small> </p>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-outline-dark text-uppercase p-2 m-2" type='button' onClick={()=>handleButtonPortfolio()} disabled={error.img || error.caption || error.title} >Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}
                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="message" role="tabpanel" aria-labelledby="message-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Message</h3>
                                                <form onSubmit={(e) => submitData(e)}>
                                                    <div className="col-12 ">
                                                        <textarea className='border m-2 border-secondary-subtle w-100 p-3 d-block ' id="first-name" placeholder="Send Message" type="text" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-outline-dark text-uppercase p-2 m-2">Send</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}

                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Billing Address</h3>
                                                {userData.address.map((add) => {
                                                    return (
                                                        <>
                                                            <p><strong>{add.city}</strong></p>
                                                            <p>{add.street}</p>

                                                        </>
                                                    )
                                                })}
                                                <p>Mobile: {userData.phone}</p>
                                                <hr />
                                                <form className='row' onSubmit={(e) => submitData(e)}>
                                                    <div className="col-lg-6 col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="add city" name='city' type="text" onChange={(e) => changeUserData(e)} />
                                                        <p className="text-danger ms-2"> <small>{error.city}</small> </p>
                                                    </div>
                                                    <div className="col-lg-6 col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="add street and department" name='street' type="text" onChange={(e) => changeUserData(e)} />
                                                        <p className="text-danger ms-2"> <small>{error.street}</small> </p>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-outline-dark text-uppercase p-2 m-2" type='button' disabled={ error.city || error.street }><i className="fa fa-edit" > </i>  add</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}

                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Account Details</h3>

                                                <div className="account-details-form">

                                                    <div >
                                                        <form onSubmit={(e) => submitData(e)} className="row ">
                                                            <div className="col-lg-6 col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="first-name" name='userName' value={userData.userName} onChange={(e) => changeUserData(e)}  type="text" />
                                                                <p className="text-danger ms-2"> <small>{error.userName}</small> </p>
                                                            </div>
                                                            <div className="col-lg-6 col-12">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="display-name" name='name' value={userData.name} onChange={(e) => changeUserData(e)} type="text" />
                                                                <p className="text-danger ms-2"> <small>{error.name}</small> </p>
                                                            </div>

                                                            <div className="col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="email" name='email' value={userData.email} onChange={(e) => changeUserData(e)} type="email" />
                                                                <p className="text-danger ms-2"> <small>{error.email}</small> </p>
                                                            </div>
                                                            <div className="col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="experince" name='experiance' value={userData.experiance} onChange={(e) => changeUserData(e)} type="text" />
                                                                <p className="text-danger ms-2"> <small>{error.experiance}</small> </p>
                                                            </div>
                                                            <div className="mb-3">

                                                                <select name="specialization" value={userData.specialization} onChange={(e) => changeUserData(e)} className="border m-2 border-secondary-subtle w-100 p-3 d-block">
                                                                    <option>Civil Engineer</option>
                                                                    <option>Interior Designer</option>
                                                                    <option>Electrical Engineer</option>
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
                                                                    <option>Blacksmith contractor</option>
                                                                </select>
                                                                <p className="text-danger ms-2"> <small>{error.specialization}</small> </p>
                                                            </div>
                                                            <div className="d-flex justify-content-end">
                                                                <button className="btn btn-outline-dark text-uppercase p-2 m-2">edit</button>
                                                            </div>
                                                        </form >

                                                        <div className="col-12 ">
                                                            <h4>Password change</h4>
                                                        </div>
                                                        <form  onSubmit={(e) => submitData(e)} className="row">
                                                            <div className="col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="current-pwd" placeholder="Current Password" name='currentpassword' onChange={(e) => changeUserData(e)} type="password" />
                                                                <p className="text-danger ms-2"> <small>{error.currentpassword}</small> </p>
                                                            </div>

                                                            <div className="col-lg-6 col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="new-pwd" placeholder="New Password" name='password' onChange={(e) => changeUserData(e)} type="password" />
                                                                <p className="text-danger ms-2"> <small>{error.password}</small> </p>

                                                            </div>

                                                            <div className="col-lg-6 col-12 ">
                                                                <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="confirm-pwd" placeholder="Confirm Password" name='confirmpassword' onChange={(e) => changeUserData(e)} type="password" />
                                                                <p className="text-danger ms-2"> <small>{error.confirmpassword}</small> </p>
                                                            </div>

                                                            <div className="d-flex justify-content-end">
                                                                <button className="btn btn-outline-dark text-uppercase p-2 m-2">Save Changes</button>
                                                            </div>
                                                        </form>

                                                    </div>


                                                </div>
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

        </>
    )
}

export default Profile