import React from "react";

import { goToSection } from "../utils/goToSection";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addReference } from "../utils/refSlice";
import ShowSubSubTopic from "./ShowSubSubTopic";





export default function ShowSubTopic({ subTopic, chapterIdx, topicIdx, formData, subTopicIdx, sectionRefs}) {

  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  



  return (
    <div className="p-4 border bg-gray-100  border-gray-400 rounded mb-4  ml-5 mr-0 pr-2"  ref={(el)=>{sectionRefs.current[subTopic.reference] = el}}>
      <h1>{subTopic.subTopicName}</h1>

      

      <p>{subTopic.descritpion}</p>
      
      {/* Render subsubtopics */}
      {subTopic.subSubTopics.map((subSubTopic, subSubTopicIdx) => (
        <ShowSubSubTopic
          key={subSubTopicIdx}
          subSubTopic={subSubTopic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          subTopicIdx={subTopicIdx}
          subSubTopicIdx={subSubTopicIdx}
          formData={formData}
          sectionRefs={sectionRefs}
        />
      ))}
      
      {/* Add Subsubtopic button */}
     
    </div>
  );
}
