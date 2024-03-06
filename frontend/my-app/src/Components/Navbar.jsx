import React from "react";
import saviourLogo from "../assets/LogoSavior-red.png";
import "../styles/navbar.css";
import bg from "../assets/Rectangle18.png"

const Navbar = () => {
  return (
    <div className="container">
    
      {/* Navbar start here */}
      <div className="navbar  flex justify-around items-center ">
        <div className="nav_child1 flex items-center text-center">
          <img className="logo " src={saviourLogo} alt="saviourLogo" />
          <p className=" ">Saviour</p>
        </div>
        <div className="nav_child2 flex justify-between items-center">
          <div className="nav_links flex items-center px-4 py-6 gap-6 ">
            <a href="/">Home</a>
            <a href="/">IDO</a>
            <a href="/">Tokenomics</a>
            <a href="/">Roadmap</a>
            <a href="/">Coming Soon</a>
          </div>
          
        </div>
        <div className="connect_wallet">
            {" "}
            <button >Connect Wallet</button>
          </div>
      </div>

      {/* main part */}
      <div className="main_content">
        <p>Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</p>
      </div>
    </div>
  );
};

export default Navbar;
