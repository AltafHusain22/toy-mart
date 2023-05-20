import React from "react";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbDiscountOff } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <section>
      <h2 className="font-bold md:text-5xl text-4xl mb-10 text-center mt-10">
        Why Choose us
      </h2>
      <div className="card w-4/5 mx-auto bg-slate-800 text-neutral-content mt-10">
        <div className="card-body grid md:grid-cols-3 gap-5 py-20">
          <div className="flex gap-4 ">
            <MdSentimentVerySatisfied className="text-6xl"></MdSentimentVerySatisfied>
            <div>
              <h2 className="text-white font-bold md:text-3xl sm:text-xl text-xl">
                100% Satisfaction
              </h2>
              <p className="text-white">If You Are Unable</p>
            </div>
          </div>

          <div className="flex gap-4 ">
              <FaRegMoneyBillAlt className="text-6xl"></FaRegMoneyBillAlt>
            <div>
              <h2 className="text-white font-bold md:text-3xl sm:text-xl text-xl">
                Money Returns
              </h2>
              <p className="text-white">Guarantee In 7 Days</p>
            </div>
          </div>

          <div className="flex gap-4 ">
			<TbDiscountOff className="text-6xl"></TbDiscountOff>
            <div>
              <h2 className="text-white font-bold md:text-3xl text-xl sm:text-xl">
                Member Discount
              </h2>
              <p className="text-white">Customer’s First Order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
