import React, { useState } from 'react';
import './Register.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      reset,
    } = useForm();

    const onSubmit = (data) => {
      const { email, password, name, confirmPassword } = data;
      console.log(data);
    };


    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const password = watch("password");
    const confirmPassword = watch("confirmPassword");



    return (
      <section className="login-bg">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 p-5 mx-auto login rounded my-5 bg-white">
              <h2 className="text-center mb-2 fw-semibold opacity-75">
                Register
              </h2>
              <p className="text-center text-muted">
                It's free and takes a minute
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
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
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", {
                      required: "required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p role="alert" className="alert alert-danger my-2 p-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Photo Url</label>
                  <input
                    type="text"
                    className="form-control"
                    id="photoUrl"
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
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      aria-label="Text input with checkbox"
                      {...register("password", {
                        required: "required",
                        minLength: {
                          value: 8,
                          message: "min length is 8",
                        },
                        pattern: {
                          value: passwordRegex,
                          message:
                            "Password must contain at least one uppercase letter and lowercase, one number, and one special character",
                        },
                      })}
                    />
                    <div className="input-group-text bg-white border-start-0">
                      {/* <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value="password"
                      aria-label="Checkbox for following text input"
                      onClick={() => setShowPassword(!showPassword)}
                    /> */}
                      {showPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          icon={faEyeSlash}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {errors.password && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {errors.password.message}
                  </p>
                )}

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group mb-3">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      aria-label="Text input with checkbox"
                      {...register("confirmPassword", {
                        required: "required",
                      })}
                    />
                    <div className="input-group-text bg-white border-start-0">
                      {/* <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value="password"
                      aria-label="Checkbox for following text input"
                      onClick={() => setShowPassword(!showPassword)}
                    /> */}
                      {showConfirmPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      ) : (
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          icon={faEyeSlash}
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                {password !== confirmPassword && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {"Password do not match"}
                  </p>
                )}

                <div className="">
                  <p className="">
                    Already a account?{" "}
                    <Link
                      to="/login"
                      className="link-opacity-75-hover text-info"
                    >
                      Please Login
                    </Link>
                  </p>
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

export default Register;