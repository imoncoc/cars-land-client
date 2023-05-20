import React, { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState();
    console.log(myToys)

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

    useEffect(()=> {
        fetch(`http://localhost:5000/allToys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.log(error))
    }, [])

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
           fetch(`http://localhost:5000/toy/${_id}`, {
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


    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto my-5">
            <table className="table shadow table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">PhotoUrl</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myToys &&
                  myToys.map((toy) => (
                    <tr key={toy._id}>
                      <th scope="row">
                        <img className="table-img" src={toy.photoUrl} alt="" />
                      </th>
                      <td>{toy.name}</td>
                      <td>{toy.subCategory} Toys</td>
                      <td className="text-center">
                        <Link to={`/update-toys/${toy._id}`}>
                          <button className="btn btn-secondary me-2">
                            <FontAwesomeIcon icon={faPen} />
                          </button>
                        </Link>
                        <button className="btn btn-danger" onClick={()=> handleDeleteToy(toy._id)}>
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
    );
};

export default MyToys;