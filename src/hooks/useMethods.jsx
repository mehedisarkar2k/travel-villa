import { useState } from "react";

const useMethods = () => {
  const [updateUI, setUpdateUI] = useState(null);
  const [orderItem, setOrderItem] = useState({});

  const fetchOrderItemByID = (id) => {
    fetch(`https://peaceful-plateau-88614.herokuapp.com/cruises/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  };

  const placeOrder = (data) => {
    const newData = { ...orderItem };
    newData.name = data.name;
    newData.email = data.email;
    newData.address = data.address;
    newData.status = "pending";

    console.log(newData);

    fetch("https://peaceful-plateau-88614.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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

  return {
    cancelOrder,
    updateUI,
    placeOrder,
    setOrderItem,
    orderItem,
    fetchOrderItemByID,
  };
};

export default useMethods;
