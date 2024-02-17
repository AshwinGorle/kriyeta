import React from 'react'
import SideIndex from '../components/SideIndex.js'
import MyGenerator from '../components/MyGenerator.js'
import { useState } from 'react'
import { useRef } from 'react'
import { BASE_URL } from '../configs/config.js'
const CourseGenerator = () => {
  const sectionRefs = useRef([]);
    const [formData, setFormData] = useState({
        chapters : []
    })
const handleUpdateCourse = ()=>{
      const response = fetch (`${BASE_URL}update-course/{id}`, {
        method : 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({
          data : formData
        })
      })
}
  return (
    
    <div className='flex w-full bg-blue-100'>
          <SideIndex formData={formData} sectionRefs={sectionRefs} />  
          <MyGenerator formData={formData} setFormData={setFormData} sectionRefs={sectionRefs} />   
    </div>
  )
}

export default CourseGenerator
