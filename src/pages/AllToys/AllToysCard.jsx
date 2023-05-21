import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../context/AuthProvider";

const AllToysCard = ({ toy }) => {
  const { toyName, sellerName, image, price, rating, category, quantity, _id } =
    toy;

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleViewDetails = () => {
    if (!user) {
      Swal.fire(
        "Sorry!",
        "You have to log in first to view details !",
        "error"
      );
      navigate("/login", { state: { from } });
    } else {
      navigate(`/singleToyDetails/${_id}`);
    }
  };

  return (
    <div className="card md:h-4/5 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-fit" src={image} alt={toyName} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between mt-5 text-center">
          <span>
            <h2 className="card-title">{toyName}</h2>
			<p>(Toy Name)</p>
          </span>
          <span>
            <h2 className="card-title">{sellerName}</h2>
			<p>(Seller Name)</p>
          </span>
        </div>
        <div className="card-actions justify-between mt-5 text-center">
          <p className="mt-3 font-bold">Ratings: {rating}</p>
          <p className="mt-3 font-bold">Price: ${price}</p>
        </div>

        <button
          onClick={handleViewDetails}
          className="btn btn-primary bg-black text-white mt-5"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllToysCard;
