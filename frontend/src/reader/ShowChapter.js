import React from "react";

import { goToSection } from "../utils/goToSection";
import { useDispatch, useSelector } from "react-redux";
import { addReference } from "../utils/refSlice";
import { UseDispatch } from "react-redux";
import ShowTopic from "./ShowTopic";
export default function ShowChapter({
  chapter,
  chapterIdx,
  formData,
  setFormData,
  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  return (
    <div
      className="p-4 border border-gray-400 bg-gray-50 rounded mb-4 ml-5 mr-0  "
      ref={(el) => {
        sectionRefs.current[chapter.reference] = el;
      }}
    >
      <h1> {chapter.name}</h1>

      <p> {chapter.description}</p>   

      {/* Render topics */}
      {chapter.topics.map((topic, topicIdx) => (
        <ShowTopic
          key={topicIdx}
          topic={topic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          formData={formData}
          sectionRefs={sectionRefs}
        />
      ))}

      {/* Add Topic button */}
      
    </div>
  );
}
