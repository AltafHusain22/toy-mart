import React from "react";
import { Link, Router } from "react-router-dom";

const AllToysTable = ({ toy }) => {
  const { toyName, rating, quantity, _id, sellerName, category } = toy;

  return (
    <tr>
      <th className="sm:w-auto">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>

      <td className="sm:w-auto">{sellerName}</td>
      <td className="sm:w-auto">{toyName}</td>
      <td className="sm:w-auto">{rating}</td>
      <td className="sm:w-auto">{category}</td>
      <td className="sm:w-auto">{quantity}</td>
      <th className="sm:w-auto">
        <Link to={`/singleToy/${_id}`}>
        <button
          className="btn btn-primary bg-black text-white mt-5"
        >
          View Details
        </button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysTable;
