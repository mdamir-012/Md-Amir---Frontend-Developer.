import React from "react";
import brickLogo from "../assets/Brick_Matrix_Generate.png";
import "../styles/intro.css";
import downImage from "../assets/Vector.png"

const Intro = () => {
  return (
    <div className="main flex justify-around items-center bg-[#0B0A0B]">
      <div className="content_part">
        <p>Introduction</p>
       
        <p>
          We've all been in the mud once, and now we've decided to fight it out.
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future! Our mission is to empower everyone to share wealth
          and succeed. read more...
        </p>

        <button>
            <span>
            Documents
                <img className="inline-block ml-[11px]" src={downImage} width={16} height={16} alt="downImage" />
            </span>
        </button>
      </div>
      <div className="intro_logo">
        <img src={brickLogo} alt="brickLogo" />
      </div>
    </div>
  );
};

export default Intro;
