import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllToys.css'
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../SingleToy/SingleToy';

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)



    return (
      <>
        <section className="all-toys-bg" id="">
          <div className="container-fluid">
            <div className="row all-toys-height-max align-items-center">
              <div className="col col-md-9 ms-auto text-end pe-5 my-5">
                <h5 className="title-heading d-inline-block p-2 text-uppercase">
                  the all new car toys
                </h5>
                <h2 className="tyext-uppercase my-2 title text-blue">
                  2018 mercedes-benz
                </h2>
                <h3 className="text-uppercase">model name</h3>
                <h6 className="text-capitalize">starts from</h6>
                <h2>
                  $60,000
                  <a href="" className="title-icon d-inline-block mx-2">
                    <FontAwesomeIcon icon={faCar} />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">Our Toys</h1>
              <h1 className="section-title--special">cars collection</h1>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="row">
                {
                    allToys && allToys.map((toy) => <SingleToy toy={toy} key={toy._id}></SingleToy>)
                }
            </div>
        </div>
      </>
    );
};

export default AllToys;