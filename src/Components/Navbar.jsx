import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-Inter sticky top-0 w-full h-20 py-4 shadow-md z-[100] bg-nav bg-gradient-to-t from-[#124C81] to-[#000000]">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="text-white font-semibold rounded-full bg-slate-500 px-6 py-2 md:hidden"
          onClick={toggleMenu}
        >
          {/* Hamburger menu icon */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div>
          {/* Logo */}
          <button className="text-white font-semibold rounded-full bg-slate-500 px-6 py-2 hidden md:block">
            LOGO
          </button>
        </div>

        {/* Menu items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:ml-64`}
        >
          <li>
            <Link to="/" className="text-white font-semibold mx-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-semibold mx-4">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-white font-semibold mx-4"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white font-semibold mx-4">
              Projects
            </Link>
          </li>
        </ul>

        {/* Additional button */}
        <Link to="/skills">
          <button className="text-black rounded-full bg-white font-bold px-6 py-2 ml-8 hidden md:block">
            Skills
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
