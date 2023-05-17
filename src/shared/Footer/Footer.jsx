import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <section className="bg-footer">
        <div className="container-fluid">
          <div className="row mx-4">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto my-5 text-center text-md-start">
              <h3 className="footer-logo fs-1 fw-semibold">LOGO.</h3>
              <p className="footer-logo-description mb-5">
                Be the first who learns about our great promotions!
              </p>
              <p className="footer-follow">FOLLOW US</p>

              <div className="d-flex justify-content-center justify-content-md-start">
                <p className="me-3 footer-icon footer-icon-twitter">
                  {/* <i className="fa-brands fa-twitter fa-2x"></i> */}
                  <FontAwesomeIcon icon={faCoffee} />
                </p>
                <p className="me-3 footer-icon footer-icon-facebook px-3">
                  <i className="fa-brands fa-facebook-f fa-2x"></i>
                </p>
                <p className="footer-icon footer-icon-instagram">
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-2  mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">PRODUCTS</h2>
              <div className="footer-product-items">
                <p className="mb-4">New Arrival</p>
                <p className="mb-4">Best Seller</p>
                <p className="mb-4">On Sale</p>
                <p className="mb-4">All Collection</p>
              </div>
            </div>
            <div className="col-10 col-sm-6 col-md-4 col-lg-2 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">CATEGORY</h2>
              <div className="footer-product-items">
                <p className="mb-4">Barbells</p>
                <p className="mb-4">Plates</p>
                <p className="mb-4">Benches</p>
                <p className="mb-4">Apparel</p>
                <p className="mb-4">Straps & Supports</p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-2 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">INFO</h2>
              <div className="footer-product-items">
                <p className="mb-4">About</p>
                <p className="mb-4">Blog</p>
                <p className="mb-4">Feature</p>
                <p className="mb-4">Store Location</p>
                <p className="mb-4">Terms & Conditions</p>
                <p className="mb-4">Privacy Policy</p>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-3 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">SUBSCRIBE</h2>
              <div className="footer-product-items">
                <h4 className="my-5">
                  Subscribe our newsletter and get discount 30% off
                </h4>

                <div className="input-group mb-3 overflow-hidden">
                  <input
                    type="text"
                    className="form-control footer-input p-3 bg-transparent rounded-0"
                    placeholder="Enter your email..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button className="footer-signup-button input-group-text legal-footer-icon  text-white rounded-0">
                    {" "}
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;