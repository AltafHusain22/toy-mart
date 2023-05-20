import React, { useEffect, useState } from "react";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys)
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
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
      fetch(`http://localhost:5000/deleteToy/${id}`, {
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
			  const remaining = toys.filter(to=> to._id !== id )
			  setToys(remaining)
            }
          }
        });
    });
  };

  return (
    <div>
		<h2 className="text-xl md:text-4xl font-bold text-center py-10">My Toys</h2>
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
              <th className="sm:w-auto">Price</th>
              <th className="sm:w-auto">Rating</th>
              <th className="sm:w-auto">Quantity</th>
              <th className="sm:w-auto">Details</th>
              <th className="sm:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysTable key={toy._id} toy={toy} handleDeleteToy={handleDeleteToy}></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
