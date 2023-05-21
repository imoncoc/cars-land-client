import React, { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitleHook from '../../../CustomHook/TitleHook';

const MyToys = () => {
  useTitleHook("My Toys");
  

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState();
    const navigate = useNavigate();
    console.log(myToys)
    const [selectedOptions, setSelectedOptions] = useState('descending')
    const uri = `https://cars-land-assignment-11-imoncoc.vercel.app/getEmail?email=${user?.email}&type=${selectedOptions}`;

    // const {
    //   _id,
    //   name,
    //   details,
    //   photoUrl,
    //   price,
    //   quantity,
    //   rating,
    //   sellerEmail,
    //   sellerName,
    //   subCategory,
    // } = toy;

    // useEffect(()=> {
    //     fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/allToys/${user?.email}`)
    //     .then((res) => res.json())
    //     .then((data) => setMyToys(data))
    //     .catch((error) => console.log(error))
    // }, [])

    useEffect(() => {
      fetch(uri, {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setMyToys(data)
        }
        else{
          navigate('/')
        }
      })
    }, [uri, navigate, selectedOptions])

     const handleDeleteToy = (_id) => {
       console.log(_id);
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           fetch(`https://cars-land-assignment-11-imoncoc.vercel.app/toy/${_id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               if (data.deletedCount > 0) {
                 Swal.fire(
                   "Deleted!",
                   "Your Toys has been deleted.",
                   "success"
                 );
                 const reamingToys = myToys.filter(
                   (myToy) => myToy._id !== _id
                 );
                 setMyToys(reamingToys);
               }
             });
         }
       });
     };

     const handleSelectChange = (event) => {
       setSelectedOptions(event.target.value);
       console.log(event.target.value);
     };


    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">My Toys</h1>
              <h1 className="section-title--special">cars collection</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end mt-5">
              <select
                className="form-select text-center"
                style={{ width: "9rem" }}
                value={selectedOptions}
                onChange={handleSelectChange}
              >
                <option disabled value="">
                  Sort By Price
                </option>
                <option value="descending">High to Low</option>
                <option value="ascending">Low to High</option>
              </select>
            </div>
            <div className="col-12 mx-auto my-5 table-responsive">
              <table className="table  shadow table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">price</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myToys &&
                    myToys.map((toy, i) => (
                      <tr key={toy._id}>
                        <td>{i+1}.</td>
                        <th scope="row">
                          <img
                            className="table-img"
                            src={toy.photoUrl}
                            alt=""
                          />
                        </th>
                        <td>{toy.name}</td>
                        <td>{toy.subCategory} Toys</td>
                        <td>${toy.price} </td>
                        <td className="text-center">
                          <Link to={`/update-toys/${toy._id}`}>
                            <button className="btn btn-secondary me-2">
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteToy(toy._id)}
                          >
                            <FontAwesomeIcon icon={faX} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
};

export default MyToys;