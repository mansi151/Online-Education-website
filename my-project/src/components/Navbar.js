import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import { useState } from "react";
import Register from "./Register";
import Signin from "./Signin.js";
import ScrollToTop from "./ScrollToTop";
import Logout from "./Logout";
import { NavDropdown, Nav, NavItem } from "react-bootstrap";
const Navbar = () => {
  let User_Name = JSON.parse(localStorage.getItem("user"));
  console.warn(User_Name);

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <Router>
      <ScrollToTop />
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <nav
              className={
                fix
                  ? "navbar n_fixed fixed-top navbar-expand-lg"
                  : "navbar fixed-top navbar-expand-lg "
              }
            >
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  MR Learning{" "}
                </Link>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Service">
                        Cources
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/About">
                        About
                      </Link>
                    </li>
                    {localStorage.getItem("user") ? (
                      // <Nav>
                      //   <NavDropdown  title={User_Name && User_Name.uname}>
                      //     <NavItem onClick={CallLogout}>Logout</NavItem>
                      //   </NavDropdown>
                      // </Nav>
                      //
                      <li className="nav-item">
                        <NavDropdown title = {User_Name && User_Name.uname}>
                          <NavLink className='nav-link' to='/Logout'>Logout</NavLink>
                        </NavDropdown>
                      </li>
                    ) : 
                    <>
                     <li className="nav-item">
                      <Link className="nav-link" to="/Register">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Signin">
                        Login
                      </Link>
                    </li> 
                    </>
                    }
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default Navbar;