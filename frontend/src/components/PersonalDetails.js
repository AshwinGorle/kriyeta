import React from "react";

const PersonalDetails = ({user}) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={""} className="flex flex-col gap-4">
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {" "}
            Full Name{" "}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Full Name"
              value={user ? user.name : ""}
              id="name"
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900"
          >
            {" "}
            Email address{" "}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
              value={user ? user.email : ""}
              id="email"
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
              Password{" "}
            </label>
          </div>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              placeholder="Password"
              id="password"
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {" "}
            Phone No.{" "}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              maxlength="10"
              value={user ? user.phone : ""}
              placeholder="98765XXX"
              id="pohone_no"
            ></input>
          </div>
        </div>

        <div className="flex flex-row gap-x-6">
          <div className="w-1/2">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                State{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="State"
                value={user ? user?.state : ""}
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
                value={user ? user?.city : ""}
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
              value={user ? user?.country : ""}
              id="country"
            ></input>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="dob"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              DOB{" "}
            </label>
          </div>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="date"
              value={user ? user.dob : ""}
              id="dob"
            ></input>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="dob"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Gender{" "}
            </label>
          </div>
          <div className="flex flex-row mt-2 gap-5">
            <div class="flex items-center mb-4">
              <input
                checked
                id="male"
                type="radio"
                name="default-radio"
                value={user ? user.gender : ""}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-radio-1" class="ms-2 text-sm font-medium ">
                Male
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-radio-2" class="ms-2 text-sm font-medium ">
                Female
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
