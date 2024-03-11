import React from "react";
import sideLogo from "../assets/Frame.png";
import tokeCard1 from "../assets/roadmapCard1.png";
import tokenCard2 from "../assets/roadmapCard2.png";
import tokenCard3 from "../assets/roadmapCard3.png";
import tokenCard4 from "../assets/roadmapCard4.png";
import roadmapBg from "../assets/roadmap_bg.png"
import "../styles/tokenomics.css";

const TokenSection = () => {
  const tokenBg_style = {
    backgroundSize: "cover",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
  };

  const RoadmapBg_style = {
    backgroundImage: `url(${roadmapBg})`,
    backgroundSize: "cover",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div
        className="tokenomics_container bg-black lg:text-center lg:w-full p-5"
        style={tokenBg_style}
      >
        <h1 className="font-Shojumaru text-heading text-3xl text-center">
          TOKENOMICS
        </h1>

        <div className="lg:flex justify-center mx-auto mt-5 flex-col md:flex-row">
          {/* First div token details */}
          <div className="relative flex flex-col items-center justify-center mt-10 w-full md:w-auto md:mr-5">
            <div className="absolute lg:top-5 -top-10 font-Shojumaru text-white bg-heading mb-4 p-5 rounded-full">
              TOKEN DETAILS
            </div>
            <div className="text-white border border-2 border-BorderColor p-9 rounded-md bg-CardBackground">
              <p className="mb-2 font-zcool">
                Name{" "}
                <span className="text-heading ml-20 font-zcool">Saviour</span>
              </p>
              <p className="mb-2 font-zcool">
                Symbol{" "}
                <span className="text-heading ml-20 font-zcool">SVR</span>
              </p>
              <p className="mb-2 font-zcool">
                Total Supply{" "}
                <span className="text-heading ml-5 font-zcool">
                  1000 Trillion
                </span>
              </p>
              <p className="mb-2 font-zcool">
                Decimals{" "}
                <span className="text-heading ml-20 font-zcool">18</span>
              </p>
            </div>
          </div>

          
          <div className="flex justify-center items-center w-full md:w-auto md:ml-5 mt-5 md:mt-0">
            <img src={sideLogo} alt="" />
          </div>
        </div>
      </div>

      {/* For lg screens */}
      <div
        style={RoadmapBg_style}
        className="roadmap_container hidden sm:block p-5"
      >
        <h1 className="roadmap_text font-Shojumaru text-heading text-2xl text-center">
          ROAD MAP
        </h1>

        <div className="roadmap_card  flex justify-center items-center mt-5 ">
          <img src={tokeCard1} alt="tokeCard1" />
          <img src={tokenCard2} alt="tokenCard2" />
          <img src={tokenCard3} alt="tokenCard3" />
          <img src={tokenCard4} alt="tokenCard4" />
        </div>
      </div>

      {/* small screen */}
      <div
        className="sm:hidden justify-center items-center"
        style={RoadmapBg_style}
      >
        <h1 className="font-Shojumaru text-heading text-2xl text-center">
          ROAD MAP
        </h1>
        <div className="flex justify-center items-center mt-5 p-5 gap-10">
          <img src={tokeCard1} alt="" className="w-[10rem]" />
          <img src={tokenCard2} alt="" className="w-[10rem]" />
        </div>
      </div>
    </>
  );
};

export default TokenSection;
