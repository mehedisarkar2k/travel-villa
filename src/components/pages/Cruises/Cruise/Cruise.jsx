import React from "react";
import { BsClock } from "react-icons/bs";

const Cruise = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-100 hover:shadow-md transition">
      <div className="overflow-hidden">
        <img
          className="transition duration-500 transform hover:scale-110"
          src="https://i.ibb.co/q5cXwzZ/banner-1.jpg"
          alt="cruise1"
        />
      </div>
      <div className="mt-2 p-4">
        <div className="flex items-center justify-between text-xl mb-2 flex-wrap">
          <h4 className="text-gray-800">Cruise Title</h4>
          <p className="text-lightBlue">$355</p>
        </div>

        <p className="text-gray-700 mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          dolores impedit minus dignissimos vitae excepturi totam veritatis
          repellendus suscipit! Tempore.
        </p>

        <div className="flex items-center justify-between text-gray-500">
          <BsClock />
          <p>5 Jan, 2021</p>
        </div>

        <div className="text-white flex item-center justify-between mt-4">
          <button className="bg-darkBlue transition hover:bg-lightBlue px-3 py-0.5 rounded-full">
            See Details
          </button>
          <button className="bg-orange transition hover:bg-lightBlue px-4 py-0.5 rounded-full">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cruise;
