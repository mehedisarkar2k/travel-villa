import React from "react";

const HotelS = () => {
  return (
    <div className="flex items-end space-x-6 flex-wrap justify-center">
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="destination">
          Hotel Name
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
        <label className="text-gray-600" htmlFor="night">
          How long
        </label>
        <select
          id="night"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        >
          <option value="">Select a option</option>
          <option value="">1-2 Night</option>
          <option value="">2-3 Night</option>
          <option value="">3-4 Night</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="ac-nonAc">
          Room Type
        </label>
        <select
          id="ac-nonAc"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        >
          <option value="">Select a option</option>
          <option value="">Ac</option>
          <option value="">Non-Ac</option>
        </select>
      </div>

      <button className="px-8 py-2.5 text-white rounded-full bg-darkBlue outline-none border-none transition hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2">
        Search
      </button>
    </div>
  );
};

export default HotelS;
