import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/LogoSavior-red.png";
import { Wallet } from "./Wallet.tsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import navBg from "../assets/Rectangle18.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  const BgStyle = {
    width: "100%",
    height: "36.75rem",
    backgroundImage: `url(${navBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center top 40%",
  };

  return (
    <>
      <div style={BgStyle}>
        <nav className="bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  onClick={toggleNavbar}
                  className="mr-2 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                >
                  {show ? (
                    <FaTimes className="mt-10" />
                  ) : (
                    <FaBars className="mt-10" />
                  )}
                </button>

                <div className="flex items-center mt-20">
                  <img className=" w-13" src={navLogo} alt="Saviour Logo" />
                  <span className="text-white lg:text-2xl text-lg font-zlogo mr-2 -mt-10">
                    Saviour
                  </span>
                </div>
              </div>

              <div className="w-[50%] h-[3.5rem] py-4 px-6 rounded-[20px] hidden lg:flex items-center justify-around gap-[24px] bg-[#191818] mt-12 font-zlogo">
                <p className="text-[1.25rem] text-center text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
                  <Link to="/">Home</Link>
                </p>
                <p className="text-[1.25rem] text-center text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
                  <Link to="">IDO</Link>
                </p>
                <p className="text-[1.25rem] text-center text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
                  <Link to="">Tokenomics</Link>
                </p>
                <p className="text-[1.25rem] text-center text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
                  <Link to="">Roadmap</Link>
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[1.25rem] text-center text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
                    <Link to="">Coming Soon</Link>
                  </p>
                  <IoIosArrowDown className="text-white text-2xl" />
                </div>
              </div>

              <Wallet />
            </div>
          </div>
          <div className={`${show ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
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
        <div className="flex justify-center items-center">
          <h1 className="text-center text-2xl lg:text-4xl text-white font-Shojumaru leading-tight lg:leading-tight lg:mb-4 sm:mt-10 sm:shadow-lg lg:shadow-none lg:mt-52 mt-20">
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
