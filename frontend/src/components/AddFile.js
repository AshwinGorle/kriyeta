import React, { useState } from "react";
import {v1 as uuid} from "uuid";
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

export default function AddFile({courseId}) {
  const [uploadLabel, setUploadLabel] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);

  const [contentUrl,setContentUrl]=useState(null);

  const [knowledgeBase,setknowledgeBase]=useState([]);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const uplaodContent =(e)=>{
    e.preventDefault();
    const contentId=uuid();
    console.log(uuid)

    console.log("upload clicked")
    if(uploadFile==null || uploadLabel==null) return;
    const contentRef=ref(storage,`knowledgebaseFiles/${contentId}`);
    console.log(contentRef)
    uploadBytes(contentRef,uploadFile).then((data)=>{
      console.log('file uploaded');
      const contentlistRef = ref (storage,"knowledgebaseFiles/");
      listAll(contentlistRef).then((response)=>{
        const item = response.items.filter((item)=>{
          return item.name == contentId;
        });
        getDownloadURL(item[0]).then((url)=>{
          console.log("download url",url);
          setContentUrl(url);
        });
      });
    });
    setknowledgeBase({"name":`${uploadLabel}`,"link":`${contentUrl}`})
  };

  const handleKonwlegeSubmit = async ()=>{
    console.log("knowlegebase",knowledgeBase);
    try {
      console.log("posting id : ",courseId)
      const response = await fetch(`${BASE_URL}course/create-knowledgebase/${courseId}`,{
        method: "POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(
          {knowledgeBase : {
            name : uploadLabel,
            link : contentUrl
          }}
        ),
      });
      const data=await response.json();
      console.log("course-data:",data);
      if(data.status === "failed"){
        setError(data.message)
      }
      else{
        console.log(data);
         console.log("successfully submited")
         setUploadStatus("uploaded Successfully!")
      }
    } catch (error) {
      setError("something went wrong !!")
    }


  }

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
            onChange={(e) => {
              setUploadLabel(e.target.value);
            }}
          />
        </div>
      </div>
      <input
        class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 p-2 w-96"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={(e) => {
          setUploadFile(e.target.files[0]);
        }}
      />
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold mt-2 py-2 px-4 rounded"
        type="button"
        onClick={(e) => {
          uplaodContent(e);
        }}
      >
        Upload
      </button>

      <button
        className="bg-blue-400 mx-2 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
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
