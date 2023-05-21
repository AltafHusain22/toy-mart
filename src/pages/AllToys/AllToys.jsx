import React, { useEffect, useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../hooks/useTitle";
import AllToysTable from "./AllToysTable";


const AllToys = () => {
  
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
      });
  }, []);


  return (
    <div>
      <h2 className="text-xl md:text-4xl font-bold text-center py-10">
        All Toys
      </h2>
      <div className="overflow-x-auto w-full mt-10 b">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-black ">
            <tr>
              <th className="sm:w-auto ">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="sm:w-auto">Seller Name</th>
              <th className="sm:w-auto">Toy Name </th>
              <th className="sm:w-auto">Price</th>
              <th className="sm:w-auto">Sub-Category</th>
              <th className="sm:w-auto">Quantity</th>
              <th className="sm:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              
              <AllToysTable
                key={toy._id}
                toy={toy}
              ></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

