import React from "react";
import { useNavigate } from "react-router";
// {_id ,name, about, duration, thumbnailUrl, author, domain}
export default function CourseCard({course}) {
    const {_id ,name, about, duration, thumbnailUrl, author, domain} = course
    console.log("thumbnail urls", thumbnailUrl) 
    const navigate = useNavigate();
    const handlGoTOCourse = (courseId)=>{
         navigate(`read-course/:${courseId}`)
    }

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      
        <div key={_id} className="rounded-md border">
          <img
            src={thumbnailUrl}
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {name}
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {about.slice(0,100)}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Colors : </span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
            </div>
            <button
            onClick={()=>handlGoTOCourse(_id)}
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             Go TO COurse
            </button>
          </div>
        </div>
    
    </div>
  );
}