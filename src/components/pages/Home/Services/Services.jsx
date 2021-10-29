import React from "react";
import Title from "../../../shared/Title/Title";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <div className="bg-blue-50">
      <div className="my-container py-20">
        <Title title="Services We Offer" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4).keys()].map((item, index) => (
            <SingleService key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
