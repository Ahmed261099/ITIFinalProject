import React from 'react'
import './header.css'

function header()
{
    return(
            <div id="carouselExampleCaptions" className="carousel slide vh-100 ">
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                    <img src={require('../assets/HeaderSilder/hero-1.jpg')} className="d-block w-100 vh-100" alt="" />
                    <div className="carousel-caption d-none d-md-block top-50">
                        <div className='carousel-caption-visibility'>
                            <h5 className='h1'>First slide label</h5>
                            <p className='h2'>Some representative placeholder content for the first slide.</p>
                            <button className='btn btn-dark  px-4 py-2 rounded-5 '>SHOP NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={require('../assets/HeaderSilder/hero-2.jpg')} className="d-block w-100 vh-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block top-50">
                        <div className='carousel-caption-visibility'>
                            <h5 className='h1'>Second slide label</h5>
                            <p className='h2'>Some representative placeholder content for the Second slide.</p>
                            <button className='btn btn-dark  px-4 py-2 rounded-5 '>SHOP NOW</button>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item ">
                    <img src={require('../assets/HeaderSilder/hero-1.jpg')} className="d-block w-100 vh-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block top-50">
                        <div className='carousel-caption-visibility'>
                            <h5 className='h1'>Third slide label</h5>
                            <p className='h2'>Some representative placeholder content for the Third slide.</p>
                            <button className='btn btn-dark  px-4 py-2 rounded-5 '>SHOP NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev slide-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next slide-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}
export default header;