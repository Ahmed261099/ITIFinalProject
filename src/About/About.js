import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

function About()
{
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
                <div className="row">
                <div class="section1" id="about">

    </div>
                </div>

            </div>
        </>
    )
}

export default About;