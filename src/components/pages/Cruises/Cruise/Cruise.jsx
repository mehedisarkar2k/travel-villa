import React from "react";
import { BsClock } from "react-icons/bs";
import { useHistory } from "react-router";

const Cruise = ({ cruise }) => {
  const { _id, title, img, price, description, duration } = cruise;
  const history = useHistory();

  const bookPackage = (id) => {
    history.push(`/bookPackage/${id}`);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-gray-100 hover:shadow-md transition">
      <div className="overflow-hidden">
        <img
          className="transition duration-500 transform hover:scale-110"
          src={img}
          alt={title}
        />
      </div>
      <div className="mt-2 p-4">
        <div className="flex flex-col mb-4 items-center justify-between text-2xl flex-wrap">
          <h4 className="text-gray-900">{title}</h4>
          <p className="text-lightBlue font-bold">${price}</p>
        </div>

        <p className="text-gray-700 mb-2">{description.slice(0, 150)}</p>

        <div className="flex items-center justify-between text-gray-500">
          <BsClock />
          <p className="uppercase">{duration}</p>
        </div>

        <div className="text-white flex item-center justify-between mt-4">
          <button
            onClick={() => bookPackage(_id)}
            className="bg-darkBlue transition hover:bg-lightBlue px-3 py-0.5 rounded-full"
          >
            See Details
          </button>
          <button
            onClick={() => bookPackage(_id)}
            className="bg-orange transition hover:bg-lightBlue px-4 py-0.5 rounded-full"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cruise;
