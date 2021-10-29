import React from "react";
import { BiBus } from "react-icons/bi";
import { BsChat, BsEmojiSmile } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import ContactUs from "../../shared/ContactUs/ContactUs";
import Title from "../../shared/Title/Title";

const AboutUS = () => {
  return (
    <div className="bg-blue-50">
      <div
        style={{
          background:
            "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)), url('https://i.ibb.co/2hRP7H7/about-Banner.jpg') center center/cover no-repeat",
          minHeight: "40vh",
        }}
        className="flex items-center justify-center flex-col"
      >
        <div className="text-5xl font-bold text-lightBlue">About Us</div>
        <p className="text-gray-50 w-1/2 text-center mt-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          fugit neque temporibus qui soluta vel culpa excepturi fugiat, mollitia
          deleniti.
        </p>
      </div>

      <div className="my-container my-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="transition transform hover:scale-110 rounded-2xl w-full h-full"
              src="https://i.ibb.co/9pb4wp3/contact-Img.jpg"
              alt=""
            />
          </div>
          <div className="p-10">
            <Title title="About Us" />
            <h3 className="text-3xl text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate.
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              corrupti distinctio explicabo velit. Quis consequatur, ullam quod
              esse quisquam culpa natus facere velit ratione voluptas, dolores
              molestias reiciendis harum? Voluptatem.
            </p>

            <button className="px-6 py-3 bg-darkBlue border-none focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-lightBlue text-white mt-4 rounded-2xl transition hover:bg-lightBlue hover:shadow-xl">
              See Packages
            </button>
          </div>
        </div>

        <div className="my-20 mx-auto flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BsEmojiSmile className="text-gray-400" />
              <p className="text-gray-800 m-0">70,000</p>
              <p className="text-lightBlue text-sm">Happy Customer</p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BiBus className="text-gray-400" />
              <p className="text-gray-800 m-0">122</p>
              <p className="text-lightBlue text-sm">Amazing Tours</p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <CgToolbox className="text-gray-400" />
              <p className="text-gray-800 m-0">8,187</p>
              <p className="text-lightBlue text-sm">In Business</p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BsChat className="text-gray-400" />
              <p className="text-gray-800 m-0">12,865</p>
              <p className="text-lightBlue text-sm">Support Cases</p>
            </div>
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUS;
