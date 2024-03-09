import React, { useState } from 'react'
import TopicNavBox from './TopicNavBox'
import { BASE_URL } from '../configs/config';
import { useDispatch, useSelector } from 'react-redux';
import handleRemoveSection from './editorUtils/handleRemoveSection';

const SectionNavBox = ({data, courseId}) => {
    const dispatch = useDispatch();
    const course = useSelector(store => store.course);
    const {name, duration, noOfTopics, _id} = data;
    const [sectionDropDown, setSectionDropDown] = useState(false);

   

    const handleDropeDown = ()=>{
        setSectionDropDown(!sectionDropDown);
    }
  return (
    <div className=' border-b-2 border-gray-400  rounded-sm bg-slate-300 ' >
        <div className='p-2'>
        <div className='flex justify-between'>m     
           <div className='text-gray-800 text-xl font-bold'>{name} </div>
           <div className='relative right-0 top-1'  onClick={() =>handleDropeDown()}> dopdown </div>
           <div className='relative right-0 top-1' onClick={()=> handleRemoveSection(_id, courseId , dispatch)}> delete </div>    
        </div> 
        <div className=' flex gap-3'>
            <div className=' text-sm text-gray-700'>
                1/5
            </div>
            <div className='text-gray-700 text-sm'>
                 10 min
            </div>
        </div>
        </div>
        <div className={`overflow-hidden transition-max-h duration-300 ${sectionDropDown ? 'max-h-96' : 'max-h-0'}`}>

        <TopicNavBox/>
        <TopicNavBox/>
        <TopicNavBox/>
        <TopicNavBox/>
        </div>
    </div>
  )
}

export default SectionNavBox
