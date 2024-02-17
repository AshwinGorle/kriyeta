// FinalGenerator.js
import React, { useRef, useState } from "react";
import { Chapter } from "./Chapter";
import { useDispatch } from "react-redux";
import { addReference } from "../utils/refSlice";

import { useSelector } from "react-redux";

const MyGenerator = ({ formData, setFormData, sectionRefs }) => {
  const dispatch = useDispatch();
  const numberOfRef = useSelector(store => store.refSlice.numberOfRef )
  console.log(numberOfRef)

  function generateThroughAI(Location) {
    console.log("ai generation started...");
    const updatedChapter = [...formData.chapters];
    let result = updatedChapter;

    if (Location.length >= 1) result = result[Location[0]];
    if (Location.length >= 2) result = result.topics[Location[1]];
    if (Location.length >= 3) result = result.subTopics[Location[2]];
    if (Location.length >= 4) result = result.subSubTopics[Location[3]];

    const question = result.aiAskedDescription;
    const Answer = "this is the currently generated ai response";
    console.log("Question : ", question);

    // Check if the generated answer is different from the current description
    if (result.descritpion !== Answer) {
      result.descritpion = Answer;

      // Update the state only if the generated data has changed
      setFormData({
        ...formData,
        chapters: updatedChapter,
      });
    }
  }

  const addChapter = (refIdx) => {
    
    setFormData({
      ...formData,
      chapters: [
        ...formData.chapters,
        {
          chapterName: "",
          descritpion: "",
          aiAskedDescription: "",
          topics: [],
          reference :  refIdx
          
          
        },
      ],
    });
    dispatch(addReference());
  };
 
  return (
    <div className="p-4 flex flex-col w-4/5 ml-auto mr-10">
      {formData.chapters.map((chapter, chapterIdx) => {
       return ( <Chapter
          key={chapterIdx}
          chapter={chapter}
          chapterIdx={chapterIdx}
          formData={formData}
          setFormData={setFormData}
          generateThroughAI={generateThroughAI}
          sectionRefs={sectionRefs}
          
        />
       )
       })}
      <button
        onClick={() => addChapter(numberOfRef)}
        className="bg-blue-500 text-white px-2 py-1 mb-2 rounded"
      >
        Add Chapter
      </button>
      <pre className="mt-4">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default MyGenerator;
