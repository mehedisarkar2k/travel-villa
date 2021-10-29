import React from "react";

const SingleService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
      <div className="overflow-hidden rounded-3xl">
        <img
          className="rounded-3xl"
          src="http://themes.codezion.com/angular/toor/assets/images/offers03.jpg"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lightBlue text-2xl font-medium">Book Hotel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
          voluptates nulla eius dolorum aliquam.
        </p>
        <button className="bg-darkBlue transition hover:bg-lightBlue px-3 py-1 rounded-full text-white">
          See All
        </button>
      </div>
    </div>
  );
};

export default SingleService;
