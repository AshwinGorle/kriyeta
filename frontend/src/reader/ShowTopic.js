import React from "react";

import { useDispatch } from "react-redux";
import { addReference } from "../utils/refSlice";
import { useSelector } from "react-redux";
import ShowSubTopic from "./ShowSubTopic";

export default function ShowTopic({
  topic,
  chapterIdx,
  topicIdx,
  formData,
  
 
  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);


  return (
    <div
      className="p-4 border bg-gray-200  border-gray-400 rounded ml-5 mr-0 pr-0 mb-3 pr-2"
      ref={(el) => {
        sectionRefs.current[topic.reference] = el;
      }}
      
    >
      <h1>{topic.topicName}</h1>


      <h1>{topic.descritpion}</h1>

      {/* Render subtopics */}
      {topic.subTopics.map((subTopic, subTopicIdx) => (
        <ShowSubTopic
          key={subTopicIdx}
          subTopic={subTopic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          subTopicIdx={subTopicIdx}
          formData={formData}
          sectionRefs={sectionRefs}
        />
      ))}

      {/* Add Subtopic button */}
      
    </div>
  );
}
