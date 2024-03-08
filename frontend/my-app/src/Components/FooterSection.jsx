import React from "react";
import footerLogo from "../assets/Frame_footer_logo.png";
import twitter_logo from "../assets/twitter_logo.png";
import telegram_logo from "../assets/telegram.png";
import mail from "../assets/email-solid.png";

 const FooterSection = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white py-10">
      <div>
        <img src={footerLogo} alt="Footer Logo" />
      </div>
      <h1 className="text-xl font-bold mt-4 mb-2 text-heading">SITEMAP</h1>
      <div className="flex flex-wrap justify-center gap-4 font-xl">
        <p>Home</p>
        <p>IDO</p>
        <p>Tokenomics</p>
        <p>Road Map</p>
        <p>WhitePaper</p>
        <p>Pledge</p>
        <p>NFT</p>
        <p>Games</p>
      </div>
      <div className="flex mt-4">
        <img src={twitter_logo} alt="twitter_logo" className="mr-4" />
        <img src={telegram_logo} alt="telegram_logo" className="mr-4" />
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
};


export default FooterSection;