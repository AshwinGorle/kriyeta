import React from 'react'
import CourseList from '../components/CourseList'
import { useState, useEffect } from 'react';
import { BASE_URL } from '../configs/config';
const HomePage = () => {
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState(null);

       useEffect(()=>{
        const fetchCourses = async()=>{
            try{
                const response = await fetch(`${BASE_URL}course/get-all-courses`)
                const data = await response.json();
                console.log("dataaa" , data);
                setCourses(data.data);
                console.log("courses : " , courses)
    
          }catch(err){
              console.log("course fetch error : ",err);
              setError("Courses feching error ! please try Again!")
          }
        }
        fetchCourses();
       },[])

  return (
    <div>
        {courses && <CourseList courses={courses} />}
    </div>
  )
}

export default HomePage
