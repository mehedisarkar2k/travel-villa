import React from "react";
import Cruises from "../Cruises/Cruises";
import Banner from "./Banner/Banner";
import Hotels from "./Hotels/Hotels";
import Search from "./Search";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Banner />
      <Search />
      <WhyChoose />
      {/* <Works /> */}
      <Cruises />
      <Services />
      <Hotels />
    </div>
  );
};

export default Home;
