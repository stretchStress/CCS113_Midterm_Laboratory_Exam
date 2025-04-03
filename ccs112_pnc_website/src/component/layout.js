import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header className="bg-orange p-3 text-white text-center">
                <h1>Pamantasan ng Cabuyao</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admission" className="nav-link">Admission</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/academics" className="nav-link">Academics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link">News & Activity</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container mt-4">{children}</main>

            <footer className="bg-dark text-white text-center p-3">
                &copy; 2025 Pamantasan ng Cabuyao. All rights reserved.
            </footer>

            <style>
                {`
                    .bg-orange { background-color: #e8792f !important; }
                `}
            </style>
        </div>
    );
};

export default Layout;
