// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-20">
        <div className="flex items-center">
          <img
            src="/assets/img/OTG_Logo_White.svg"
            alt="Logo"
            className="w-14 mr-2"
          />
        </div>
        <div>
          <div className="text-white">© OTG | All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
