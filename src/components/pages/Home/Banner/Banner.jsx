import React from "react";
import { BiDollar } from "react-icons/bi";
import { BsHeadset, BsLaptop, BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { RiShipFill } from "react-icons/ri";
import BannerStyle from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={BannerStyle.banner}>
      <div className="">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
          Finest Luxury <span className="text-lightBlue">Cruise</span> in
          Moritz!
        </h1>

        <div className="mt-6 ml-10 md:ml-20 space-y-1 md:space-y-2">
          <div className="flex items-center justify-start text-white space-x-5">
            <RiShipFill className="text-2xl text-orange" />
            <p className="text-lg font-medium">Over 100 Cruises Spot</p>
          </div>

          <div className="flex items-center justify-start text-white space-x-5">
            <GoLocation className="text-2xl text-orange" />
            <p className="text-lg font-medium">Over 1000 Places</p>
          </div>

          <div className="flex items-center justify-start text-white space-x-5">
            <BsLaptop className="text-2xl text-orange" />
            <p className="text-lg font-medium">Easy Booking</p>
          </div>
          <div className="flex items-center justify-start text-white space-x-5">
            <BiDollar className="text-2xl text-orange" />
            <p className="text-lg font-medium">Best Prices</p>
          </div>
          <div className="flex items-center justify-start text-white space-x-5">
            <BsHeadset className="text-2xl text-orange" />
            <p className="text-lg font-medium">24/7 Customer Care</p>
          </div>
        </div>

        <button className="bg-orange text-white px-6 py-2 mt-4">
          <BsPerson className="inline-block" /> About Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
