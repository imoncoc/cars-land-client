import React, { useContext } from 'react';
import './SingleToy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartPlus, faFileSignature, faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const SingleToy = ({toy}) => {
  const { user } = useContext(AuthContext);
    const {
      photoUrl,
      name,
      sellerName,
      price,
      subCategory,
      details,
      quantity,
      rating,
      _id
    } = toy;

    const handleNavigation = () => {
      if(!user){
        Swal.fire({
          icon: "warning",
          title: "Oops!",
          text: "You Have to Login First!",
        });
      }
    }

    return (
      <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
        <div className="card car-card overflow-hidden">
          <img src={photoUrl} className="img-fluid car-img" alt="" />

          <div className="card-body">
            <div className="car-info d-flex justify-content-between">
              <div className="car-text text-uppercase">
                <h6 className="fw-bold" style={{ height: "3rem" }}>
                  {name}
                </h6>
                <h6>
                  {" "}
                  <FontAwesomeIcon
                    className="toy-category-icon"
                    icon={faList}
                  />{" "}
                  {subCategory} Toys
                </h6>
              </div>

              <div className=''>
                <div className="d-flex mb-2">
                  <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                  <span className="ms-2">{rating}</span>
                </div>
                <h5 className="car-value align-self-center py-2 px-3">
                  $<span className="car-price">{price}</span>
                </h5>
              </div>
            </div>
          </div>

          <div className="card-footer text-capitalize d-flex justify-content-between align-items-center">
            <p>
              <span>
                <FontAwesomeIcon
                  className="toy-sign-icon"
                  icon={faFileSignature}
                />
              </span>{" "}
              <span className="toy-sm-text">{sellerName}</span>
            </p>
            <p>
              <span>
                <FontAwesomeIcon className="text-danger" icon={faCartPlus} />
              </span>{" "}
              <span className="toy-sm-text">{quantity} items available</span>
            </p>
            <Link to={`/single-toy/${_id}`} onClick={handleNavigation}>
              <p className="toy-details-icon">
                <span>
                  <FontAwesomeIcon
                    className="toy-details-icon-icon"
                    icon={faArrowRight}
                  />
                </span>{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleToy;