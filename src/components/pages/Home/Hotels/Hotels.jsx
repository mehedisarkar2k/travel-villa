import React from "react";
import Title from "../../../shared/Title/Title";
import Hotel from "./Hotel";

const Hotels = () => {
  return (
    <div>
      <div className="my-container my-20">
        <Title title="Recommended Hotels" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6).keys()].map((p, i) => (
            <Hotel key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
