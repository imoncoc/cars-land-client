import React, { useEffect, useState } from "react";
import "./Gallery.css";
import LazyLoad from "react-lazy-load";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  const [myGallery, setMyGallery] = useState([]);
  // console.log(myGallery)
  useEffect(() => {
    fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/randomPhotoUrls`)
      .then((res) => res.json())
      .then((data) => {
        setMyGallery(data);
      })
      .catch((error) => console.log(error));
  }, []);



  const firstImageStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  };

  const otherImageStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  };



  return (
    <>
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">Our Cars</h1>
              <h1 className="section-title--special"> Photo Gallery</h1>
            </div>
          </div>

          <div className="row gallery-store-items">
            {myGallery &&
              myGallery.map((gallery, i) => (
                <div
                  key={i}
                  className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto my-3 mx-3 gallery-store-item"
                >
                  <div className="gallery-single-item">
                    <div className="gallery-img-container">
                      <LazyLoad height={"100%"}>
                        <img
                          className="img-fluid img-thumbnail gallery-img gallery-store-img "
                          src={gallery}
                          alt=""
                        />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Gallery;
