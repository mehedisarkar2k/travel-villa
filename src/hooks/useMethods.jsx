import { useState } from "react";
import Swal from "sweetalert2";

const useMethods = () => {
  const [updateUI, setUpdateUI] = useState(null);

  const cancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure to delete this item?",
      showDenyButton: true,
      confirmButtonText: "Yes, Delete this!",
      denyButtonText: `Ops! Don't delete.`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://peaceful-plateau-88614.herokuapp.com/cancelOrder?pdID=${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setUpdateUI(!updateUI);
            } else {
              setUpdateUI(false);
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  const updateOrder = (id) => {
    fetch(
      `https://peaceful-plateau-88614.herokuapp.com/updateOrder?pdID=${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "approved" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUpdateUI(!updateUI);
          Swal.fire("Product approved successfully!");
        } else {
          setUpdateUI(false);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return { cancelOrder, updateOrder, updateUI };
};

export default useMethods;
