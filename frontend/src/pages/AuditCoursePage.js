import React from "react";

import { useEffect, useState } from "react";
import AuditCourseCard from "../components/AuditCourseCard";
import { BASE_URL } from "../configs/config";

const AuditCoursePage = () => {
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null)
  const [ statusChanged , setStatusChanged ] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}course/get-all-courses`);
        const data = await response.json();
        console.log("dataaa", data);
        setCourses(data.data);
        console.log("courses : ", courses);
      } catch (err) {
        console.log("course fetch error : ", err);
        setError("Courses feching error ! please try Again!");
      }
    };
    fetchCourses();
  }, [statusChanged]);

  console.log("courses in courseList ", courses);
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
      {courses?.map((course) => {
        return <AuditCourseCard setSatusChanged={setStatusChanged} course={course} />;
      })}
    </div>
  );
};

export default AuditCoursePage;
