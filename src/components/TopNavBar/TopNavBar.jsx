import React from "react";
import logo from "../../Assets/image/logo.png";

export const TopNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <img src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbaritem"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbaritem">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Home</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">IT Service</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">SEO Agency</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Science ML Company</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Analysis and AI Startup</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Science Online course</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Big Data Analysis StartUp</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Macine Learning AI Solution</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">IT Service</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">SEO Agency</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Science ML Company</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Analysis and AI Startup</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Data Science Online course</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Big Data Analysis StartUp</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Macine Learning AI Solution</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">Service</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Service Details</a>
                        </li>
                        
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Case Studies</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">Case Studies</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Case Studies Details</a>
                        </li>
                        
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">Course</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Events</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Contacts</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Gallery</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">FAQ</a>
                        </li>
                        
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blogs</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" className="dropdown-item">Blogs Grid</a>
                        </li>
                        <li>
                            <a href="#" className="dropdown-item">Blogs Details</a>
                        </li>
                        
                    </ul>
                </li>  
            </ul>
            <form className="d-flex justify-content-start align-items-center">
                <input type="text" className="form-control me-4" />
                <button className="btn btn-success flex-shirnk text-nowrap">Get started</button>
            </form>
        </div>
      </div>
    </nav>
  );
};
