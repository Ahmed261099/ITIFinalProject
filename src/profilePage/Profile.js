import React from 'react'
import './Profile.css'
import Carousel from 'react-bootstrap/Carousel';


function Profile() {
    const user = {
        name: "Ramy Menassa",
        fname: "rami",
        lname: "menassa",
        email: "rami@gmail.com",
        role: "designer",
        address: [{
            city: "minia",
            street: "tahaHassen",
        }, {
            city: "cairo",
            street: "zatoon",
        }],
        phone: "001212252",
        experiance: ["2 year experince in nile group", "now work in trenty "]
        , portfolios: [{
            img: "../assets/img1.jpeg",
            title: "First slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }, {
            img: "../assets/img2.jpeg",
            title: "Second slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },],
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
                                    My Account
                                </h2>
                                <ul className='paths '>
                                    <li className='dvider'>
                                        <a className='linksHeader' href='/home' >Home</a>
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
                        {user.portfolios.map((onePort, index) => {
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
                                        <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="orders-tab" data-bs-target="#orders" data-bs-toggle="tab" role="tab" aria-controls="orders" aria-selected="false" tabIndex="-1">
                                            <i className="pe-2 fa fa-cart-arrow-down"></i>
                                            Orders
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
                                        <a className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" href="login-register.html"><i className="pe-1 fa fa-sign-out"></i> Logout</a>
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
                                                    <p><strong>Name :</strong> {user.name} </p>
                                                    <p><strong>Email :</strong> {user.email} </p>
                                                    <p><strong>Role :</strong> {user.role} </p>
                                                    <p><strong>Experiance :</strong> {user.experiance.join(" ,")} </p>


                                                </div>


                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}

                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab" tabIndex="0">
                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Orders</h3>

                                                <div className="myaccount-table table-responsive text-center">
                                                    <table className="table table-bordered">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Name</th>
                                                                <th>Date</th>
                                                                <th>Total</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mostarizing Oil</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>$45</td>
                                                                <td><a href="cart.html" className="btn btn-outline-dark">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Katopeno Altuni</td>
                                                                <td>July 22, 2018</td>
                                                                <td>$100</td>
                                                                <td><a href="cart.html" className="btn btn-outline-dark">View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Murikhete Paris</td>
                                                                <td>June 12, 2017</td>
                                                                <td>$99</td>
                                                                <td><a href="cart.html" className="btn btn-outline-dark">View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Single Tab Content End --> */}


                                        {/* <!-- Single Tab Content Start --> */}
                                        <div className="tab-pane fade" id="message" role="tabpanel" aria-labelledby="message-tab" tabIndex="0">

                                            <div className="border p-4">
                                                <h3 className='border-bottom pb-2 mb-4'>Message</h3>

                                                <form>
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
                                                {user.address.map((add) => {
                                                    return (
                                                        <>
                                                            <p><strong>{add.city}</strong></p>
                                                            <p>{add.street}</p>

                                                        </>
                                                    )
                                                })}
                                                <p>Mobile: {user.phone}</p>
                                                <hr />
                                                <form className='row'>
                                                    <div className="col-lg-6 col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="add city" type="text" />
                                                    </div>
                                                    <div className="col-lg-6 col-12 ">
                                                        <input className='border m-2 border-secondary-subtle w-100 p-3 d-block ' placeholder="add street and department" type="text" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-outline-dark text-uppercase p-2 m-2"><i className="fa fa-edit"> </i>  add</button>
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
                                                    <form action="#">
                                                        <div >
                                                            <form className="row ">
                                                                <div className="col-lg-6 col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="first-name" value={user.fname} type="text" />
                                                                </div>

                                                                <div className="col-lg-6 col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="last-name" value={user.lname} type="text" />
                                                                </div>

                                                                <div className="col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="display-name" value={user.name} type="text" />
                                                                </div>

                                                                <div className="col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="email" value={user.email} type="email" />
                                                                </div>
                                                                <div className="d-flex justify-content-end">
                                                                    <button className="btn btn-outline-dark text-uppercase p-2 m-2">edit</button>
                                                                </div>
                                                            </form >

                                                            <div className="col-12 ">
                                                                <h4>Password change</h4>
                                                            </div>
                                                            <form className="row">
                                                                <div className="col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="current-pwd" placeholder="Current Password" type="password" />
                                                                </div>

                                                                <div className="col-lg-6 col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="new-pwd" placeholder="New Password" type="password" />
                                                                </div>

                                                                <div className="col-lg-6 col-12 ">
                                                                    <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="confirm-pwd" placeholder="Confirm Password" type="password" />
                                                                </div>

                                                                <div className="d-flex justify-content-end">
                                                                    <button className="btn btn-outline-dark text-uppercase p-2 m-2">Save Changes</button>
                                                                </div>
                                                            </form>

                                                        </div>

                                                    </form>
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