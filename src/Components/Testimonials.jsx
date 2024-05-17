import React from "react";
import Slider from './Slider'
const Testimonials = () => {
  return (
    <div className="bg-[#31363F] p-4">
      <div className=" m-16 pb-12 ">
      <h2 className="text-white text-2xl font-bold mb-4 ml-2">Testimonials</h2>
        <p className=" text-xl text-MySalat mt-4 text-justify pb-8 ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
          beatae similique hic nihil alias. Illo aut, veritatis suscipit nemo
          ipsam, laboriosam tenetur, blanditiis minus inventore excepturi
          laborum sit mollitia.
        </p>
     <Slider />
      </div>
    </div>
  );
};
export default Testimonials;