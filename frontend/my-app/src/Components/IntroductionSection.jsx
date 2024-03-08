import React from "react";
import intro_logo from "../assets/Brick_Matrix_Generate.png";
import { IoIosArrowDown } from "react-icons/io";


 const IntroductionSection = () => {
  return (
    <>

      <div className="flex flex-col lg:flex-row items-center justify-center bg-black  px-4 space-between ">
        <div className="text-white lg:ml-40 lg:order-1 order-2 lg:w-1/2">
          <h1 className="font-Shojumaru text-heading lg:text-5xl mt-10 text-center lg:text-left sm:text-4xl ">
            INTRODUCTION
          </h1>
          <div className="font-zcool mt-8 text-center lg:text-left">
            <h3>We've all been in the mud once, and now we've</h3>
            <h3>decided to fight it out.</h3>
            <h3>Pay tribute to those Pioneers of WEB 3 and the</h3>
            <h3>warriors who dedicated their love to the </h3>
            <h3>blockchain. Save the lucky ones alive, join us to</h3>
            <h3>save the future!</h3>
            <h3>
              Our mission is to empower everyone to share wealth and succeed.
            </h3>
            <span className="text-gray-500">read more ...</span>
          </div>

          <div className="flex mt-10 lg:order-3 order-3 justify-center lg:justify-start">
            <button className="bg-gradient-button p-3 rounded-full flex items-center">
              <h1 className="font-zcool">Documents</h1>
              <IoIosArrowDown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mb-8 lg:mb-0 lg:order-2 order-1 sm:w-1/2 flex justify-center">
          <img src={intro_logo} alt="intro_logo" />
        </div>
      </div>
    </>
  );
};


export default IntroductionSection;