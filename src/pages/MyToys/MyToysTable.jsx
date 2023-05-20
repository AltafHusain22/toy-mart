import React, { useEffect, useState } from "react";


const MyToysTable = ({ toy , handleDeleteToy }) => {
  const { toyName, image, price, rating, quantity, details, _id } = toy;

  const handleEditToy =(id)=>{
	console.log('edit', id )
  }

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
        <button onClick={()=>handleEditToy(_id)} className="btn btn-ghost ">Edit</button>
        <button onClick={() => handleDeleteToy(_id)} className="btn btn-ghost ">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysTable;
