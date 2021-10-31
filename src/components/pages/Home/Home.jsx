import React, { useEffect } from "react";
import useData from "../../../hooks/useData";
import ContactUs from "../../shared/ContactUs/ContactUs";
import Spinner from "../../shared/Spinner/Spinner";
import Title from "../../shared/Title/Title";
import Cruise from "../Cruises/Cruise/Cruise";
import Banner from "./Banner/Banner";
import Hotels from "./Hotels/Hotels";
import Search from "./Search";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  const { cruises } = useData();

  useEffect(() => {
    document.title = "Home : Travel Vila";
  }, []);

  if (cruises.length < 1) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-50">
      <Banner />
      <Search />
      <WhyChoose />
      {/* <Works /> */}

      <div className="my-container py-20">
        <Title title="Our Cruises Services:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {cruises.length > 4
            ? cruises
                .slice(5)
                .map((cruise) => <Cruise key={cruise._id} cruise={cruise} />)
            : cruises.map((cruise) => (
                <Cruise key={cruise._id} cruise={cruise} />
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
