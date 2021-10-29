import React from "react";
import { AiOutlineCustomerService } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import Title from "../../../shared/Title/Title";

const WhyChoose = () => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="my-container">
        <div className="py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row">
          <div className="order-2 lg:w-1/2 overflow-hidden rounded-3xl">
            <img src="https://i.ibb.co/q5cXwzZ/banner-1.jpg" alt="" />
          </div>
          <div className="order-1 mb-4 lg:mb-0 lg:w-1/2 ml-10">
            <Title title="Why Choose Us" />
            <div className="md:ml-10 space-y-2">
              <div className="flex  items-center space-x-3 text-xl">
                <FaServer className="text-darkBlue" />
                <p>Personalize Service</p>
              </div>
              <div className="flex items-center space-x-3 text-xl">
                <AiOutlineCustomerService className="text-darkBlue" />
                <p>24/7x Customer Services</p>
              </div>
              <div className="flex items-center space-x-3 text-xl">
                <BiDollar className="text-darkBlue" />
                <p>Best Pricing</p>
              </div>
              <div className="flex items-center space-x-3 text-xl">
                <IoIosLaptop className="text-darkBlue" />
                <p>Trusted Company</p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <button className="btn mt-4 ml-14">See Packages</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
