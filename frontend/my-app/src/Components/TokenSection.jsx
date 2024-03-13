import React from "react";
import frameLogo from "../assets/Frame.png";
import tokenCard1 from "../assets/roadmapCard1.png";
import tokenCard2 from "../assets/roadmapCard2.png";
import tokenCard3 from "../assets/roadmapCard3.png";
import tokenCard4 from "../assets/roadmapCard4.png";
import roadmapBg from "../assets/roadmap_bg.png";
import tokenBg from "../assets/tokenomics_bg.png"
import "../styles/tokenomics.css";

const TokenSection = () => {
  const tokenBg_style = {
    backgroundImage: `url(${tokenBg})`,
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
      <div className="lg:text-center lg:w-full p-5" style={tokenBg_style}>
        <h1 className="font-Shojumaru text-heading text-3xl text-center mt-20 mb-10">
          TOKENOMICS
        </h1>

        <div className="lg:flex justify-center mx-auto mt-5 flex-col md:flex-row">
          {/* First div with token details */}
          <div className="relative flex flex-col items-center justify-center mt-10 w-full md:w-auto md:mr-5">
            <div className="absolute lg:top-5 -top-10 font-Shojumaru text-white bg-heading mb-4 p-5 rounded-lg">
              TOKEN DETAILS
            </div>
            <div className="text-white border border-1 border-BorderColor p-9 rounded-md bg-CardBackground">
              <p className="mb-2 font-zcool text-left">
                Name{" "}
                <span className="text-heading ml-20 font-zcool text-left">Saviour</span>
              </p>
              <p className="mb-2 font-zcool text-left">
                Symbol{" "}
                <span className="text-heading ml-20 font-zcool text-left">SVR</span>
              </p>
              <p className="mb-2 font-zcool text-left">
                Total Supply{" "}
                <span className="text-heading ml-5 font-zcool text-left">
                  1000 Trillion
                </span>
              </p>
              <p className="mb-2 font-zcool text-left">
                Decimals{" "}
                <span className="text-heading ml-20 font-zcool text-left">18</span>
              </p>
            </div>
          </div>

          {/* right side div */}
          <div className="flex justify-center items-center w-full md:w-auto md:ml-5 mt-5 md:mt-0">
            <img src={frameLogo} alt="frameLogo" />
          </div>
        </div>
      </div>

      

      
      <div style={RoadmapBg_style} className=" hidden sm:block p-5">
        <h1 className=" font-Shojumaru text-heading text-2xl text-center mt-10">
          ROAD MAP
        </h1>

        <div className=" flex justify-evenly items-center mt-24 flex-wrap">
          <img src={tokenCard1} alt="tokenCard1" />
          <img src={tokenCard2} alt="tokenCard2" />
          <img src={tokenCard3} alt="tokenCard3" />
          <img src={tokenCard4} alt="tokenCard4" />
        </div>
      </div>

      {/* For sm screen */}
      <div className="sm:hidden justify-center items-center" style={RoadmapBg_style}>
        <h1 className="font-Shojumaru text-heading text-2xl text-center">
          ROAD MAP
        </h1>
        <div className="flex justify-between items-center mt-5 p-5">
          <img src={tokenCard1} alt="tokenCard1" className="w-[10rem]" />
          <img src={tokenCard2} alt="tokenCard2" className="w-[10rem]" />
        </div>
      </div>
    </>
  );
};

export default TokenSection;
