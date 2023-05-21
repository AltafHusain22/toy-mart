import React, { useContext, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthProvider";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Racer = ({ racers }) => {
  const { name, price, picture, rating, id } = racers;
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire("Sorry!", "You have to log in first to view details !", "error");
      return <Navigate  state={{from:location}} replace></Navigate>;
      
    }
   
  };
  return (
    <div className="card md:h-4/5 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-fit" src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-between mt-5 text-center">
          <p className="mt-3 font-bold">Ratings: {rating}</p>
          <p className="mt-3 font-bold">Price: ${price}</p>
        </div>

        <Link to={`/singleToyDetails/${id}`}
          onClick={handleViewDetails}
          
          className="btn btn-primary bg-black text-white mt-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Racer;
