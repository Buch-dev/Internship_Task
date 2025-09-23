import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full absolute bottom-0 p-4">
      <div className="flex flex-col gap-4 items-center justify-between md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <label
            htmlFor="logo"
            className="text-4xl font-bold text-white bg-black flex items-center justify-center px-2"
          >
            K
          </label>
          <h5 className="text-white text-2xl font-semibold">Krea AI</h5>
        </div>
        <div className="text-white flex items-center gap-3">
          <h5>curated by</h5>
          <h2 className="text-2xl font-semibold">Mobbin</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
