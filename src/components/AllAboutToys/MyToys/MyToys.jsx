import React, { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faX } from '@fortawesome/free-solid-svg-icons';

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
                        <button className="btn btn-secondary me-2">
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="btn btn-danger">
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