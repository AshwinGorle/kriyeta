import React from 'react'
import CourseCard from './CourseCard'

const CourseList = ({courses}) => {
    console.log("courses in courseList ",courses)
  return (
    <div className=' '>
        {courses.map((course)=>{
            return <CourseCard course={course} />
        })}
    </div>
  )
}

export default CourseList
