import { useEffect, useState } from "react";

const useData = () => {
  const [cruises, setCruises] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-plateau-88614.herokuapp.com/cruises")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCruises(data);
      });
  }, []);

  return { cruises };
};

export default useData;
