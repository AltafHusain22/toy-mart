import React, { useEffect, useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../hooks/useTitle";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  useTitle("All Toys");
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toys-server-altafhusain22.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  useEffect(() => {
    const updatedFilteredToys = toys.filter((toy) => {
      const name = toy.toyName || "";
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredToys(updatedFilteredToys);
  }, [toys, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const displayedToys = filteredToys.slice(0, limit);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="mt-4 text-center">
          <input
            type="text"
            placeholder="Search by Toy Name"
            className="border rounded px-4 py-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="my-4 text-right">
          <label htmlFor="limitSelect" className="mr-2">
            Show:
          </label>
          <select
            id="limitSelect"
            className="border rounded px-4 py-2"
            value={limit}
            onChange={handleLimitChange}
          >
            <option value={5}>5</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedToys.map((toy) => (
              <AllToysTable key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
