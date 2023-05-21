import React, {  useEffect, useState } from 'react';
import './Gallery.css'
import LazyLoad from 'react-lazy-load';

const Gallery = () => {
  

    const [myGallery, setMyGallery] = useState([])
    // console.log(myGallery)
    useEffect(()=> {
        fetch(
          `https://cars-land-assignment-11-imoncoc.vercel.app/randomPhotoUrls`
        )
          .then((res) => res.json())
          .then((data) => {
            setMyGallery(data)
          
        })
          .catch((error) => console.log(error));
    }, [])
    return (
      <>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
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
      </>
    );
};

export default Gallery;