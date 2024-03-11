import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoSavior-red.png";
import { Wallet } from "./Wallet.tsx";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css"


 const Navbar = () => {
  const [Open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!Open);
  };

  const BgStyle = {
    
    height: "45rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={BgStyle} className="navbar_container">
        <nav className="bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  onClick={toggleNavbar}
                  className="mr-2 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                >
                  {Open ? (
                    <FaTimes className="mt-10" />
                  ) : (
                    <FaBars className="mt-10" />
                  )}
                </button>

                <div className="flex items-center mt-20">
                  <img className="nav_logo w-13 mt-10"  src={logo} alt="Saviour Logo" />
                  <span className="text-white text-lg font-zlogo mr-2  ">
                    Saviour
                  </span>
                </div>
              </div>
              <div className=" hidden md:flex md:items-center md:space-x-5 flex-grow justify-center bg-black  mt-20 rounded-full font-2xl   ">
                <Link
                  to="/home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                >
                  Home
                </Link>
                <Link
                  to=""
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                >
                  IDO
                </Link>
                <Link
                  to=""
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                >
                  Tokenomics
                </Link>
                <Link
                  to=""
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                >
                  Roadmap
                </Link>
                <Link
                  to=""
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                >
                  Coming Soon
                </Link>
              </div>
              <Wallet/>
            </div>
          </div>
          <div className={`${Open ? "block" : "hidden"} md:hidden sm:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3 ">
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Home
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                IDD
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Tokenomics
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Roadmap
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Coming Soon
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3 sm:px-3"></div>
          </div>
          
        </nav>
        <div className="nav_main_text flex justify-center items-center">
          <h1 className="text-center text-2xl lg:text-4xl text-white font-Shojumaru leading-tight lg:leading-tight lg:mb-4 sm:mt-10 sm:shadow-lg lg:shadow-none lg:mt-96 mt-20">
            WHERE BLOCKCHAIN HEROES THRIVE, RESCUING
            <span className="block font-normal">
              DREAMS, ELEVATING FORTUNES.
            </span>
          </h1>
        </div>
        
      </div>

      
    </>
  );
};


export default Navbar;