import React from "react";
import { Link } from "react-router-dom";

const Racer = ({ racers }) => {
  const { name, price, picture, rating, details , id} = racers;
  console.log(id)

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
        <Link to={`/singleToyDetails/${id}`} key={name}>
          <button className="btn btn-primary bg-black text-white mt-5">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Racer;

