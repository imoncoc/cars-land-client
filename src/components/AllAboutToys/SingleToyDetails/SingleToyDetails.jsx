import React from 'react';
import './SingleToyDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const SingleToyDetails = () => {
    const toy = useLoaderData();
    const {_id, name, details, photoUrl, price, quantity, rating, sellerEmail, sellerName, subCategory} = toy;

    const handleBuyNow = () => {
        Swal.fire({
          icon: "success",
          title: "Successfully Added Items",
          text: "Buy Now functionality coming soon! Stay tuned!",
        });
    }


    console.log(toy)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-5 p-5 shadow">
            <img
              className="img-fluid img-thumbnail rounded"
              src={photoUrl}
              alt=""
            />
          </div>
          <div className="col-10 col-md-6 mx-auto my-5 p-5 d-flex align-items-center justify-content-center shadow">
            <div>
              <h3>{name}</h3>
              <p>star</p>
              <p> Seller: {sellerName} </p>
              <p>Email: {sellerEmail}</p>
              <p> Quantity: {quantity} items available </p>
              <p>Category: {subCategory}</p>
              <h4>Price: ${price}</h4>
              <button onClick={handleBuyNow} className="btn btn-info w-100">
                Buy Now
              </button>
            </div>
          </div>

          <div className="col-12 mx-auto mb-5 shadow p-5">
            <p>
              {" "}
              Details: <span className="text-muted">{details}</span>{" "}
            </p>
          </div>

          <div className="col-12 text-end mb-3">
            <Link to="/">
              <button className="btn btn-info">
                <span className="me-2">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                Back to Home
              </button>
            </Link>
          </div>
          <div className="col-12 text-end mb-5">
            <Link to="/all-toys" className="">
              <button className="btn btn-warning">
                <span className="me-2">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                Back to All Toys
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleToyDetails;