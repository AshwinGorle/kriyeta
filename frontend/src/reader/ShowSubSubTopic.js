import React from "react";
import { goToSection } from "../utils/goToSection";
import { useSelector, useDispatch } from "react-redux";
export default function ShowSubSubTopic({
  subSubTopic,
  chapterIdx,
  topicIdx,
  subTopicIdx,
  subSubTopicIdx,
  formData,

  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);


  return (
    <div
      className="p-5 border bg-gray-50  border-gray-400 rounded  ml-5 mr-0 mb-4 pr-2"
      ref={(el) => {
        sectionRefs.current[subSubTopic.reference] = el;
      }}
      
    >
      <h1>{subSubTopic.subSubTopicName}</h1>

      <p>{subSubTopic.descritpion}</p>
      

    </div>
  );
}
