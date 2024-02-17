import React from "react";
import { Link } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
export default function NavBar() {
  return (
    <header className="bg-white  shadow-md sticky top-0 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-2 py-1 sm:p-4">
        <div className="">
        <Link to="/">
          <h1 className="font-serif font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-700">EduNet</span>
            <span className="text-blue-400">Ai</span>
          </h1>
          {/* <img src={logo} alt="" className=" w-40 object-cover" /> */}
        </Link>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          className="border-2 bg-slate-100 p-2 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-red-500" />
          </button>
        </form> */}
        <div>
          <ul className="flex md:gap-8">
            <Link to="/">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Contact
              </li>
            </Link>
            <Link to="/register">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Register
              </li>
            </Link>
            <Link to="/create-course">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Create Course
              </li>
            </Link>
            <Link to="/profile">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Profile
              </li>
            </Link>
            <Link to="/course-generator">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                generator
              </li>
            </Link>
            <Link to="/audit-courses">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline">
                Audit Curse
              </li>
            </Link>

            <Link to="/profile">
              {/* {currentUser ? ( // profile image
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline"> Register</li>
            )} */}
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}