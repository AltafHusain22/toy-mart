import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
	useTitle('All Toys')
  const allToys = useLoaderData();

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-10 mx-3 md:mx-10 ">
      {allToys.map((toy) => (
        <AllToysCard key={toy._id} toy={toy}></AllToysCard>
      ))}
    </div>
  );
};

export default AllToys;
