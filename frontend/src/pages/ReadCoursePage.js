import React from 'react'
import { useParams } from 'react-router'

const ReadCoursePage = () => {
   const params = useParams();
  return (
    <div>
      {`you are reading course ${params.courseId}`} 
    </div>
  )
}

export default ReadCoursePage
