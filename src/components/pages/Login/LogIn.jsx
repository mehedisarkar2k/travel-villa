import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useSingInMethod from "../../../hooks/useSignInMethod";
// import Logo from "../../img/logo.png";

const Login = () => {
  const { handleGoogleSignIn } = useSingInMethod();
  return (
    <div
      style={{
        minHeight: "80vh",
        background: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('https://i.ibb.co/Yds4VNc/log-In-Page.jpg')center center/cover no-repeat`,
      }}
      className="flex items-center justify-center"
    >
      <div
        style={{ minHeight: "300px", background: "rgba(255,255,255,.5)" }}
        className="my-container w-full md:w-2/3 my-20 py-14 md:rounded-2xl flex flex-col items-center justify-center text-center"
      >
        {/* <img className="w-52 md:w-60 lg:w-72 mb-6" src={Logo} alt="Logo" /> */}

        <div className="w-full">
          <h2 className="text-gray-800 text-4xl mb-4">Login With</h2>
          <div
            onClick={handleGoogleSignIn}
            className="bg-lightBlue w-full sm:w-2/3 lg:w-1/3 mx-auto flex items-center justify-start sm:justify-center px-4 relative rounded-full border border-lightBlue transition shadow-sm hover:shadow-md cursor-pointer py-2"
          >
            <FcGoogle className="text-2xl sm:text-4xl sm:absolute sm:left-2" />
            <p className="text-gray-100 ml-4 sm:ml-0">Continue With google</p>
          </div>
          <p className="mt-2 text-gray-100">
            Don’t have an account?{" "}
            <Link
              className="text-gray-900 transition-all hover:text-lightBlue hover:underline"
              to="register"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
