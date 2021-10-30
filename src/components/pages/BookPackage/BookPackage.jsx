import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useMethods from "../../../hooks/useMethods";

const BookPackage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { placeOrder, orderItem, fetchOrderItemByID } = useMethods();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => placeOrder(data);

  useEffect(() => {
    fetchOrderItemByID(id);
  }, [id, fetchOrderItemByID]);

  return (
    <div>
      <div className="my-container py-20">
        <div className="grid rounded-xl shadow-lg grid-cols-1 md:grid-cols-2 bg-gray-100">
          <div className="p-10 ">
            <img src={orderItem?.img} alt="" />
            <h3 className="text-3xl mt-2 text-orange">{orderItem?.title}</h3>

            <div className="px-10 mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <p>Your Ordered Package:</p>
                <p>X 1</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Your Total Cost:</p>
                <p>${orderItem?.price}</p>
              </div>
            </div>
          </div>

          <div className="p-10">
            <h2 className="text-4xl text-orange">Hello, {user?.displayName}</h2>
            <p className="italic text-gray-600 text-sm">
              Your are logged in as {user?.email}
            </p>
            <form
              className="flex flex-col  justify-center space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="text-left mt-8 inline-block text-xl text-lightBlue">
                Bill to the same address
              </p>
              <input
                type="text"
                className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none bg-gray-200"
                defaultValue={user?.displayName}
                {...register("name")}
                readOnly
              />
              <input
                type="text"
                className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none bg-gray-200"
                defaultValue={user?.email}
                {...register("email")}
                readOnly
              />
              <label
                className="text-left mt-8 inline-block text-xl text-lightBlue"
                htmlFor="address"
              >
                Your Address
              </label>
              <textarea
                id="address"
                className="rounded-lg w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
                placeholder="73/2 A, Mirpur, Dhaka, Bangladesh"
                {...register("address")}
              />

              <input
                className="bg-darkBlue text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-lightBlue hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                value="Place Order"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPackage;
