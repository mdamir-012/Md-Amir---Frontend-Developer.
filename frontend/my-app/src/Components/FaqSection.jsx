import React from "react";
import faq_logo from "../assets/image 1.png";
import { IoIosArrowDown } from "react-icons/io";

 const FaqSection = () => {
  return (
    <>
      <div className="bg-FooterBackground  justify-center items-center lg:flex flex-row ">
        <div>
          <img src={faq_logo} alt="" />
        </div>

        <div>
          <div className="flex flex-col">
            <h1 className="font-Shojumaru text-heading text-3xl text-center">
              FAQ
            </h1>
            <div className="flex  mt-5 border border-2 border-BorderColor px-10 py-3 rounded-md ">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">1</span>
                <span className="ml-2 font-2xl">WHY CHOOSE "SAVIOR"?</span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            <div className="flex  mt-5 border border-2 border-BorderColor px-10 py-3 rounded-md">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">2</span>
                <span className="ml-2 font-2xl">
                  WHY IS THE IDO DURATION SO LONG?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            <div className="flex  mt-5 border border-2 border-BorderColor px-10 py-3 rounded-md">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="mr-10 font-Shojumaru">3</span>
                <span className="ml-2 font-2xl">
                  WHEN WILL TRADING GO LIVE?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl" />
              </p>
            </div>

            <div className="flex flex-col mt-5 border border-2 border-BorderColor px-10 py-3 rounded-md">
              <p className="text-white flex items-center font-Shojumaru">
                <span className="lg:text-left font-Shojumaru">4</span>
                <span className="ml-5 font-2xl">
                  WHEN CAN WE CLAIM THE TOKENS?
                </span>
                <IoIosArrowDown className="ml-5 font-Shojumaru text-4xl ml-584" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default FaqSection;