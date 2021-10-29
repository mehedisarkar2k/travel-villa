import React from "react";

const CruiseS = () => {
  return (
    <div className="flex items-end space-x-6 flex-wrap justify-center">
      <div className="flex flex-col">
        <label className="text-gray-600" htmlFor="destination">
          Destination
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
          Course Type
        </label>
        <select
          id="course-type"
          className="rounded-full px-4 py-2 focus:outline-none border-2 border-gray-400 focus:border-gray-600"
        >
          <option value="">Select a option</option>
          <option value="">1-2 Seats</option>
          <option value="">2-3 Seats</option>
          <option value="">3-4 Seats</option>
        </select>
      </div>

      <button className="px-8 py-2.5 text-white rounded-full bg-darkBlue outline-none border-none transition hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2">
        Search
      </button>
    </div>
  );
};

export default CruiseS;
