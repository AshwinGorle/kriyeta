import React from "react";
import SideIndex from "../components/SideIndex.js";
import MyGenerator from "../components/MyGenerator.js";
import { useState } from "react";
import { useRef } from "react";
import { BASE_URL } from "../configs/config.js";
import { Button } from "@mui/material";

const CourseGenerator = ({ prevCourseData }) => {
  const [openSideIndex, setOpenSideIndex] = useState(true);

  console.log(
    "this is the data from server prev course data : ",
    prevCourseData
  );
  const sectionRefs = useRef([]);
  // const [formData, setFormData] = useState(prevCourseData.content ? prevCourseData.content : {
  //     chapters : []
  // })
  const [formData, setFormData] = useState(prevCourseData.content);
  console.log("My - content", prevCourseData.content);

  const handleUpdateCourse = async (courseId) => {
    console.log("couse if in hadleupdatecourse : ", courseId);
    try {
      const response = await fetch(
        `${BASE_URL}course/update-course/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        }
      );
      const data = await response.json();
      console.log("this tis daata", data);

      console.log("course update successfully ");
    } catch (err) {
      console.log("course update error ", err);
    }
  };
  return (

      <div className="flex w-full bg-blue-200 bg-gradient-to-r from-cyan-100 to-blue-400">
        <div>
          {openSideIndex ? (
            <SideIndex
              formData={formData}
              sectionRefs={sectionRefs}
              openSideIndex={openSideIndex}
              setOpenSideIndex={setOpenSideIndex}
            />
          ) : (
            <div className=" absolute left-4 top">
              <button className="" onClick={(e) => setOpenSideIndex(true)}>
                open
              </button>
            </div>
          )}
        </div>
        <div className=" w-full">
          <MyGenerator
            formData={formData}
            setFormData={setFormData}
            sectionRefs={sectionRefs}
            prevCourseData={prevCourseData} handleUpdateCourse={handleUpdateCourse}
          />
          
        </div>
      </div>
    
  );
};

export default CourseGenerator;

