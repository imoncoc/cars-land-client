import { faCar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import "./AllToys.css";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import SingleToy from "../SingleToy/SingleToy";
import useTitleHook from "../../../CustomHook/TitleHook";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import LoaderSpinner from "../../../shared/LoaderSpinner/LoaderSpinner";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    <LoaderSpinner></LoaderSpinner>;
  }

  // const allToys = useLoaderData();
  useTitleHook("All Toys");
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("allToys");

  // useEffect(() => {
  //   fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => setAllToys(data))
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(allToys);

  const handleSearch = () => {
    //  console.log(searchText)
    fetch(
      `https://cars-land-assignment-11-imoncoc.vercel.app/getToysByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data))
      .catch((error) => console.log(error));
  };

  const handleNavigation = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "You Have to Login First to see details!",
      });
    }
  };

  //  const handleInputChange = (e) => {
  //    setSearchText(e.target.value);
  //  };

  // For Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [totalToys, setTotalToys] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  // console.log(currentPage);
  // console.log(totalToys);
  // console.log(totalPages);
  //  console.log(itemsPerPage)
  const pageNumbers = [...Array(totalPages).keys()];
  // console.log(pageNumbers);

  useEffect(() => {
    fetch("https://cars-land-assignment-11-imoncoc.vercel.app/totalToys")
      .then((res) => res.json())
      .then((data) => {
        setTotalToys(data.totalProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://cars-land-assignment-11-imoncoc.vercel.app/totalAllToys?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      })
      .catch((err) => console.log(err));
  }, [currentPage, itemsPerPage]);

  const options = [5, 10, 15];
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (allToys === undefined || allToys.length == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h2 className="text-center text-info">User Has No Data To Show!</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="all-toys-bg" id="">
        <div className="container-fluid">
          <div className="row all-toys-height-max align-items-center">
            <div className="col col-md-9 ms-auto text-end pe-5 my-5">
              <h5 className="title-heading d-inline-block p-2 text-uppercase">
                the all new car toys
              </h5>
              <h2 className="text-uppercase my-2 title text-blue">
                1955 GFCC TOYS
              </h2>
              <h3 className="text-uppercase">Speedster-Coupe Alloy</h3>
              <h6 className="text-capitalize">starts Price</h6>
              <h2>
                $29.99
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
          <div className="col-10 mx-auto d-flex justify-content-center">
            <div className={`input-group w-75 allToys-search`}>
              <input
                type="text"
                className="form-control allToys-search-input"
                placeholder="Search by Name, Seller Name or Sub-Category."
                aria-label="Search"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                aria-describedby="search-icon"
              />
              <span
                className="input-group-text allToys-search-icon"
                id="search-icon"
                onClick={handleSearch}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
          </div>

          <div className="col-11 mx-auto my-5 table-responsive">
            <table className="table  shadow table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Photo</th>
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
                  allToys.map((toy, i) => (
                    <tr key={toy._id}>
                      <td>{i + 1 + (currentPage * itemsPerPage)}.</td>
                      <th scope="row">
                        <img className="table-img" src={toy?.photoUrl} alt="" />
                      </th>
                      <td>{toy?.name}</td>
                      <td>{toy?.sellerName}</td>
                      <td>{toy?.subCategory} Toys</td>
                      <td>{toy?.quantity}</td>
                      <td>${toy?.price}</td>
                      <td className="text-center">
                        <Link
                          to={`/single-toy/${toy._id}`}
                          onClick={handleNavigation}
                        >
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
      {/* <h2 className="my-5">Pagination</h2> */}

      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li
                  className={`page-item ${currentPage === 0 ? "disabled" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  <a className="page-link" onClick={handlePreviousClick}>
                    Previous
                  </a>
                </li>
                {pageNumbers &&
                  pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`page-item ${
                        currentPage === number ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(number)}
                    >
                      <a className="page-link" href="#">
                        {number + 1}
                      </a>
                    </li>
                  ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages - 1 ? "disabled" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <a className="page-link" onClick={handleNextClick}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <select
                className="form-select"
                value={itemsPerPage}
                onChange={handleSelectChange}
                aria-label="Default select example"
              >
                <option disabled>Items per page</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AllToys;
