import React from "react";
import CourseList from "../components/CourseList";
import { useState, useEffect } from "react";
import { BASE_URL } from "../configs/config";
const MyCoursePage = () => {
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState(null);
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}course/get-my-courses`, {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
          }
        );
        // const response = await fetch(`${BASE_URL}course/get-all-courses`);
        const data = await response.json();
        console.log("data", data);
        setCourses(data.data);
        console.log("courses : ", courses);
      } catch (err) {
        console.log("course fetch error : ", err);
        setError("Courses feching error ! please try Again!");
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      {courses && courses.length === 0 ? (
        <h1 className="flex justify-center my-10 text-3xl font-serif font-semibold">
          No Courses Available
        </h1>
      ) : (
        courses && (
          <>
            <h1 className="flex justify-center mt-5 text-3xl font-serif font-semibold">
              Our Courses
            </h1>
            <CourseList myCourse={true} courses={courses} />
          </>
        )
      )}
    </div>
  );
};

export default MyCoursePage;
