import React from "react";

export default function Academics() {
  return (
    <div>
      <div className="p-3 px-12 h-full ">
        <h1 className="text-3xl font-semibold text-center my-7">
          Academics Records
        </h1>
        <form onSubmit={""} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Organization Name{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your organization name"
                id="name"
              ></input>
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <div className="w-1/2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="state"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  State{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="State"
                  id="state"
                ></input>
              </div>
            </div>
            <div className=" w-1/2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  City{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="City"
                  id="city"
                ></input>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="Country"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Country{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Country"
                id="country"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Role{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={"Student"}
                id="role"
              ></input>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Education{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your current education"
                id="Degree"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Field{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                maxlength="10"
                placeholder="Your field (e.g, CSE, PCM .etc)"
                id="field"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Current Year{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                maxlength="10"
                placeholder="20XX-20XX"
                id="field"
              ></input>
            </div>
          </div>

          <button className="bg-sky-600 text-white font-medium rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">
            update
          </button>
        </form>
        <div className="flex justify-between mt-5">
          <button className="text-red-700 font-medium cursor-pointer">
            Delete account
          </button>
          <button className="text-red-700 font-medium cursor-pointer">
            Sign out
          </button>
        </div>
        <p className="text-green-700 mt-5" id="bookNotExist"></p>
      </div>

      <div></div>
    </div>
  );
}