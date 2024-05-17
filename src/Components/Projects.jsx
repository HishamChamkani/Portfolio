import React from "react";
import Slider from "react-slick";
import Weather from "../Weather.png";
import Counter from "../Counter.png";
import Price from "../Pricing.png";

function Projects() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#31363F] font-Montserrat pt-16 pb-36 px-12">
      <h2 className="text-white text-2xl font-semibold mb-4 ml-8">Projects</h2>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Weather} alt="" />
            <a href="https://hishamweatherapp.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Counter} alt="" />
            <a href="https://counterapp-weld-eight.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Weather} alt="" />
            <a href="https://hishamweatherapp.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Price} alt="" />
            <a href="https://pricing-nu-five.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Counter} alt="" />
            <a href="https://counterapp-weld-eight.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
          <div className="slider-item bg-MySalat h-48 m-4 flex flex-row">
            <img src={Weather} alt="" />
            <a href="https://hishamweatherapp.vercel.app/" target="_blank">
            <button className="bg-MyDark text-white text-lg px-6 mt-2 block mx-auto">
              Live Link
            </button>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
