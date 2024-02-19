import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
export default function NavBar() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  console.log("role ", user?.role);
  console.log("user", user);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <header className="bg-gray-200  shadow-md top-0 ">
      <div className="flex justify-between items-center sm:p-2">
        <div className="">
          <Link to="/" className="flex flex-row align-text-top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mykriyeta.appspot.com/o/knowledgebaseFiles%2F7639d1e0-cdcb-11ee-add7-ad44366ebdbf?alt=media&token=0ad89b6f-9034-4176-8008-5a5af83b3d76"
              className="w-14"
            />
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
        <div className=" ">
          <ul className="flex md:gap-2">
            <Link to="/">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3 ">
                Contact
              </li>
            </Link>
            {user && user.role === "teacher" && (
              <Link to="/my-courses">
                <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3">
                  My Course
                </li>
              </Link>
            )}

            {user && user.role === "teacher" && (
              <Link to="/create-course">
                <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3">
                  Create Course
                </li>
              </Link>
            )}
            {user && (
              <Link to="/profile">
                <div className="">
                  <img
                    className="rounded-full h-8 w-8 object-cover"
                    src={
                      user?.avatar ||
                      "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                    }
                    alt="profile"
                  />
                </div>
              </Link>
            )}
            {user && user.role === "admin" && (
              <Link to="/audit-courses">
                <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base px-3">
                  Audit Course
                </li>
              </Link>
            )}

            {user && user.role === "admin" && (
              <Link to="/knowledgebases">
                <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base px-3">
                  Knowledgebases
                </li>
              </Link>
            )}

            {user ? (
              <Link
                to="/login"
                onClick={() => {
                  handleLogout();
                }}
              >
                <li className="hidden sm:inline text-slate-950 hover:text-red-500 hover:underline font-bold text-base">
                  Logout
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="hidden sm:inline text-slate-950 hover:text-blue-500 hover:underline font-bold text-base border-r-2 border-gray-900 px-3">
                  Login
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
