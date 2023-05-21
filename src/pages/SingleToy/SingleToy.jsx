import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SingleToy = () => {
  useTitle("single Toy Details");
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { user } = useContext(AuthContext);
  const { category, rating, details, image, toyName } = loadedData;

  return (
    <div>
      <section className="w-11/12 mx-auto mt-20">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-evenly">
              <div className="md:w-1/2 text-start">
                <img
                  className="w-1/3 text-start object-cover ml-0 rounded-full"
                  src={image}
                  alt={toyName}
                />
              </div>
              <div className="md:w-1/2  md:mt-0 flex flex-col gap-5">
                <div>
                  <div className="flex gap-5">
                    <h2 className="font-bold">Product Name:</h2>
                    <p>{toyName}</p>
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
                    <h2 className="font-bold">Sub-category:</h2>
                    <p>{category}</p>
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
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleToy;
