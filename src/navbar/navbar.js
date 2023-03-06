import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
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
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-lg-1">
              <NavLink
                className="nav-link fs-5"
                aria-current="page"
                to="/category"
              >
                Category
              </NavLink>
            </li>
            <li className="nav-item px-lg-1">
              <NavLink
                className="nav-link fs-5"
                aria-current="page"
                to="/firstreg"
              >
                Register
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
              {/* <li className="nav-item">
                            <span className="nav-link " aria-current="page">Logout</span>
                        </li> */}
              <li className="nav-item px-lg-1">
                <NavLink
                  className="nav-link  fs-5"
                  aria-current="page"
                  to="Search"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
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
              <li className="nav-item px-lg-1">
                <NavLink
                  className="nav-link fs-5"
                  aria-current="page"
                  to="/Cart"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  fw-bolder" aria-current="page" to="login">Login</NavLink>
                        </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
