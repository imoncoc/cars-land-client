import React from 'react';
import './WhyChooseCarsLand.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCarSide, faComments, faPeopleCarryBox, faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';

const WhyChooseCarsLand = () => {
    return (
      <>
        <div className="container">
          <div className="row" style={{ marginTop: "4rem" }}>
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">Why Choose</h1>
              <h1 className="section-title--special">cars Land</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto shadow p-3">
              <div className=" d-flex justify-content-center align-items-center">
                <span className="why-icon-div">
                  <FontAwesomeIcon className="fa-2x text-white" icon={faCar} />
                </span>
              </div>
              <h4 className="text-center my-2">All Brands</h4>
              <p className="text-center text-muted">
                we're dedicated to offering an unrivaled selection of toy cars
                from all brands, so you can find the vehicles that capture your
                imagination and fuel your passion
              </p>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto shadow p-3">
              <div className=" d-flex justify-content-center align-items-center">
                <span className="why-icon-div">
                  <FontAwesomeIcon
                    className="fa-2x text-white"
                    icon={faPeopleCarryBox}
                  />
                </span>
              </div>
              <h4 className="text-center my-2">Caring</h4>
              <p className="text-center text-muted">
                At Cars Land, we not only provide a wide selection of toy cars
                but also prioritize the concept of caring. It's not just about
                the products themselves but also the experience.
              </p>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto shadow p-3">
              <div className=" d-flex justify-content-center align-items-center">
                <span className="why-icon-div">
                  <FontAwesomeIcon
                    className="fa-2x text-white"
                    icon={faWallet}
                  />
                </span>
              </div>
              <h4 className="text-center my-2">AFFORDABLE</h4>
              <p className="text-center text-muted">
                We believe that the joy of collecting and playing with toy cars
                should be accessible to everyone. That's why we are committed to
                offering a wide range of affordable options.
              </p>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto shadow p-3">
              <div className=" d-flex justify-content-center align-items-center">
                <span className="why-icon-div">
                  <FontAwesomeIcon
                    className="fa-2x text-white"
                    icon={faTruckFast}
                  />
                </span>
              </div>
              <h4 className="text-center my-2">Fast Delivery</h4>
              <p className="text-center text-muted">
                We value your time and strive to provide a seamless shopping
                experience from start to finish. With our fast delivery service,
                you can look forward to receiving your toy.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default WhyChooseCarsLand;