import React from "react";

const Racer = ({ racers }) => {
  const { name, price, picture, rating, details } = racers;
  return (
   
      <div className="card md:h-4/5 bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2 h-fit" src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-between mt-5">
             <p className="mt-3 font-bold"> Ratings : {rating}</p>
             <p className="mt-3 font-bold"> Price : ${price}</p>
            <button className="btn btn-primary bg-black text-white mt-5">View Details</button>
          </div>
        </div>
      </div>
 
  );
};

export default Racer;
