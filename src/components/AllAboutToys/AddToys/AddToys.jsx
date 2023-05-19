import React, { useContext } from 'react';
import './AddToys.css'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProviders';

const AddToys = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();

    useForm({
      defaultValues: {
        sellerEmail: user?.email,
        sellerName: user?.displayName,
        rating: '5'
      },
    });

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
                Add Toys
              </h2>
              <p className="text-center text-muted">
                Add Toys is Quick and Easy
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
                        placeholder="Enter Your Name"
                        {...register("name", {
                          required: "required",
                        })}
                      />
                      {errors.name && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12  col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Seller Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sellerName"
                        value={user?.displayName || ""}
                        placeholder="Seller Name"
                        {...register("sellerName", {
                          required: "required",
                        })}
                      />
                      {errors.sellerName && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.sellerName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Seller email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="sellerEmail"
                        defaultValue={user?.email}
                        placeholder="Seller Email"
                        {...register("sellerEmail", {
                          required: "required",
                        })}
                      />
                      {errors.sellerEmail && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.sellerEmail.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Photo URL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="photoUrl"
                        placeholder="Photo URl"
                        {...register("photoUrl", {
                          required: "required",
                        })}
                      />
                      {errors.photoUrl && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.photoUrl.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Sub Category</label>
                      {/* <input
                        type="text"
                        className="form-control"
                        id="subCategory"
                        placeholder="Sub Category"
                        {...register("subCategory", {
                          required: "required",
                        })}
                      /> */}
                      <select
                        className="form-select"
                        {...register("subCategory")}
                      >
                        <option value="sports">Sports</option>
                        <option value="truck">Truck</option>
                        <option value="regular">Regular</option>
                        <option value="fireTruck">Mini Fire Truck</option>
                        <option value="police">Police</option>
                      </select>
                      {errors.subCategory && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.subCategory.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="Price"
                        {...register("price", {
                          required: "required",
                        })}
                      />
                      {errors.price && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.price.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Rating</label>
                      <select className="form-select" {...register("rating")}>
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                      </select>
                      {errors.rating && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.rating.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        placeholder="Available quantity"
                        {...register("quantity", {
                          required: "required",
                        })}
                      />
                      {errors.quantity && (
                        <p role="alert" className="alert alert-danger my-2 p-2">
                          {errors.quantity.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="mb-3">
                      <label className="form-label">Details</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="details"
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
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AddToys;