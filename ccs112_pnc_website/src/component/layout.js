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
          <button
            className="navbar-toggler mx-auto"
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
              
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="admissionDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </span>
                <ul className="dropdown-menu" aria-labelledby="admissionDropdown">
                  <li>
                    <Link to="/admission" className="dropdown-item">
                      Requirements
                    </Link>
                  </li>
                  <li>
                    <Link to="/procedure" className="dropdown-item">
                      Enrollment Procedure
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="academicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </Link>
                <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                  <li>
                    <Link to="/academics/arts-and-sciences" className="dropdown-item">
                      College of Arts and Sciences
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/business-accountancy" className="dropdown-item">
                      College of Business, Accountancy and Administration
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/computing-studies" className="dropdown-item">
                      College of Computing Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/education" className="dropdown-item">
                      College of Education
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/engineering" className="dropdown-item">
                      College of Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics/health-allied-sciences" className="dropdown-item">
                      College of Health and Allied Sciences
                    </Link>
                  </li>
                </ul>
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
          .bg-orange { background-color:rgb(46, 126, 34) !important; }
          .nav-link:hover { color:rgb(46, 126, 34) !important; }
          .dropdown-menu { background-color: #343a40; }
          .dropdown-item { color: white !important; } /* Make dropdown text white */
          .dropdown-item:hover { color: rgb(46, 126, 34) !important; background-color: #495057; }
          .nav-item.dropdown:hover .dropdown-menu {
            display: block;
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
