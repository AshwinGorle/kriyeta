import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// {_id ,name, about, duration, thumbnailUrl, author, domain}
export default function CourseCard({ course, myCourse, KnowledgeBasesPage }) {
  const [user, setUser] = useState(null);
  const { _id, name, about, duration, thumbnailUrl, author, domain } = course;
  console.log("id", _id);
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  console.log("thumbnail urls", thumbnailUrl);
  const navigate = useNavigate();
  const handlGoTOCourse = (courseId) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/read-course/${courseId}`);
    }
  };
  const handleVerifyKnowledgebase = (courseId) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/verify-knowledgebase/${courseId}`);
    }
  };

  const handlEditCourse = (courseId) => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    } else {
      navigate(`/edit-course/${courseId}`);
    }
  };

  return (
    <div className="w-[400px] h-full md:w-[280px] sm:w-[260px] rounded-md border-2 hover:text-blue-500 shadow-2xl cursor-pointer border-gray-300">
      <div key={_id} className="rounded-md border">
        <div className=" border-2 ">
          <img
            src={thumbnailUrl}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
        </div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">{about}</p>
          {/* <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Sneakers
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Nike
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Airmax
            </span>
          </div> */}
          {/* <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Colors : </span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div> */}
          <button
            onClick={() => handlGoTOCourse(_id)}
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go To Course
          </button>
          {user &&
            (user?.role === "admin" ||
              (user?.role === "teacher" && myCourse)) && (
              <button
                onClick={() => handlEditCourse(_id)}
                type="button"
                className="mt-4 w-full rounded-sm bg-red-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Edit Course
              </button>
            )}
          {KnowledgeBasesPage && (
            <button
              onClick={() => handleVerifyKnowledgebase(_id)}
              type="button"
              className="mt-4 w-full rounded-sm bg-red-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Verify Knowledgebases
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
