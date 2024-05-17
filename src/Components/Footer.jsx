import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className='bg-[#31363F] font-Montserrat text-center pb-8'>
            <h1 className='text-white text-2xl'>Let us Create Awesome Products!</h1>
            <p className='text-white'>I am always open to discussing your project, 
            improving your online presence, or helping with <br/> Your website design and 
            converting challenges.
            </p>
          </div>
        <footer className="bg-[#222831] py-6 font-Montserrat border-t">
        <p className='container mx-auto text-center text-xl text-white'>Contact Me</p>
        <div className="container mx-auto text-center text-lg text-white my-8 flex justify-center">
        <a href="#" className="mx-4 flex items-center">
          <span className="mr-2">GitHub</span>
          <FaSquareArrowUpRight />
        </a>
        <a href="#" className="mx-4 flex items-center">
          <span className="mr-2">LinkedIn</span>
          <FaSquareArrowUpRight />
        </a>
        <a href="#" className="mx-4 flex items-center">
          <span className="mr-2">Facebook</span>
          <FaSquareArrowUpRight />
        </a>
        <a href="#" className="mx-4 flex items-center">
          <span className="mr-2">Instagram</span>
          <FaSquareArrowUpRight />
        </a>
      </div>
        <hr className=''></hr>
        <small className="block pl-8 mt-6 text-white">&copy; 2024 Hisham Khan. All rights reserved.</small>
    </footer>
  </div>
  )
}

export default Footer