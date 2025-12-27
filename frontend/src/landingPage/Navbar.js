import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const activeClass = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  const handleSignupClick = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  const handleLoginClick = () => {
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="/media/media/logo.svg" alt="Logo" style={{ width: "30%" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto gap-3" style={{ fontWeight: "500", fontSize: "16px" }}>
            
            <li className="nav-item">
              <Link className={activeClass("/")} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={activeClass("/signup")}
                to="/signup"
                onClick={(event) => {
                  event.preventDefault();
                  handleSignupClick();
                }}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className={activeClass("/about")} to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className={activeClass("/product")} to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className={activeClass("/pricing")} to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className={activeClass("/support")} to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={activeClass("/login")}
                to="/login"
                onClick={(event) => {
                  event.preventDefault();
                  handleLoginClick();
                }}
              >
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
