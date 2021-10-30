import React, { useEffect, useState } from "react";
import Title from "../../../shared/Title/Title";
import Hotel from "./Hotel";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-plateau-88614.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  });

  return (
    <div>
      <div className="my-container my-20">
        <Title title="Recommended Hotels" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Hotel key={hotel?._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
