import React from "react";
import { MdOutlineFlight } from "react-icons/md";

const Title = ({ title }) => {
  return (
    <h2 className="text-3xl text-lightBlue">
      {title}
      <div className="flex items-center">
        <MdOutlineFlight className="transform rotate-90" />
        <span className=" h-1 w-32 bg-lightBlue"></span>
      </div>
    </h2>
  );
};

export default Title;
