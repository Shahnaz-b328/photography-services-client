import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  bg-gradient">
            <div class="container-fluid">
                <h5 style={{ color: 'white',margin:'5px' }}>Photography Services</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link  mr-5 text-white fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link  mr-5 text-white fs-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link  mr-5 text-white fs-5 " to="/signup">Sign Up</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link  mr-5 text-white fs-5" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;