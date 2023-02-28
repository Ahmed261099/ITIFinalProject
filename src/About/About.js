import React from "react";
import './About.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function About()
{
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        className: "center",
        centerMode: true,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return(
        <>
            <div id="AboutHero">
                <div className="header ">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="ps-5">
                                <h2 className="h1">About</h2>
                                <ul className="paths">
                                    <li className="dvider">
                                        <Link to="/" className="text-decoration-none text-dark">
                                        Home{" "}
                                        </Link>
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="h1 fw-bold text-center">About Us</h2>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line1"></div>
                <div className="row py-5 gy-3 ">
                    <div className="col-lg-6">
                        <div className="About-content">
                            <h3 className="fw-bold pb-3">OUR STORY</h3>
                            <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nostrum ea ratione mollitia tempora! Voluptas quos nostrum quisquam cupiditate hic non asperiores, aut nihil accusantium inventore officiis, soluta officia sed sequi. Velit voluptatibus quis earum quibusdam minus pariatur, ut accusamus. 
                            Officiis, suscipit..</p>                      
                            <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nostrum ea ratione mollitia tempora! Voluptas quos nostrum quisquam cupiditate hic non asperiores, aut nihil accusantium inventore officiis, soluta officia sed sequi. Velit voluptatibus quis earum quibusdam minus pariatur, ut accusamus. 
                            Officiis, suscipit..</p>                      
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="About-Img bg-danger">
                            <img src={require('../assets/About/About.webp')} className='w-100' alt="AboutImage"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5 d-none d-lg-block">
                <h2 className="h1 fw-bold text-center">All Members</h2>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line1"></div>
                <div className="row  py-5 ">
                    <Slider {...settings} className='w-75 m-auto'>
                        
                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                        <div className='slider_item position-relative overflow-hidden text-center'>
                            <div className="slider_item_img position-relative overflow-hidden rounded-2">
                                <img src={require('../assets/Members/Ahmed Samy A.Baset.jpg')} className='w-100 rounded' alt=""/>  
                                <div className="position-absolute top-0 left-0 h-100 w-25 ">
                                    <div className="Member-Data w-100 position-absolute h-100 p-2 ">
        
                                    </div>
                                    <div className="Portfolio-Icons w-100 position-absolute  p-2 ">
                                        <div className="member-Social-Icons  pb-2 ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.facebook.com/ahmedroski261099/" target='_blank' rel='noreferrer' className="w-100 "><i className="fab fa-facebook-f "></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberSecondIcon pb-2  ">
                                            <div className=" member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.instagram.com/ahmed_roski/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-instagram text-danger"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberThirdIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-linkedin"></i></a>
                                            </div> 
                                        </div>
                                        <div className="member-Social-Icons memberFourthIcon  pb-2 ">
                                            <div className="member-Icon Icon-shape bg-white rounded-circle">
                                                <a href="https://github.com/Ahmed261099" target='_blank' rel='noreferrer' className="w-100"><i className="fab fa-github text-black"></i></a>
                                            </div> 
                                        </div>
                 
                                    </div>
                                </div>
                            </div>
                            <h3 className="pt-2">Ahmed Samy</h3>
                         </div>

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default About;