import React from "react";
import useData from "../../../hooks/useData";
import ContactUs from "../../shared/ContactUs/ContactUs";
import Title from "../../shared/Title/Title";
import Cruise from "../Cruises/Cruise/Cruise";
import Banner from "./Banner/Banner";
import Hotels from "./Hotels/Hotels";
import Search from "./Search";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  const { cruises } = useData();

  return (
    <div className="bg-gray-50">
      <Banner />
      <Search />
      <WhyChoose />
      {/* <Works /> */}

      <div className="my-container py-20">
        <Title title="Our Cruises Services:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {cruises.slice(4).map((cruise) => (
            <Cruise key={cruise} cruise={cruise} />
          ))}
        </div>
      </div>

      <Services />
      <Hotels />
      <ContactUs />
    </div>
  );
};

export default Home;
