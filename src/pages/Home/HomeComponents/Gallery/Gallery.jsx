import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [galleries, setGallery] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/gallery`)
      .then((res) => res.json())
      .then((data) => setGallery(data));

      Aos.init({
        duration: 1200,
      })
  }, []);



  return (
    <section className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 md:mb-12">
      <h2 className="font-bold md:text-5xl text-4xl mb-10 text-center mt-10">
        Products Gallery
      </h2>
      <div className="grid md:grid-cols-4 gap-5">
        {galleries.map((gallery) => (
          <>

            <div className="shadow rounded-md ">
              <img data-aos="fade-up"  className="w-1/2 mx-auto" src={gallery.img} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
