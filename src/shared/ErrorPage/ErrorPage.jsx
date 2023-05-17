import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    const { error, status } = useRouteError();



    return (
      <div className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <div className="error-bg-text">
                  
                  <p className="fs-1 text-white">
                    {error?.message}
                  </p>
                  <div className="d-flex justify-content-center text-white">
                    <Link to="/" className="btn btn-info">
                      <FontAwesomeIcon icon={faArrowLeft} className="me-2 " />
                      Back to homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;