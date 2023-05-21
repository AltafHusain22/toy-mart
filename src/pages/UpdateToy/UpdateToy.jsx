import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle('Update Toy')
  const loadedData = useLoaderData();
  const { toyName, image, price, rating, quantity, details, _id, category } =
    loadedData;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/editToy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Great!", "Updated Toy Successfully!", "success").then(
            () => {
              reset(); // Reset the form after success message
            }
          );
        }
      });
  };
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Update Toy
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Update Toy Data
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
                        defaultValue={toyName}
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
                        defaultValue={image}
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
                        defaultValue={price}
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
                        defaultValue={rating}
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
                        defaultValue={quantity}
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Update Category
                    </label>
                    <div className="mt-2.5 relative w-full">
                      <input
                        {...register("category", { required: true })}
                        type="text"
                        name="category"
                        defaultValue={category}
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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
                        defaultValue={details}
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
                      Update Toy Details
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

export default UpdateToy;
