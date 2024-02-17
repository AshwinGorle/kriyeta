import React from 'react'
import CourseCard from './CourseCard'

const CourseList = ({courses}) => {
    console.log("courses in courseList ",courses)
  return (
    <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 '>
        {courses.map((course)=>{
            return <CourseCard course={course} />
        })}
    </div>
  )
}

export default CourseList
