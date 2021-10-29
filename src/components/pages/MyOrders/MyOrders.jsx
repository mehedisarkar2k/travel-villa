import React from "react";
import { GiWaterRecycling } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";
import { MdCancel } from "react-icons/md";

const MyOrders = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)) ,url('https://i.ibb.co/Tt7ggXP/my-Order-Bg.jpg') center bottom/cover no-repeat fixed",
          minHeight: "40vh",
        }}
      >
        <h2 className="text-5xl text-lightBlue font-bold">
          Review Your All Booked Package
        </h2>
      </div>

      <div className="my-container py-20">
        <div className="text-center">
          <h2 className="text-4xl text-lightBlue">
            Hello, <span className="text-orange">User!</span>
          </h2>
          <p className="text-lg text-lightBlue">
            Your are Sign in as , Mehedi@email.com
          </p>
        </div>

        <div className=" w-2/3 mx-auto text-gray-800">
          <h3 className="text-3xl mb-4 mt-8">Your All Booked Items</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between space-x-2 shadow-md hover:shadow-lg rounded-md py-6 px-10 bg-gray-100 text-2xl">
              <img
                src="https://i.ibb.co/q5cXwzZ/banner-1.jpg"
                alt=""
                className="w-20 h-20 rounded-full"
              />

              <div className="">
                <h4>Cruise Title</h4>
                <p className="text-gray-500 text-base text-yellow-600">
                  Status: <span>Pending</span>
                  <GiWaterRecycling className="inline-block ml-1" />
                </p>
              </div>

              <div className="flex space-x-3 items-center bg-orange text-white px-4 py-1 rounded-full text-base">
                <MdCancel className="text-red-300" />
                <button>Cancel Booking</button>
              </div>
            </div>

            <div className="flex items-center justify-between space-x-2 shadow-md hover:shadow-lg rounded-md py-6 px-10 bg-gray-100 text-2xl">
              <img
                src="https://i.ibb.co/q5cXwzZ/banner-1.jpg"
                alt=""
                className="w-20 h-20 rounded-full"
              />

              <div className="">
                <h4>Cruise Title</h4>
                <p className="text-green-600 text-base">
                  Status: <span>Approved</span>
                  <ImCheckmark className="inline-block ml-1 " />
                </p>
              </div>

              <div className="flex space-x-3 items-center bg-orange text-white px-4 py-1 rounded-full text-base">
                <MdCancel className="text-red-300" />
                <button>Cancel Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
