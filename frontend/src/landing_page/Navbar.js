import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "30%" }} />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-muted" aria-current="page" to="/signup" style={{fontSize: "20px"}}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/about" style={{fontSize: "20px"}}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/product" style={{fontSize: "20px"}}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="pricing" style={{fontSize: "20px"}}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/support" style={{fontSize: "20px"}}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
