import React, {  useEffect, useState } from 'react';
import './NewCarArrive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazy-load';

const NewCarArrive = () => {
 

  const [randomData, setRandomData] = useState([])
  useEffect(() => {
    fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/randomData`)
      .then((res) => res.json())
      .then((data) => {setRandomData(data)
      })
      .catch((error) => console.log(error));
  }, [])
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
            <div
              className="col-10 mx-auto col-lg-6 featured-info my-3"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {/* <!-- Single Items Start --> */}
              {randomData &&
                randomData.map((data) => (
                  <div
                    key={data._id}
                    className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap"
                  >
                    <span className="featured-icon me-2">
                      <img
                        className="img-fluid new-car-arrive-img"
                        src={data.photoUrl}
                        alt=""
                      />
                    </span>
                    <h5 className="fw-bold mx-1">
                      {data.name.length > 25
                        ? `${data.name.substring(0, 25)}...`
                        : data.name}
                    </h5>
                    <h5 className="mx-1">new model</h5>
                  </div>
                ))}
            </div>
            {/* <!-- Featured Info End -->
          <!-- Featured Img Start --> */}
            <div
              className="col-10 mx-auto col-lg-6 featured-img my-3 align-self-center"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {/* <!-- Img Container --> */}
              <div className="img-container">
                <LazyLoad height={"100%"}>
                  <img
                    src={"https://i.ibb.co/xf0G71h/banner-02.jpg"}
                    className="img-fluid featured-photo"
                    alt=""
                  />
                </LazyLoad>
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