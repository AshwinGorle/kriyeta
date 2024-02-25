import React from "react";
import CourseList from "../components/CourseList";
import { useState, useEffect } from "react";
import { BASE_URL } from "../configs/config";
import CourseCard from "../components/CourseCard";
import Carosal from "../components/Carosal";
const HomePage = () => {
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        console.log("token form local storage", localStorage.getItem("token"));
        const response = await fetch(`${BASE_URL}course/get-all-courses`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
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
      <h1 className="flex justify-center mt-5 text-3xl font-serif font-semibold">
          Popular courses
        </h1>
      <div className="flex justify-center">
        <Carosal  myCourse={false} courses={courses}/>
      </div>
      <div>
        <h1 className="flex justify-center mt-5 text-3xl font-serif font-semibold">
          Our Courses
        </h1>
        {courses && <CourseList myCourse={false} courses={courses} />}
      </div>
    </div>
  );
};

export default HomePage;
