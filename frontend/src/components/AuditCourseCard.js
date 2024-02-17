import React from "react";
import { json, useNavigate } from "react-router";
import { BASE_URL } from "../configs/config";
// {_id ,name, about, duration, thumbnailUrl, author, domain}
export default function AuditCourseCard({ course }) {
  const { _id, name, about, duration, thumbnailUrl, author, domain } = course;
  console.log("thumbnail urls", thumbnailUrl);
  const navigate = useNavigate();
  const handlGoTOCourse = (courseId) => {
    navigate(`read-course/${courseId}`);
  };
  const handleAuditCourse = async(status)=>{
   try{
     const response = await fetch(`${BASE_URL}user/audit-course/${course._id}`, {
      method : "POST",
      headers : {
         "Content-type" : "application/json"
      },
      body : JSON.stringify({
        status : status
      })
     })
      
    }catch(err){
      console.log("couse Auditing error " , err  )
    }
  }
  

  return (
    <div className="w-[400px] h-full md:w-[280px] sm:w-[260px] rounded-md border-2 hover:text-blue-500 cursor-pointer">
      <div key={_id} className="rounded-md border">
        <div className=" border-2 border-red-300">
          <img
            src={thumbnailUrl}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
        </div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">{about.slice(0, 100)}</p>
         
          
          <button
            onClick={() => handlGoTOCourse(_id)}
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go TO Course
          </button>
          <button
             onClick={() => handleAuditCourse("reject")}
            type="button"
            className="mt-4 w-full rounded-sm bg-red-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Reject
          </button>
          <button
            onClick={() => handleAuditCourse("approve")}
            type="button"
            className="mt-4 w-full rounded-sm bg-green-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
