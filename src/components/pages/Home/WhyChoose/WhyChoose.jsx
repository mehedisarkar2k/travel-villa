import React from "react";
import { GrServicePlay } from "react-icons/gr";
import Title from "../../../shared/Title/Title";

const WhyChoose = () => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="my-container">
        <div className="p-20 flex">
          <div className="w-1/2 overflow-hidden rounded-3xl">
            <img src="https://i.ibb.co/q5cXwzZ/banner-1.jpg" alt="" />
          </div>
          <div className="w-1/2 ml-10">
            <Title title="Why Choose Us" />
            <div className="ml-10">
              <div className="">
                <GrServicePlay />
                <p>Personalize Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
