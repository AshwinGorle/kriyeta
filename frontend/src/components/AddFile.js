import React from "react";

export default function AddFile() {
  return (
    <div className="">
      <div className="flex align-center justify-center flex-col">
        <label  
          class="block mb-2 text-sm font-medium text-gray-900"
          for="file_input"
        >
          Upload file
        </label>

        <div>
          <input
            type="text"
            id="filename"
            class=" border border-gray-200 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="file name"
            required
          />
        </div>
      </div>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 p-2 w-96"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
    </div>
  );
}