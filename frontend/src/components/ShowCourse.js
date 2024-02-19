import React from 'react'
import ShowChapter from '../reader/ShowChapter'

const ShowCourse = ({formData, sectionRefs}) => {
    return (
        <div className="p-4 flex flex-col w-4/5 ml-auto mr-10">
          {formData?.chapters?.map((chapter, chapterIdx) => {
           return ( <ShowChapter
              key={chapterIdx}
              chapter={chapter}
              chapterIdx={chapterIdx}
              formData={formData}
              sectionRefs={sectionRefs}          
            />
           )
           })}
         
        </div>
      )
    
}

export default ShowCourse
