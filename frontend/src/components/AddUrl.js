import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { storage } from "../firebase";
import { BASE_URL } from "../configs/config";
import {
  list,
  listAll,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
// import { upload } from "@testing-library/user-event/dist/upload";

export default function AddLink({ courseId }) {
  const [inputLink, setInputLink] = useState("");
  const [uploadLabel, setUploadLabel] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);

  const [contentUrl, setContentUrl] = useState(null);

  const [knowledgeBase, setknowledgeBase] = useState([]);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  
  const handleKonwlegeSubmit = async () => {
    console.log("knowlegebase", knowledgeBase);
    try {
      console.log("posting id : ", courseId);
      const response = await fetch(
        `${BASE_URL}course/create-knowledgebase/${courseId}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            knowledgeBase: {
              name: uploadLabel,
              link: inputLink,
            },
          }),
        }
      );
      const data = await response.json();
      console.log("course-data:", data);
      if (data.status === "failed") {
        setError(data.message);
      } else {
        console.log(data);
        console.log("successfully submited");
        setUploadStatus("uploaded Successfully!");
      }
    } catch (error) {
      setError("something went wrong !!");
    }
  };

  return (
    <div className="">
      <div className="flex align-center justify-center flex-col">
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          for="file_input"
        >
          Add Resource Link
        </label>

        <div>
          <input
            type="text"
            id="filename"
            class=" border border-gray-200 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Resourse Name"
            required
            onChange={(e) => {
              setUploadLabel(e.target.value);
            }}
          />
        </div>
      </div>
      <input
        type="url"
        id="website"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 mt-2"
        placeholder="http://xyz.com"
        required
        value = {inputLink}
        onChange={(e)=>setInputLink(e.target.value)}
      />
      

      <button
        className="bg-blue-400 mx-2 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none"
        type="button"
        onClick={() => {
          handleKonwlegeSubmit();
        }}
      >
        submit
      </button>
      {uploadStatus && <p className="text-green-400">uploadStatus</p>}
    </div>
  );
}



