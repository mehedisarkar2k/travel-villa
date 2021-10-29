import React from "react";

const Hotel = () => {
  return (
    <div className="bg-gray-50 transition hover:bg-gray-100 shadow-xl hover:shadow-2xl mt-4 overflow-hidden rounded-3xl">
      <div className="">
        <img
          className="rounded-3xl rounded-b-none"
          src="http://themes.codezion.com/angular/toor/assets/images/hotels/4.jpg"
          alt=""
        />
      </div>
      <div className="px-8 py-4">
        <h3 className="text-lightBlue text-2xl font-medium">
          About Roosevelt Hotel
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
          voluptates nulla eius dolorum aliquam.
        </p>
        <button className="mt-2 bg-darkBlue transition hover:bg-lightBlue px-3 py-1 rounded-full text-white">
          See All
        </button>
      </div>
    </div>
  );
};

export default Hotel;
