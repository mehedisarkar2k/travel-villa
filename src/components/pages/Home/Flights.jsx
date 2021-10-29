import React from "react";

const Flights = () => {
  return (
    <div className="flex items-end justify-center space-x-6 flex-wrap">
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="destination">
          Boarding Place
        </label>
        <input
          type="text"
          id="destination"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="course-type">
          Seats
        </label>
        <select
          id="course-type"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        >
          <option value="">Select a option</option>
          <option value="">1 Seats</option>
          <option value="">2 Seats</option>
          <option value="">3 Seats</option>
          <option value="">4 Seats</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="promo">
          Promocode
        </label>
        <input
          type="text"
          id="promo"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        />
      </div>

      <button className="mt-4 px-12 py-2.5 text-white rounded-full bg-darkBlue outline-none border-none transition hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2">
        Search
      </button>
    </div>
  );
};

export default Flights;
