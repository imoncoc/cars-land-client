import React, { useContext } from 'react';
import './Headers.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Headers = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };


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
                  to="/all-toys"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  All-Toys
                </NavLink>
              </li>

              <li className="nav-item fw-semibold">
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  My-Toys
                </NavLink>
              </li>
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/add-toys"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Add-Toys
                </NavLink>
              </li>

              <li className="nav-item fw-semibold">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>

            {user ? (
              <div
                className="d-flex justify-content-around align-items-center text-center"
                style={{ width: "20rem" }}
              >
                <div className="d-flex align-items-center">
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      title={
                        user.displayName ? user.displayName : "No Name Found!"
                      }
                      alt=""
                      className="user-img img-fluid"
                    />
                  ) : (
                    <div
                      className="phone-icon"
                      title={
                        user?.displayName ? user.displayName : "No Name Found!"
                      }
                    >
                      <FontAwesomeIcon className="user-icon" icon={faUser} />
                    </div>
                  )}
                  <p className="user-email my-2 ms-1 fw-semibold">
                    {user.email ? (
                      user.email
                    ) : (
                      <span style={{ fontSize: "0.8rem" }}>Mr/Mrs.</span>
                    )}
                  </p>
                </div>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-info">Login</button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    );
};

export default Headers;