import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SingleToyDetails = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id, name, price, rating, details, picture } = loadedData;

  return (
    <section className="w-11/12 mx-auto mt-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="md:w-1/2 text-start">
              <h2 className="font-bold text-4xl mb-10">Product Info</h2>
              <img className="w-2/3 text-start object-cover ml-0" src={picture} alt={name} />
              <h2 className="font-bold text-xl">Product Name: {name}</h2>
              <h2 className="font-bold">Product Details:</h2>
              <p>{details}</p>
              <div className="flex gap-5 items-center mt-4">
                <h2 className="font-bold">Rating:</h2>
                <p>{rating}</p>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h2 className="font-bold text-4xl mb-10">User Info</h2>
              <div className=" flex flex-col-reverse gap-5">
                <div className="flex gap-5">
                  <h2 className="font-bold">User Name:</h2>
                  <p>{user?.displayName}</p>
                </div>
                <div className="flex gap-5">
                  <h2 className="font-bold">User Email:</h2>
                  <p>{user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleToyDetails;
