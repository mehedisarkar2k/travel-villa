import React from "react";
import Cruises from "../Cruises/Cruises";
import Banner from "./Banner/Banner";
import Search from "./Search";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Banner />
      <Search />
      <WhyChoose />
      <Cruises />
    </div>
  );
};

export default Home;
