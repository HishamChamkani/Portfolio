import React from 'react'
import Slider from "react-slick";

import Front from '../Assets/Meta.jpg';
import JavaS from '../Assets/Javascript.jpg';
import ByteW from '../Assets/Bytewise.jpg';
import JaduJ from '../Assets/JaduJobs.jpg';
import Fast from '../Assets/Fast Uni.jpg';


function Certifications() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="bg-[#31363F] font-Montserrat pt-16 pb-36 px-12">
      <h2 className="text-white text-2xl font-semibold mb-4 ml-8">Certifications</h2>

      <div className="slider-container w-2/4 ml-52">
      <Slider {...settings}>
        <div>
        <img src={Front} alt="" />
        </div>

        <div>
        <img src={JavaS} alt="" />
        </div>

        <div>
        <img src={ByteW} alt="" />
        </div>

        <div>
        <img src={JaduJ} alt="" />
        </div>

        <div>
        <img src={Fast} alt="" />
        </div>
        
        </Slider>
     </div>
    </div>
  )
}

export default Certifications