import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import Title from "../../shared/Title/Title";

const AddPackage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Items Added Successfully!!",
            showDenyButton: true,
            confirmButtonText: "Ok go to home",
            denyButtonText: `Stay here`,
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/home");
            }
          });
        }
        // console.log(data);
      });
  };

  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)) ,url('https://i.ibb.co/Tt7ggXP/my-Order-Bg.jpg') center bottom/cover no-repeat fixed",
          minHeight: "40vh",
        }}
      >
        <h2 className="text-5xl text-lightBlue font-bold">Add New Packages</h2>
      </div>

      <div className="bg-blue-50">
        <div className="my-container py-20">
          <Title title="Add New Package" />
          <form
            className="-mt-24 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col  justify-center space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="title"
            >
              Package Title
            </label>
            <input
              id="title"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-600"
              defaultValue="title"
              {...register("title")}
            />
            <div className="flex items-center space-x-2">
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="price"
                >
                  Package Price
                </label>
                <input
                  id="price"
                  type="number"
                  className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-600"
                  defaultValue="250"
                  {...register("price")}
                />
              </div>
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="duration"
                >
                  Package Time
                </label>
                <input
                  id="duration"
                  type="text"
                  className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-600"
                  defaultValue="Full day"
                  {...register("duration")}
                />
              </div>
            </div>

            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="img"
            >
              Package Thumb
            </label>
            <input
              id="img"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
              defaultValue="https://i.ibb.co/qsBhjtc/cruise-Banner.jpg"
              {...register("img")}
            />
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="description"
            >
              Package Description
            </label>
            <textarea
              id="description"
              className="rounded-lg w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
              defaultValue="description"
              {...register("description")}
            />

            <input
              className="bg-darkBlue text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-lightBlue hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
              value="Add Package"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPackage;
