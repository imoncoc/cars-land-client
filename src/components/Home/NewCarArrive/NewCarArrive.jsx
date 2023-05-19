import React from 'react';
import './NewCarArrive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NewCarArrive = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">New Cars</h1>
              <h1 className="section-title--special"> toys Arrive</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* <!-- Featured Info Start --> */}
            <div className="col-10 mx-auto col-lg-6 featured-info my-3">
              {/* <!-- Single Items Start --> */}
              <div className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span className="featured-icon me-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <h5 className="fw-bold mx-1">mercedes</h5>
                <h5 className="mx-1">new model</h5>
              </div>
              {/* <!-- Single Items End -->
           <!-- Single Items Start --> */}
              <div className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span className="featured-icon me-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <h5 className="fw-bold mx-1">mercedes</h5>
                <h5 className="mx-1">new model</h5>
              </div>
              {/* <!-- Single Items End -->
          <!-- Single Items Start --> */}
              <div className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span className="featured-icon me-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <h5 className="fw-bold mx-1">mercedes</h5>
                <h5 className="mx-1">new model</h5>
              </div>
              {/* <!-- Single Items End -->
           <!-- Single Items Start --> */}
              <div className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span className="featured-icon me-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <h5 className="fw-bold mx-1">mercedes</h5>
                <h5 className="mx-1">new model</h5>
              </div>
              {/* <!-- Single Items End -->
          <!-- Single Items Start --> */}
              <div className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span className="featured-icon me-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <h5 className="fw-bold mx-1">mercedes</h5>
                <h5 className="mx-1">new model</h5>
              </div>
              {/* <!-- Single Items End --> */}
            </div>
            {/* <!-- Featured Info End -->
          <!-- Featured Img Start --> */}
            <div className="col-10 mx-auto col-lg-6 featured-img my-3 align-self-center">
              {/* <!-- Img Container --> */}
              <div className="img-container">
                <img
                  src={"https://i.ibb.co/xf0G71h/banner-02.jpg"}
                  className="img-fluid featured-photo"
                  alt=""
                />
                <a href="#" className="featured-link">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </div>
            </div>
            {/* <!-- Featured Img End --> */}
          </div>
        </div>
      </>
    );
};

export default NewCarArrive;