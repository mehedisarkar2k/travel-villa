import React from "react";
import { useForm } from "react-hook-form";
import Title from "../Title/Title";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,.9),rgba(0,0,0,.5)), url('https://i.ibb.co/6FKcHB4/banner-1.jpg') center center/cover no-repeat",
      }}
      // style={{
      //   background:
      //     "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)), url('https://i.ibb.co/cCF4TZw/contact-BG.jpg') bottom bottom/cover no-repeat fixed",
      // }}
    >
      <div className="my-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="md:w-4/5 md:h-4/5 rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="transition object-cover transform hover:scale-110 rounded-2xl w-full h-full"
              src="https://i.ibb.co/9pb4wp3/contact-Img.jpg"
              alt=""
            />
          </div>

          <div className="p-10">
            <Title title="Contact with Us" />
            <form
              className="w-full mx-auto flex flex-col  justify-center space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                className="text-left mt-8 inline-block text-xl text-lightBlue"
                htmlFor="title"
              >
                Name
              </label>
              <input
                id="title"
                type="text"
                className="rounded-full w-full px-4 py-1 border-2 border-gray-300 focus:outline-none focus:border-gray-600"
                placeholder="Your Name"
                {...register("name")}
              />

              <label
                className="text-left mt-8 inline-block text-xl text-lightBlue"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="rounded-full w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
                placeholder="Your Email"
                {...register("email")}
              />

              <label
                className="text-left mt-8 inline-block text-xl text-lightBlue"
                htmlFor="description"
              >
                Message
              </label>
              <textarea
                id="message"
                className="rounded-lg w-full px-4 py-1 border-2 border-gray-400 focus:outline-none focus:border-gray-600"
                placeholder="Your Messages"
                {...register("message")}
              />

              <input
                className="bg-darkBlue text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-lightBlue hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                value="Send Us"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
