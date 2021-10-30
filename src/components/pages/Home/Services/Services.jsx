import React from "react";
import Title from "../../../shared/Title/Title";
import SingleService from "./SingleService";

const services = [
  {
    title: "Book Hotel",
    img: "https://i.ibb.co/fkGFqfK/hotel.png",
    details:
      "Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.",
  },
  {
    title: "Flight Service",
    img: "https://i.ibb.co/QmVs7p5/flight.png",
    details:
      "Flight or flying is the process by which an object moves through a space without contacting any planetary surface, either within an atmosphere or through the vacuum of outer space.",
  },
  {
    title: "Enjoy Cruise",
    img: "https://i.ibb.co/1qfMLmN/cruise.jpg",
    details:
      "Carnival cruise deals and cruise packages to the most popular destinations. Find great deals and specials on Caribbean, The Bahamas, Alaska, and Mexico ....",
  },
  {
    title: "Hire Car",
    img: "https://i.ibb.co/jfFmxbG/car.jpg",
    details:
      "Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.",
  },
];

const Services = () => {
  return (
    <div className="bg-blue-50">
      <div className="my-container py-20">
        <Title title="Services We Offer" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((hotel, index) => (
            <SingleService key={index} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
