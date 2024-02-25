import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { addUser } from "../utils/userSlice";
import restrictTo from "../utils/restrictTo";
import { FaEdit } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openProfileMenue, setOpenProfileMenue] = useState(false);
  const [openMobileMenue, setOpenMobileMenue] = useState(false);

  const user = useSelector((store) => store.userSlice.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(addUser(null));
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={(e) => setOpenMobileMenue(!openMobileMenue)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {restrictTo(user, ["teacher", "admin"]) && (
                    <Link to="/create-course">
                      <div
                        className="flex gap-2 bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                      >
                        Create Course{" "}
                        <MdCreateNewFolder className=" self-center" />
                      </div>{" "}
                    </Link>
                  )}

                  {restrictTo(user, ["teacher", "admin"]) && (
                    <Link to="/class/create-class">
                      <div
                        className="flex gap-2 bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                      >
                        Create Class{" "}
                        <MdCreateNewFolder className=" self-center" />
                      </div>{" "}
                    </Link>
                  )}

                  {restrictTo(user, ["teacher"]) && (
                    <Link to="/audit-courses">
                      <div
                        className="flex align-middle justify-center gap-2  bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                      >
                        <h1>Audit Course </h1>{" "}
                        <FaEdit color={"ffffff"} className="self-center" />
                      </div>{" "}
                    </Link>
                  )}
                  <Link to="/">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Home
                    </div>
                  </Link>

                  {restrictTo(["teacher", "admin"]) && (
                    <Link to="/my-courses">
                      <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        My Courses
                      </div>
                    </Link>
                  )}

                  <Link to="/about">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      About
                    </div>
                  </Link>

                  <Link to="/contact">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div className="bg-red">
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={(e) => setOpenProfileMenue(!openProfileMenue)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={
                        user?.avatar ||
                        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                      }
                      alt=""
                    />
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                {openProfileMenue && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    {user && (
                      <Link to="/profile">
                        <a
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                          onClick={() => setOpenProfileMenue(false)}
                        >
                          Your Profile
                        </a>{" "}
                      </Link>
                    )}
                    {user ? (
                      <Link to="/login" onClick={() => handleLogout()}>
                        <a
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          Sign Out
                        </a>{" "}
                      </Link>
                    ) : (
                      <>
                        {" "}
                        <Link to="/login">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                          >
                            Login
                          </a>{" "}
                        </Link>
                        <Link to="/register">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                          >
                            Register
                          </a>{" "}
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {openMobileMenue && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              {restrictTo(user, ["teacher", "admin"]) && (
                <Link to="/create-course">
                  <div
                    className="flex gap-2 bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    onClick={() => setOpenMobileMenue(false)}
                  >
                    Create Course <MdCreateNewFolder className=" self-center" />
                  </div>{" "}
                </Link>
              )}

              {restrictTo(user, ["teacher", "admin"]) && (
                <Link to="/audit-courses">
                  <div
                    onClick={() => setOpenMobileMenue(false)}
                    className="flex my-2 gap-2  bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <h1>Audit Course </h1>{" "}
                    <FaEdit color={"ffffff"} className="self-center" />
                  </div>{" "}
                </Link>
              )}
              <Link to="/">
                <div
                  onClick={() => setOpenMobileMenue(false)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </div>
              </Link>

              {restrictTo(["teacher", "admin"]) && (
                <Link to="/my-courses">
                  <div
                    onClick={() => setOpenMobileMenue(false)}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    My Courses
                  </div>
                </Link>
              )}

              <Link to="/about">
                <div
                  onClick={() => setOpenMobileMenue(false)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </div>
              </Link>

              <Link to="/contact">
                <div
                  onClick={() => setOpenMobileMenue(false)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
