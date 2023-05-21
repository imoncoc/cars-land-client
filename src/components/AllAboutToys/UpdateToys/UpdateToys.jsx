import React, { useContext, useEffect, useState } from 'react';
import './UpdateToys.css'
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProviders';
import useTitleHook from '../../../CustomHook/TitleHook';

const UpdateToys = () => {
  useTitleHook("Update Toys");
  const { user, setPreloader } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state === "idle") {
    setPreloader(false);
  }

    const [toys, SetToys] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    console.log(from)
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

    const onSubmit = (updateToys) => {
      const { email, password } = updateToys;
      console.log(updateToys);
      fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/toy/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateToys),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0 || data.acknowledged === true) {
            Swal.fire({
              title: "Success!",
              text: "Toys Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            navigate(from, { replace: true });
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Something is wrong",
            icon: "error",
          });
        });
      }


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
                        defaultValue={name}
                        placeholder="Enter Your Name"
                        {...register("name")}
                      />
                    </div>
                  </div>
                  <div
                    className={`col-12 col-md-6 mx-auto ${
                      user?.displayName ? "d-none" : ""
                    }`}
                  >
                    <div className="mb-3">
                      <label className="form-label">Seller Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sellerName"
                        defaultValue={sellerName}
                        placeholder="Seller Name"
                        {...register("sellerName", {
                          required: "required",
                        })}
                      />
                    </div>
                  </div>
                  <div
                    className={`col-12 col-md-6 mx-auto ${
                      user?.email ? "d-none" : ""
                    }`}
                  >
                    <div className="mb-3">
                      <label className="form-label">Seller email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="sellerEmail"
                        defaultValue={sellerEmail}
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
                        defaultValue={photoUrl}
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
                        <option defaultChecked={subCategory}>
                          {subCategory}
                        </option>
                        <option>Sports</option>
                        <option value="truck">Truck</option>
                        <option value="regular">Regular</option>
                        <option value="mini fire Truck">Mini Fire Truck</option>
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
                        defaultValue={price}
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
                        defaultValue={quantity}
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
                        defaultValue={details}
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