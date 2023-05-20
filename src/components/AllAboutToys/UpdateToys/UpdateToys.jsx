import React, { useEffect, useState } from 'react';
import './UpdateToys.css'
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateToys = () => {
    const [toys, SetToys] = useState();
    const toy = useLoaderData();
    const {
      _id,
      name,
      details,
      photoUrl,
      price,
      quantity,
      rating,
      sellerEmail,
      sellerName,
      subCategory,
    } = toy;
    

    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();

    const onSubmit = (data) => {
      const { email, password } = data;
      console.log(data);
    };


    return (
        
      <section className="addToys-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5 mx-auto login rounded my-5 bg-white addToys-bg-form">
              <h2 className="text-center mb-2 fw-semibold opacity-75">
                Update Toys
              </h2>
              <p className="text-center text-muted">
                Update Toys is Quick and Easy
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Car Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        placeholder="Enter Your Name"
                        {...register("name", {
                          required: "required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12  col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Seller Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sellerName"
                        value={sellerName}
                        placeholder="Seller Name"
                        {...register("sellerName", {
                          required: "required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Seller email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="sellerEmail"
                        value={sellerEmail}
                        placeholder="Seller Email"
                        {...register("sellerEmail", {
                          required: "required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Photo URL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="photoUrl"
                        value={photoUrl}
                        placeholder="Photo URl"
                        {...register("photoUrl", {
                          required: "required",
                        })}
                      />
                    </div>
                  </div>
                
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Sub Category</label>

                      <select
                        className="form-select"
                        {...register("subCategory")}
                      >
                        <option value={subCategory}>{subCategory}</option>
                        <option>Sports</option>
                        <option value="truck">Truck</option>
                        <option value="regular">Regular</option>
                        <option value="fireTruck">Mini Fire Truck</option>
                        <option value="police">Police</option>
                      </select>
                      
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={price}
                        placeholder="Price"
                        {...register("price", {
                          required: "required",
                        })}
                      />
                      
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Rating</label>
                      <select className="form-select" {...register("rating")}>
                        <option value={rating}>{rating}</option>
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                      </select>
                      
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        placeholder="Available quantity"
                        {...register("quantity", {
                          required: "required",
                        })}
                      />
                      
                    </div>
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Details</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="details"
                        value={details}
                        placeholder="Toy Details"
                        {...register("details", {
                          required: "required",
                        })}
                      />
                      {errors.details && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.details.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn login-btn w-100 fw-bold">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default UpdateToys;