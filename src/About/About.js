import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

function About()
{
    return(
        <>
            <div id="About">
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
                <div className="row">
                <div class="section1" id="about">
        <div class="container">
            <div class="left">
                <div class="back">
                </div>
                <div class="front">
                    <div class="layer">
                        <div class="members">
                            <div class="member"><a href="#"></a></div>
                            <div class="member"><a href="#"></a></div>
                            <div class="member"><a href="#"></a></div>
                            <div class="member"><a href="#"></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="first">
                    <div class="wall"></div>
                    <h2>HELLO,</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="bottom_sec">
                    <ul>
                        <li><span>Name: </span>Rdam smith</li>
                        <li><span>Job Title: </span>UI/UX Designer</li>
                        <li><span>Age: </span>26 Year</li>
                        <li><span>Location: </span>United States, US</li>
                        <li><span>Freelance: </span>Available</li>
                        <li><span>E-mail: </span>Nadia420@gmail.com</li>
                    </ul>
                    <button><a href="#download">Download CV</a></button>
                    <button><a href="#contact">Hire Me</a></button>
                </div>
            </div>
        </div>
    </div>
                </div>

            </div>
        </>
    )
}

export default About;