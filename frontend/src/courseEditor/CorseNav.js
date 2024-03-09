import React from 'react'
import SectionNavBox from './SectionNavBox'
import { BASE_URL } from '../configs/config'
import { useDispatch, useSelector } from 'react-redux'
import { addSectionToStore } from '../utils/editorSlice'
import handleAddSection from './editorUtils/handleAddSection'

const CorseNav = () => {
 
  const course = useSelector(store => store.editorSlice.course);
  console.log("fetching my course _____", course)
  const dispatch = useDispatch();

  return (
    course ?
    <div className=' w-1/5 h-full bg-gray-900 overflow-auto'>
        {
          course.content.map((section)=><SectionNavBox data={section} courseId={course._id} />)
        }
        <div className=' border-b-2 border-gray-400  rounded-sm bg-slate-300 '  onClick={() => handleAddSection(course._id, dispatch)}>
          Add section +
        </div>

    </div>  
    :
    ""
  )
}

export default CorseNav
