import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link ms-5 active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5 text-warning">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5 text-warning">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5 text-warning">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;