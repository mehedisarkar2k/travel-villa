import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userSignOut } = useAuth();
  return (
    // <div className="fixed top-0 left-0 w-screen">
    <div className="w-full">
      <nav className="bg-gray-800 py-4 lg:py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="">
                <h2 className="text-orange text-2xl sm:text-xl lg:text-3xl font-bold">
                  <span className="text-darkBlue">Travel </span>Vila
                </h2>
              </div>
              <div className="ml-auto hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <NavLink
                    activeClassName="text-lightBlue bg-gray-700"
                    to="/home"
                    className="text-white nav-link"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName="text-lightBlue bg-gray-700"
                    to="/allPackage"
                    className="nav-link"
                  >
                    All Packages
                  </NavLink>

                  {user.email ? (
                    <NavLink
                      activeClassName="text-lightBlue bg-gray-700"
                      to="/myOrders"
                      className="nav-link"
                    >
                      My Order
                    </NavLink>
                  ) : (
                    ""
                  )}

                  {user.email ? (
                    <NavLink
                      activeClassName="text-lightBlue bg-gray-700"
                      to="/manageOrders"
                      className="nav-link"
                    >
                      Manage Order
                    </NavLink>
                  ) : (
                    ""
                  )}

                  {user.email ? (
                    <NavLink
                      activeClassName="text-lightBlue bg-gray-700"
                      to="/addPackage"
                      className="nav-link"
                    >
                      Add Package
                    </NavLink>
                  ) : (
                    ""
                  )}

                  <NavLink
                    activeClassName="text-lightBlue bg-gray-700"
                    to="/aboutUs"
                    className="nav-link"
                  >
                    About Us
                  </NavLink>

                  {user.email ? (
                    <div className="flex item-center">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                      <button
                        onClick={userSignOut}
                        className="bg-orange nav-link ml-2"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <NavLink to="/login" className="bg-orange nav-link">
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="text-center md:hidden" id="mobile-menu">
              <div
                ref-setter={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/home"
                  className="collapse-nav-link"
                >
                  Home
                </NavLink>

                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/allPackage"
                  className="collapse-nav-link text-white"
                >
                  All Package
                </NavLink>

                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/myOrders"
                  className="collapse-nav-link"
                >
                  My Order
                </NavLink>

                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/manageOrders"
                  className="collapse-nav-link"
                >
                  Manage Orders
                </NavLink>

                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/addPackage"
                  className="collapse-nav-link"
                >
                  Add Package
                </NavLink>

                <NavLink
                  activeClassName="text-lightBlue bg-gray-700"
                  to="/aboutUs"
                  className="collapse-nav-link"
                >
                  About Us
                </NavLink>

                {user.email ? (
                  <div className="flex justify-center space-x-4 item-center">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <button
                      onClick={userSignOut}
                      className="bg-orange nav-link"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <NavLink to="/login" className="bg-orange nav-link">
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
