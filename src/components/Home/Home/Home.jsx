import React from 'react';
import './Home.css'

const Home = () => {
    return (
      <section className="header" id="header">
        <div className="container-fluid">
          <div className="row height-max align-items-center">
            <div className="col col-md-9 ms-auto text-end pe-5">
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
                  <i className="fas fa-play"></i>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Home;