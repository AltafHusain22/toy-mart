import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SingleToyDetails = () => {
  useTitle("single Toy Details");
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id, name, price, rating, details, picture } = loadedData;

  return (
    <div>
      <section className="w-11/12 mx-auto mt-20">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-evenly">
              <div className="md:w-1/2 text-start">
                <img
                  className="w-1/3 text-start object-cover ml-0 rounded-full"
                  src={picture}
                  alt={name}
                />
              </div>
              <div className="md:w-1/2  md:mt-0 flex flex-col gap-5">
                <div>
                  <div className="flex gap-5">
                    <h2 className="font-bold">Product Name:</h2>
                    <p>{name}</p>
                  </div>
                  <div className="flex gap-5">
                    <h2 className="font-bold">Product Price:</h2>
                    <p>{price}</p>
                  </div>
                  <div className="flex gap-5">
                    <h2 className="font-bold">Product Details:</h2>
                    <p>{details}</p>
                  </div>
                  <div className="flex gap-5">
                    <h2 className="font-bold">Rating:</h2>
                    <p>{rating}</p>
                  </div>

                  <div className="flex gap-5">
                    <h2 className="font-bold">User Name:</h2>
                    <p>{user?.displayName}</p>
                  </div>
                  <div className="flex gap-5 ">
                    <h2 className="font-bold">User Email:</h2>
                    <p className="">{user?.email}</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleToyDetails;
