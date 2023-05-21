import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
  useTitle("AddToy");
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState([]);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  const options = [
    { value: "Super Racer", label: "Super Racer" },
    { value: "Turbo Speedster", label: "Turbo Speedster" },
    { value: "Nitro Blaze", label: "Nitro Blaze" },
  ];

  const onSubmit = (data) => {
    data.category = selectedOption.map((option) => option.value);
    fetch(`https://toys-server-altafhusain22.vercel.app/addtoy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Great!", "Added A Toy Successfylly !", "success");
          form.reset();
        }
      });
  };

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Add a Toy
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Add a Toy Very Easily
              </h3>

              <form className="mt-14" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Toy Name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("toyName", { required: true })}
                        type="text"
                        name="toyName"
                        placeholder="Enter toy name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Image URL
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("image", { required: true })}
                        type="text"
                        name="image"
                        placeholder="Enter image URL"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Seller Name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("sellerName", { required: true })}
                        type="text"
                        name="sellerName"
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Email
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Price
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("price", { required: true })}
                        type="text"
                        name="price"
                        placeholder="Add Price"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Add Rating
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        {...register("rating", { required: true })}
                        type="text"
                        name="rating"
                        placeholder="Add Rating"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Available Quantity
                    </label>
                    <div className="mt-2.5 relative w-full">
                      <input
                        {...register("quantity", { required: true })}
                        type="text"
                        name="quantity"
                        placeholder="Add Available Quantity"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Add Category
                    </label>
                    <div className="mt-2.5 relative w-full">
                      <Controller
                        className="block w-full px-4 py-4 text-black "
                        name="select"
                        control={control}
                        render={({ field }) => (
                          <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      Product Details
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        {...register("details", { required: true })}
                        name="details"
                        placeholder="Product descriptions"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md focus:outline-none hover:bg-slate-700 focus:bg-slate-700"
                    >
                      Add a Toy
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToys;
