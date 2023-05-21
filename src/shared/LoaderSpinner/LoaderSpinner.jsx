import React from 'react';
import './LoaderSpinner.css'
import { Triangle } from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
      <div className="container">
        <div className="row" style={{height: "100vh"}}>
          <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
            <Triangle
              height="80"
              width="80"
              color="#40ACF1"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </div>
      </div>
    );
};

export default LoaderSpinner;