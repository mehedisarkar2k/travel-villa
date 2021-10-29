import React, { useState } from "react";
import CruiseS from "./CruiseS";
import Flights from "./Flights";
import HotelS from "./HotelS";

const Search = () => {
  const [option, setOption] = useState("cruise");

  const btnStyle =
    "border border-lightBlue px-6 py-2 hover:bg-lightBlue transition hover:text-white";
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95))",
        }}
        className="my-container -mt-10 py-10 shadow-xl"
      >
        <div className="flex items-center">
          <button
            onClick={() => setOption("cruise")}
            className={`border-r-0 ${btnStyle} ${
              option === "cruise" ? "bg-lightBlue text-white" : ""
            }`}
          >
            Cruise
          </button>
          <button
            onClick={() => setOption("hotel")}
            className={`border-r-0 ${btnStyle} ${
              option === "hotel" ? "bg-lightBlue text-white" : ""
            }`}
          >
            Hotel
          </button>
          <button
            onClick={() => setOption("flights")}
            className={`${btnStyle} ${
              option === "flights" ? "bg-lightBlue text-white" : ""
            }`}
          >
            Flights
          </button>
        </div>

        <div className="mt-6">
          {option === "cruise" ? <CruiseS /> : ""}
          {option === "hotel" ? <HotelS /> : ""}
          {option === "flights" ? <Flights /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Search;
