import React, { useState } from "react";
import AddFile from "../components/AddFile";
import AddUrl from "../components/AddUrl";
import { useParams } from "react-router";
// import AiButton from "../Componets/AiButton";

export default function AddKnowledgebase({courseId}) {
  const [pdfStatus, setpdfStatus] = useState(0);
  const [urlStatus, seturlStatus] = useState(0);
  const params = useParams();
  

  return (
    <div className="items-center">
      <h1 className="text-3xl font-semibold text-center my-7">
        Add Knowledge base
      </h1>
      <div className="flex justify-center gap-5">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            setpdfStatus(pdfStatus + 1);
          }}
        >
          Add Docs
        </button>

        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
          seturlStatus(urlStatus + 1);
        }}
        >
          Add URL
        </button>
        {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Add Wordfile
        </button> */}
        {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Add Code
        </button> */}
      </div>
      <div className="flex justify-center my-12">
        <form className="flex flex-col gap-5">
          {new Array(pdfStatus).fill(0).map(() => (
            <AddFile courseId={courseId} />
          ))}
          {new Array(urlStatus).fill(0).map(() => (
            <AddUrl  courseId={courseId} />
          ))}
        </form>
      </div>
      {/* <div className="flex justify-center">
      <AiButton/>
      </div> */}
    </div>
  );
}