import React from 'react';
import './Headers.css'
import { Link, NavLink } from 'react-router-dom';

const Headers = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 ">
          <Link to="/" className="navbar-brand my-0 py-0">
            <img
              src={"https://i.ibb.co/DYJyys2/Cars-Land-logo.png"}
              alt=""
              className="img-fluid cars-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item fw-semibold">
                <NavLink
                  to="/donation"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Donation
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Headers;