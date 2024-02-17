import React, { useState } from "react";
import Addpdf from "../Componets/Addfile";
import AddFile from "../components/AddFile";
import AddUrl from "../components/AddUrl";
import AiButton from "../Componets/AiButton";

export default function AddKnowledgebase() {
  const [pdfStatus, setpdfStatus] = useState(0);
  const [urlStatus, seturlStatus] = useState(0);

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
          Add PDF
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
            <AddFile/>
          ))}
          {new Array(urlStatus).fill(0).map(() => (
            <AddUrl />
          ))}
        </form>
      </div>
      <div className="flex justify-center">
      <AiButton/>
      </div>
    </div>
  );
}