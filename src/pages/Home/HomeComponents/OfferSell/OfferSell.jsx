import React from "react";

const OfferSell = () => {
  return (
    <section>
      <div className=" rounded-none card w-full mx-auto bg-slate-800 text-neutral-content mt-10">
        <div className="py-20">
          <div className="flex items-center md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-full mt-10">
              <h2 className="text-white font-bold text-xl md:text-2xl ml-10">
                Grab It Now Fast
              </h2>
              <h2 className="text-white font-bold text-3xl md:text-5xl ml-10">
                Grab It Now Fast New Summer Sale Discount Up To 50%
              </h2>
			  <button className="btn btn-outline btn-accent hover:bg-slate-100 mt-5 ml-10">Shop Now !</button>
            </div>

            <div className="md:w-1/2 w-full">
				<img src="https://cdn.shopify.com/s/files/1/0636/3044/2723/files/s2.png?v=1648189071" alt="" />
			</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSell;
