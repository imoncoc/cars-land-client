import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllToys.css'
import { Link, useLoaderData } from 'react-router-dom';
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

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto my-5">
              <table className="table shadow table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">PhotoUrl</th>
                    <th scope="col">Toy Name</th>
                    <th scope="col">Seller Name</th>
                    <th scope="col">Sub-Category</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allToys &&
                    allToys.map((toy) => (
                      <tr key={toy._id}>
                        <th scope="row">
                          <img
                            className="table-img"
                            src={toy?.photoUrl}
                            alt=""
                          />
                        </th>
                        <td>{toy?.name}</td>
                        <td>{toy?.sellerName}</td>
                        <td>{toy?.subCategory} Toys</td>
                        <td>{toy?.quantity}</td>
                        <td>${toy?.price}</td>
                        <td className="text-center">
                          <Link to={`/single-toy/${toy._id}`}>
                            <button className="btn btn-info me-2">
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="container">
            <div className="row">
                {
                    allToys && allToys.map((toy) => <SingleToy toy={toy} key={toy._id}></SingleToy>)
                }
            </div>
        </div> */}
      </>
    );
};

export default AllToys;