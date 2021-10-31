import React from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import NotFoundImg from "./bg-notFound.png";

const NotFound = () => {
  return (
    <div className="text-center w-full mx-auto py-8 not-found px-10">
      <h2 className="text-2xl text-darkBlue">
        <span className="text-orange">Something went wrong.</span> please check
        again...
      </h2>
      <img className="w-1/3 mx-auto" src={NotFoundImg} alt="Not Found" />

      <Link to="/home">
        <button className="mt-2 px-5 py-2 rounded-full text-gray-100 bg-darkBlue transition hover:bg-darkBlue  focus:ring focus:ring-offset-2 focus:ring-opacity-70 focus:ring-darkBlue">
          <span className="flex items-center">
            <AiOutlineCaretLeft /> <span className="ml-2">Go to Home</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
