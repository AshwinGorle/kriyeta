import React from 'react'
import SideIndex from '../components/SideIndex.js'
import MyGenerator from '../components/MyGenerator.js'
import { useState } from 'react'
import { useRef } from 'react'

const CourseGenerator = () => {
  const sectionRefs = useRef([]);
    const [formData, setFormData] = useState({
        chapters : []
    })
    
  return (
    
    <div className='flex w-full bg-blue-100'>
          <SideIndex formData={formData} sectionRefs={sectionRefs} />  
      
          <MyGenerator formData={formData} setFormData={setFormData} sectionRefs={sectionRefs} />
    </div>
  )
}

export default CourseGenerator
