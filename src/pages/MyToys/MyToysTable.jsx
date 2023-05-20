import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy, handleDeleteToy, handleEditToy }) => {
  const { toyName, image, price, rating, quantity, details, _id } = toy;
  return (
    <tr>
      <th className="sm:w-auto">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td className="sm:w-auto">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt={toyName} />
          </div>
        </div>
      </td>
      <td className="sm:w-auto">{toyName}</td>
      <td className="sm:w-auto">{price}</td>
      <td className="sm:w-auto">{rating}</td>
      <td className="sm:w-auto">{quantity}</td>
      <td className="sm:w-auto">{details.slice(1, 50)} ....</td>

      <th className="sm:w-auto">
        <Link to={`/updateToy/${_id}`}>
          <button onClick={() => handleEditToy(_id)} className="btn btn-ghost ">
            Edit
          </button>
        </Link>
        <button onClick={() => handleDeleteToy(_id)} className="btn btn-ghost ">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysTable;
