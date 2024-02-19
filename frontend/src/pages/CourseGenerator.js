import React from 'react'
import SideIndex from '../components/SideIndex.js'
import MyGenerator from '../components/MyGenerator.js'
import { useState } from 'react'
import { useRef } from 'react'
import { BASE_URL } from '../configs/config.js'
import { Button } from '@mui/material'

const CourseGenerator = ({prevCourseData}) => {
  console.log("this is the data from server prev course data : ", prevCourseData)
  const sectionRefs = useRef([]);
    // const [formData, setFormData] = useState(prevCourseData.content ? prevCourseData.content : {
    //     chapters : []
    // })
    const [formData, setFormData] = useState(prevCourseData.content)
    console.log("My - content",prevCourseData.content)
const handleUpdateCourse = async (courseId)=>{
  console.log("couse if in hadleupdatecourse : ",courseId)
  try{
      const response = await fetch (`${BASE_URL}course/update-course/${courseId}`, {
        method : 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(
          {data : formData}
        )
      })
      const data = await response.json();
      console.log("this tis daata" , data)
      
      console.log("course update successfully ",)
    }catch(err){
      console.log("course update error ", err)
    }

}
  return (
    <div className='flex justify-center flex-col'>
    <div className='flex w-full'>
          <SideIndex formData={formData} sectionRefs={sectionRefs} />  
          <MyGenerator formData={formData} setFormData={setFormData} sectionRefs={sectionRefs} /> 
          
    </div>
    <button  className=" m-auto bg-blue-300 px-4 py-2 border-2 border-gray-200 rounded-xl" onClick={()=>{handleUpdateCourse(prevCourseData._id)}}>Save course</button>  
    
    </div>
  )
}

export default CourseGenerator
