import React from 'react'
import { goToSection } from '../utils/goToSection';




function SubSubTopic({ subSubTopic, subSubTopicIdx , sectionRefs}) {
  return (
    <div className="border-l-2 border-slate-500 ml-2 pb-1 pl-1  font-bold text-gray-400">
      <div onClick={()=>goToSection(subSubTopic.reference, sectionRefs)}> {subSubTopic.subSubTopicName ? subSubTopic.subSubTopicName : `Sub-Sub-Topic-${subSubTopicIdx+1}-Name` }</div>
    </div>
  );
}


 function SubTopic({ subTopic, subTopicIdx , sectionRefs}) {
  return (
    <div className="border-l-2 border-slate-500 ml-2 pb-2 pl-1 text-xs font-bold text-gray-300">
      <div onClick={()=>goToSection(subTopic.reference, sectionRefs)}> {subTopic.subTopicName ? subTopic.subTopicName : `Sub-Topic-${subTopicIdx+1}-Name` }</div>
      {subTopic.subSubTopics.map((subSubTopic, subSubTopicIdx) => (
        <SubSubTopic
          subSubTopic={subSubTopic}
          subSubTopicIdx={subSubTopicIdx}
          sectionRefs={sectionRefs}
        />
      ))}
    </div>
  );
}

 function Topic({ topic, topicIdx, sectionRefs}) {
  return (
    <div className=" border-l-2 border-slate-500 ml-2 pb-3 pl-1 text-sm font-bold text-gray-100">
      <div onClick={()=>goToSection(topic.reference, sectionRefs)}>{
        topic.topicName ? topic.topicName : `Topic-${topicIdx+1}-Name`
      }</div>
      {topic.subTopics.map((subTopic, subTopicIdx) => (
        <SubTopic
          subTopic={subTopic}
          subTopicIdx={subTopicIdx}
          sectionRefs={sectionRefs}
        />
      ))}
    </div>
  );
}

function Chapter({ chapter, chapterIdx , sectionRefs}) {
  return (
    <div className=" border-l-2 border-slate-500 ml-2 pb-3 pl-1  text-lg font-bold text-white">
      <div onClick={()=>goToSection(chapter.reference,sectionRefs)}>{chapter.chapterName ? chapter.chapterName : `Chapter-${chapterIdx+1}-Name` }</div>
      {chapter.topics.map((topic, topicIdx) => (
        <Topic
          topic={topic}
          topicIdx={topicIdx}
          sectionRefs={sectionRefs}
        />
      ))}
    </div>
  );
}


const SideIndex = ({formData, sectionRefs}) => {
  console.log("triggered")
  return (
    <div className=' w-1/6 h-full border p-2 sticky top-0 bg-blue-500'>
       {
        formData.chapters.map((chapter, chapterIdx) => <Chapter chapter={chapter} chapterIdx={chapterIdx} sectionRefs={sectionRefs}/>)
       }
    </div>
  )
}

export default SideIndex
