import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(()=>{

    Aos.init({
      duration: 1200,
    })

  }, [])
  return (
    <div className="">
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1  data-aos="fade-right" className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Here your Best Quality Toys
              </h1>
              <p data-aos="zoom-in-right" className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>

              <form className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name=""
                      placeholder="Try car toy, toys."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                 
                    <button
                     
                      className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                    >
                      Find Your Toys
                    </button>
                  
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 50k+ users
                </p>

                <div className="flex items-center mt-3">
                  <div className="flex">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.424 7.25545C14.5043 7.44467 14.6439 7.61088 14.8289 7.73166L17.8423 9.50661C18.2702 9.7701 18.4204 10.2976 18.1569 10.7255L15.8567 13.7745C15.6816 14.0206 15.5922 14.3397 15.6077 14.6593L16.051 17.6612C16.1023 18.2869 15.6059 18.8492 14.9802 18.9005L11.9783 19.3438C11.6577 19.3594 11.3386 19.2701 11.0924 19.0949L8.04342 16.7947C7.61557 16.5302 7.08808 16.68 6.82459 17.1078L4.10747 21.1075C3.8358 21.546 4.1093 22.0966 4.54781 22.3678L6.70453 23.609C7.03024 23.7842 7.42639 23.7464 7.69087 23.5233L11.1569 20.7245C11.614 20.3755 12.2656 20.4322 12.6146 20.8893L15.4134 24.3554C15.6102 24.626 15.9941 24.7259 16.282 24.6L20.2823 22.883C20.721 22.6113 21.2716 22.8848 21.5422 23.3225L22.7834 25.4792C22.9586 25.805 22.9209 26.2011 22.6978 26.4656L19.8975 29.4646C19.5484 29.9139 19.6048 30.5653 20.0541 30.9144L23.1031 33.2146C23.5309 33.4791 24.0584 33.3293 24.3219 32.9014L26.9014 29.1881C27.172 28.7506 27.0222 28.2037 26.5847 27.933L23.2755 25.2328C22.8512 24.9681 22.8396 24.3207 23.1031 23.8971L25.9023 20.9161C26.3593 20.567 26.316 19.9155 25.967 19.4585L23.1683 16.4595C22.9287 16.1593 22.9696 15.731 23.2429 15.4697L26.0794 13.1622C26.502 12.7807 26.4915 12.147 26.1099 11.7244L23.4653 9.43741C23.1909 9.16041 23.1595 8.73602 23.3824 8.42242L26.2607 5.42046C26.7084 4.94784 26.5806 4.29665 26.108 3.84894L22.8016 1.06073C22.5562 0.831774 22.1868 0.784051 21.9115 0.940164L18.9483 2.15001C18.5363 2.36515 18.2515 2.79884 18.2515 3.2745V3.2745Z"
                        fill="#FFCC00"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 12C23 18.6274 18.6274 23 12 23C5.37258 23 1 18.6274 1 12C1 5.37258 5.37258 1 12 1C18.6274 1 23 5.37258 23 12Z"
                        stroke="#FFCC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8.4C16.6254 9.16312 17.1631 9.80086 17.6 10.3"
                        stroke="#FFCC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.9 7.6C9.57834 7.26861 10.2971 7.06803 11.0316 7"
                        stroke="#FFCC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.6 15.1C7.75941 14.6762 8.03397 14.2993 8.38699 14"
                        stroke="#FFCC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.1 16C14.6762 15.8406 14.2993 15.566 14 15.213C13.7007 14.86 13.4262 14.4825 13.2671 14.0598"
                        stroke="#FFCC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="ml-2 text-lg font-normal text-white">4.8/5</p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-0">
                <svg
                  class="blur-3xl filter opacity-70"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                </svg>
              </div>

              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-50"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img data-aos="fade-left"
                className="relative w-full  mx-auto"
                src="https://i.ibb.co/F47XBZ8/pexels-inline-media-5229524-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
