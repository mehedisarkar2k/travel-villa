import React from "react";

const SingleService = ({ hotel }) => {
  const { title, img, details } = hotel;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
      <div className="overflow-hidden rounded-3xl">
        <img className="rounded-3xl" src={img} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-lightBlue text-2xl font-medium">{title}</h3>
        <p className="text-gray-600">{details}</p>
        <button className="bg-darkBlue transition hover:bg-lightBlue px-3 py-1 rounded-full text-white">
          See All
        </button>
      </div>
    </div>
  );
};

export default SingleService;
