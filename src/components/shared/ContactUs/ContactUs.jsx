import React from "react";
import Title from "../Title/Title";

const ContactUs = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)) ,url('https://i.ibb.co/cCF4TZw/contact-BG.jpg') center center/cover no-repeat fixed",
      }}
    >
      <div className="my-container py-20">
        <Title title="Contact with Us" />
      </div>
    </div>
  );
};

export default ContactUs;
