import React from "react";
import Title from "../../shared/Title/Title";
import Cruise from "./Cruise/Cruise";

const Cruises = () => {
  return (
    <div className="">
      <div className="my-container py-20">
        <Title title="Our Cruises Services:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {[...Array(7).keys()].map(() => (
            <Cruise key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cruises;
