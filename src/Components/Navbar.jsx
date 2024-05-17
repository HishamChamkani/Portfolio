import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="font-Inter sticky top-0 w-full h-16 py-4 shadow-md z-[100] bg-[#222831] overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-white font-semibold text-lg">
          <Link to="/" onClick={closeMenu}>
            LOGO
          </Link>
        </div>

        {/* Hamburger Menu for Mobile Screens */}
        <div className="md:hidden">
          <button
            className="text-white rounded-full bg-slate-500 px-3 py-2"
            onClick={toggleMenu}
          >
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
        </div>

        {/* Sidebar Menu for Mobile Screens */}
        <div
          ref={sidebarRef}
          className={`fixed inset-0 bg-[#222831] z-[101] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform md:hidden`}
        >
          <div className="flex flex-col items-center pt-24 space-y-4 w-full h-full">
            <Link to="/" className="text-white font-semibold" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="text-white font-semibold" onClick={closeMenu}>
              About
            </Link>
            <Link to="/experience" className="text-white font-semibold" onClick={closeMenu}>
              Experience
            </Link>
            <Link to="/projects" className="text-white font-semibold" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/certifications" className="text-white font-semibold" onClick={closeMenu}>
              Certifications
            </Link>
            <Link to="/testimonials" className="text-white font-semibold" onClick={closeMenu}>
              Testimonials
            </Link>
            <Link to="/skills">
              <button className="text-white rounded-full bg-gray-800 font-bold px-6 py-2 mt-4" onClick={closeMenu}>
                Skills
              </button>
            </Link>
          </div>
        </div>

        {/* Menu items for Large Screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white font-semibold">
            Home
          </Link>
          <Link to="/about" className="text-white font-semibold">
            About
          </Link>
          <Link to="/experience" className="text-white font-semibold">
            Experience
          </Link>
          <Link to="/projects" className="text-white font-semibold">
            Projects
          </Link>
          <Link to="/certifications" className="text-white font-semibold">
            Certifications
          </Link>
          <Link to="/testimonials" className="text-white font-semibold">
            Testimonials
          </Link>
          <Link to="/skills">
            <button className="text-white rounded-full bg-gray-800 font-bold px-6 py-2">
              Skills
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





























// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="font-Inter sticky top-0 w-full h-20 py-4 shadow-md z-[100] bg-[#222831]">
//       <div className="container mx-auto flex justify-between items-center">
//         <button
//           className="text-white font-semibold rounded-full bg-slate-500 px-6 py-2 md:hidden"
//           onClick={toggleMenu}
//         >
//           {/* Hamburger menu icon */}
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         <div>
//         <Link to="/">
//           <button className="text-white font-semibold rounded-full  px-6 py-2 hidden md:block">
//             LOGO
//           </button>
//           </Link>
//         </div>

//         {/* Menu items */}
//         <ul
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:space-x-4 md:ml-64`}
//         >
//           <li>
//             <Link to="/" className="text-white font-semibold mx-4">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-white font-semibold mx-4">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/experience"
//               className="text-white font-semibold mx-4"
//             >
//               Experience
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="text-white font-semibold mx-4">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/certifications" className="text-white font-semibold mx-4">
//               Certifications
//             </Link>
//           </li>
//           <li>
//             <Link to="/testimonials" className="text-white font-semibold mx-4">
//               Testimonials
//             </Link>
//           </li>
//         </ul>

//         {/* Additional button */}
//         <Link to="/skills">
//           <button className="text-black rounded-full bg-white font-bold px-6 py-2 ml-8 hidden md:block">
//             Skills
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
