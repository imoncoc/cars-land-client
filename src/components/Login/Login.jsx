import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle, signInWithGithub } =
      useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();


    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);

        signIn(email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire(
              "Success!",
              "Successfully Login into account!",
              "success"
            );
            reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            // console.log(error)
            Swal.fire("Oops...!", `${error.message}`, "error");
          });
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          // console.log(loggedUser);
          Swal.fire("Success!", "Successfully Login with Google!", "success");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          // console.log(error)
          Swal.fire("Oops...!", `${error.message}`, "error");
        });
    };


    const handleGithubSignIn = () => {
      signInWithGithub()
        .then((result) => {
          const loggedUser = result.user;
          // console.log(loggedUser)
          Swal.fire("Success!", "Successfully Login with Github!", "success");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          // console.log(error);
          Swal.fire("Oops...!", `${error.message}`, "error");
        });
    };




    return (
      <section className="login-bg">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 p-5 mx-auto login rounded my-5 bg-white">
              <h2 className="text-center mb-2 fw-semibold opacity-75">Login</h2>
              <p className="text-center text-muted">Quick and Easy Login</p>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <label className="form-label">Password</label>
                  <div className="input-group mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      aria-label="Text input with checkbox"
                      {...register("password", {
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
                <div className="">
                  <p className="">
                    New to this website?{" "}
                    <Link
                      to="/register"
                      className="link-opacity-75-hover text-info"
                    >
                      Please Register
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn login-btn w-100 fw-bold">
                    Submit
                  </button>
                </div>
              </form>

              <div className="or-divider">
                <span className="text-muted">Or login with</span>
              </div>

              <div className="d-flex justify-content-center">
                <div className="mx-3 bg-icon bg-danger rounded-circle">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faGoogle}
                    onClick={handleGoogleSignIn}
                    className="text-white"
                  />
                </div>
                <div className="bg-icon bg-dark rounded-circle">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faGithub}
                    onClick={handleGoogleSignIn}
                    className="text-white"
                  />
                </div>
              </div>

              {/* Google Login */}
              {/* <div className="my-3">
              <div
                className="google-login d-flex align-items-center justify-content-center"
                onClick={handleGoogleSignIn}
              >
                <FontAwesomeIcon className="google-icon" icon={faGoogle} />
                <p className="align-self-center mx-auto my-2">
                  Login With Google
                </p>
              </div>
              <div
                className="github-login d-flex align-items-center justify-content-center mt-2"
                onClick={handleGithubSignIn}
              >
                <FontAwesomeIcon
                  className="github-icon"
                  onClick={handleGoogleSignIn}
                  icon={faGithub}
                />
                <p className="align-self-center mx-auto my-2">
                  Login With Github
                </p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;