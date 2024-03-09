import React, { useEffect, useState } from "react";
import TopicPage from "./TopicPage";
import { BASE_URL } from "../configs/config";
import CorseNav from "./CorseNav";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, addCourseToStore } from "../utils/editorSlice";
import PopupWindow from "../components/PopupWindow";
import AddSectionPage from "./editorPages/AddSectionPage";

const CourseEditorPage = () => {

  const dispatch = useDispatch();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}course/get-course/65e8485d26de88ea9584025e`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        console.log("fetched__course_data______", data.data);
        // Entering fetched course into store
        dispatch(addCourseToStore(data.data));
      } catch (err) {
        console.log("course fetch error : ", err);
        setError("Courses feching error ! please try Again!");
      }
    };
    fetchCourse();
  }, []);

  
  return (
    <>
   <div className=" flex gap-2 h-lvh bg-ho">
      <CorseNav />
      <TopicPage />
      <PopupWindow show={true} ><AddSectionPage/></PopupWindow>
    </div>
    
  </>
  );
};

export default CourseEditorPage;
