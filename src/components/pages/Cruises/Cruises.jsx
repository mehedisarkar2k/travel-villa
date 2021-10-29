import React from "react";
import Title from "../../shared/Title/Title";
import CruiseStyle from "./Cruise.module.css";
import Cruise from "./Cruise/Cruise";

const Cruises = () => {
  return (
    <div className="bg-blue-50">
      <div className={CruiseStyle.banner}>
        <h2 className="text-5xl text-lightBlue font-bold">Our All Packages</h2>
      </div>
      <div className="my-container py-20">
        <Title title="Our Cruises Services:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {[...Array(12).keys()].map(() => (
            <Cruise key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cruises;
