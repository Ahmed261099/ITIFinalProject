import React, { useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import { Mail } from "@mui/icons-material";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  const cartItems = useSelector((state) => state.cartItemsList.cartItems);

  console.log(cartItems);

//   let size;

  useEffect(() => {
    
  }, [cartItems])

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bolder  fs-2" to="/">
          <span className="colored fw-bolder">TASH</span>TIB
          <span className="colored fw-bolder">.</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item px-lg-1">
              <NavLink className="nav-link fs-5" aria-current="page" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-lg-1">
              <NavLink
                className="nav-link fs-5"
                aria-current="page"
                to="/category"
              >
                Shop
              </NavLink>
            </li>

            <li className="nav-item px-lg-1">
              <NavLink
                className="nav-link fs-5"
                aria-current="page"
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-lg-1">
              <NavLink
                className="nav-link fs-5"
                aria-current="page"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className=" d-flex">
            <ul className="navbar-nav ms-lg-auto me-sm-auto mb-2 mb-lg-0 me-2">
              {currentUser ? (
                <>
                  <li className="nav-item px-lg-1">
                    <NavLink
                      className="nav-link fs-5"
                      aria-current="page"
                      to="/Cart"
                    >
                        <Badge badgeContent={cartItems?.length} color="primary">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Badge>
                    </NavLink>
                  </li>
                  <li className="nav-item px-lg-1">
                    <NavLink
                      className="nav-link fs-5"
                      aria-current="page"
                      to="/Profile"
                    >
                      <i class="fa-regular fa-user"></i>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item px-lg-1">
                  <NavLink
                    className="nav-link fs-5"
                    aria-current="page"
                    to="/login"
                  >
                    <i class="fa-solid fa-right-to-bracket"></i>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
