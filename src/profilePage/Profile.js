import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Profile.css'

function Profile() {
  return (

    <>
    {/* start of header */}
    <div className='header '>
        <div className='container'>
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
    {/* end of header */}

    {/* start op p.p */}
    <div className='container'>
        <div className='d-flex alin-center justify-content-center'>
            <img className='imgprofile' src={require('../assets/avatar2.png')}>
            </img>
        </div>
    </div>
    {/* end op p.p */}


    {/* start of carousel */}
    <div className='container mt-120'>
    <Carousel fade className='align-center w-100 '>
      <Carousel.Item className=' '>
        <img
          className="d-block w-100 " height={'400px'}
          src={require("../assets/4-Unique-Office-Designs-1.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"height={'400px'}
          src={require("../assets/best-small-office-designs.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"    height={'400px'}              
          src={require("../assets/casanova-mccann-offices-costa-mesa-8-1200x800.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    

    {/* end of carousel */}



    {/*start section buttons and content  */}
     <div className="m-5  pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="row">
                        {/* start section of buttons */}

                            <div className="col-xl-3 col-12 mb-5">
                                <div className=" flex-column  nav" role="tablist">
                                    <button className="btn btn-outline-dark text-start border-secondary-subtle  rounded-0 p-3 text-uppercase active" type="button" id="dashboad-tab" data-bs-target="#dashboad" data-bs-toggle="tab" role='tab'  aria-selected="true"  >
                                        <i className="pe-2 fa fa-dashboard"></i>
                                        Dashboard
                                    </button>
                                    <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="orders-tab" data-bs-target="#orders" data-bs-toggle="tab" role="tab" aria-controls="orders" aria-selected="false" tabindex="-1">
                                        <i className="pe-2 fa fa-cart-arrow-down"></i> 
                                        Orders
                                    </button>
                                    <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="payment-tab" data-bs-target="#payment-method" data-bs-toggle="tab" role="tab" aria-controls="payment-method" aria-selected="false" tabindex="-1">
                                        <i className="pe-2 fa fa-credit-card"></i> 
                                        Payment Method
                                    </button>
                                    <button className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase" type="button" id="address-tab" data-bs-target="#address-edit" data-bs-toggle="tab" role="tab" aria-controls="address-edit" aria-selected="false" tabindex="-1">
                                        <i className="pe-2 fa fa-map-marker"></i> 
                                        address
                                    </button>
                                    <button  className="btn btn-outline-dark text-start border-secondary-subtle rounded-0 p-3 text-uppercase"type="button" id="account-tab" data-bs-target="#account-info" data-bs-toggle="tab" role="tab" aria-controls="account-info" aria-selected="false" tabindex="-1">
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

                                    <div className="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab" tabindex="0">
                                        <div className="border p-4">
                                            <h3 className='border-bottom pb-2 mb-4'>Dashboard</h3>

                                            <div className="welcome mb-20">
                                                <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a  href="login-register.html" className="text-dark text-decoration-none"> Logout</a>)</p>
                                            </div>

                                            <p className="mb-0">From your account dashboard. you can easily check &amp; view your
                                                recent orders, manage your shipping and billing addresses and edit your
                                                password and account details.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Tab Content End --> */}

                                    {/* <!-- Single Tab Content Start --> */}
                                    <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab" tabindex="0">
                                        <div className="border p-4">
                                            <h3 className='border-bottom pb-2 mb-4'>Orders</h3>

                                            <div className="myaccount-table table-responsive text-center">
                                                <table className="table table-bordered">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Name</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mostarizing Oil</td>
                                                            <td>Aug 22, 2018</td>
                                                            <td>Pending</td>
                                                            <td>$45</td>
                                                            <td><a href="cart.html" className="btn btn-outline-dark">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Katopeno Altuni</td>
                                                            <td>July 22, 2018</td>
                                                            <td>Approved</td>
                                                            <td>$100</td>
                                                            <td><a href="cart.html" className="btn btn-outline-dark">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Murikhete Paris</td>
                                                            <td>June 12, 2017</td>
                                                            <td>On Hold</td>
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
                                    <div className="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="payment-tab" tabindex="0">
                                        <div className="border p-4">
                                            <h3 className='border-bottom pb-2 mb-4'>Payment Method</h3>

                                            <p className="">You Can't Saved Your Payment Method yet.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Tab Content End --> */}

                                    {/* <!-- Single Tab Content Start --> */}
                                    <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-tab" tabindex="0">
                                        <div className="border p-4">
                                            <h3 className='border-bottom pb-2 mb-4'>Billing Address</h3>

                                            <address>
                                                <p><strong>Alex Tuntuni</strong></p>
                                                <p>1355 Market St, Suite 900 
                                                San Francisco, CA 94103</p>
                                                    <p>Mobile: (123) 456-7890</p>
                                            </address>

                                            <a href="#" className="btn d-inline-block edit-address-btn"><i className="fa fa-edit"></i>Edit Address</a>
                                        </div>
                                    </div>
                                    {/* <!-- Single Tab Content End --> */}

                                    {/* <!-- Single Tab Content Start --> */}
                                    <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-tab" tabindex="0">
                                        <div className="border p-4">
                                            <h3 className='border-bottom pb-2 mb-4'>Account Details</h3>

                                            <div className="account-details-form"> 
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="first-name" placeholder="First Name" type="text"/>
                                                        </div>

                                                        <div className="col-lg-6 col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="last-name" placeholder="Last Name" type="text"/>
                                                        </div>

                                                        <div className="col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="display-name" placeholder="Display Name" type="text"/>
                                                        </div>

                                                        <div className="col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="email" placeholder="Email Address" type="email"/>
                                                        </div>

                                                        <div className="col-12 mb-30">
                                                            <h4>Password change</h4>
                                                        </div>

                                                        <div className="col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="current-pwd" placeholder="Current Password" type="password"/>
                                                        </div>

                                                        <div className="col-lg-6 col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="new-pwd" placeholder="New Password" type="password"/>
                                                        </div>

                                                        <div className="col-lg-6 col-12 mb-30">
                                                            <input className='border m-2 border-secondary-subtle w-100 p-3 d-block' id="confirm-pwd" placeholder="Confirm Password" type="password"/>
                                                        </div>

                                                        <div className="col-12">
                                                            <button className="btn btn-outline-dark text-uppercase p-2 m-2">Save Changes</button>
                                                        </div>

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
        </div>
    {/*end section of buttons and content */}

    </>
  )
}

export default Profile