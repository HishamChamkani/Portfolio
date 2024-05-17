import React from "react";
import Logo from "../logo.png";
import Green from "../green.png";
import White from "../white.png"
import Jadu from "../jadu.png"


const Experience = () => {
  return (
    <div className="bg-[#31363F] font-Montserrat pt-16 pb-36 px-12">
      <h2 className="text-white text-2xl font-semibold mb-4 ml-8">Experience</h2>
      <div className="flex mt-10 ml-8">
        <div className="flex items-center">
          <img
            src={Green}
            alt="Profile Photo"
            className="h-12 w-32"
          />
          <div className="ml-12 text-MySalat font-Montserrat">
            <h1 className="text-white text-2xl">AtomCamp</h1>
            <h2 className="text-xl">Full Stack Web Developer</h2>
            <p>2024</p>
          </div>
        </div>
        <div className="mt-8 ml-48"></div>
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Profile Photo"
            className="h-28 w-28 rounded-full"
          />
          <div className="ml-12 text-MySalat font-Montserrat">
            <h1 className="text-white text-2xl">Unsere Kinder</h1>
            <h2 className="text-xl">Junior Software Developer</h2>
            <p>2022 - 2023</p>
          </div>
        </div>
      </div>

      <div className="flex mt-10 ml-8">
        <div className="flex items-center">
          <img
            src={White}
            alt="Profile Photo"
            className="h-8 w-32"
          />
          <div className="ml-12 text-MySalat font-Montserrat">
            <h1 className="text-white text-2xl">Bytewise Limited</h1>
            <h2 className="text-xl">Front-End Developer</h2>
            <p>2023</p>
          </div>
        </div>
        <div className="mt-8 ml-48"></div>
        <div className="flex items-center">
          <img
            src={Jadu}
            alt="Profile Photo"
            className="h-12 w-32 ml-8"
          />
          <div className="ml-12 text-MySalat font-Montserrat">
            <h1 className="text-white text-2xl">JaduJobs</h1>
            <h2 className="text-xl">Intern Front-End Web Developer</h2>
            <p>2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
