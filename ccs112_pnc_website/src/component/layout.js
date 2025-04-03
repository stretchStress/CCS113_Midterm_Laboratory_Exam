import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-orange text-white text-center py-4">
        <h1 className="fw-bold">Pamantasan ng Cabuyao</h1>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admission" className="nav-link">
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/academics" className="nav-link">
                  Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News & Activities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-3 flex-grow-1">{children}</main>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container">
          <p className="mb-1">
            &copy; 2025 Pamantasan ng Cabuyao. All rights reserved.
          </p>
          <small>CCS112 - Applications Development and Emerging Technologies</small>
        </div>
      </footer>

      <style>
        {`
            .bg-orange { background-color: #e8792f !important; }
            .nav-link:hover { color: #ff9800 !important; }
        `}
      </style>
    </div>
  );
};

export default Layout;
