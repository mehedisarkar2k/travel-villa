import { useState } from "react";

const useMethods = () => {
  const [updateUI, setUpdateUI] = useState(null);

  const cancelOrder = (id) => {
    console.log(id);
    fetch(
      `https://peaceful-plateau-88614.herokuapp.com/cancelOrder?pdID=${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUpdateUI(!updateUI);
        } else {
          setUpdateUI(false);
        }
      });
  };

  return { cancelOrder, updateUI };
};

export default useMethods;
