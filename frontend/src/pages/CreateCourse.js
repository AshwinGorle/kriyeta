import React from 'react'
import { BASE_URL } from '../configs/config'
const CreateCourse = () => {
  return (
    <div>
        <form action={`${BASE_URL}/create-course`} method="post">
        <input type='text' placeholder='course name' name="name"> </input>
        <input type='text' placeholder='about' name="about"> </input>
        <input type='text' placeholder='duration' name="duration"> </input>
        
        <button>Create Course</button>
        </form>
    </div>

  )
}

export default CreateCourse
