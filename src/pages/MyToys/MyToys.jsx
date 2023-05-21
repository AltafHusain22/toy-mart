import React, { useContext, useEffect, useState } from "react";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("asc"); 

  useEffect(() => {
    fetch(`https://toys-server-altafhusain22.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`https://toys-server-altafhusain22.vercel.app/deleteToy/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((to) => to._id !== id);
              setToys(remaining);
            }
          }
        });
    });
  };

  const handleSort = () => {
    const sortedToys = [...toys].sort((a, b) => {
      if (sortingOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setToys(sortedToys);
    setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <h2 className="text-xl md:text-4xl font-bold text-center py-10">
        My Toys
      </h2>
      <div className="text-center mb-4 mx-auto">
        <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={handleSort}>
          Sort by Price
        </button>
      </div>
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
              <th className="sm:w-auto">Toy Image</th>
              <th className="sm:w-auto">Toy Name </th>
              <th className="sm:w-auto">
                <butto onClick={handleSort}>
                  Price
                </butto>
              </th>
              <th className="sm:w-auto">Rating</th>
              <th className="sm:w-auto">Quantity</th>
              <th className="sm:w-auto">Details</th>
              <th className="sm:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysTable
                key={toy._id}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
