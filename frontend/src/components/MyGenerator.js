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

  ///////work herer ---------------

  async function generateThroughAI(Location) {
    console.log("ai generation started...");

    const updatedChapter = [...formData.chapters];
    let result = updatedChapter;

    if (Location.length >= 1) result = result[Location[0]];
    if (Location.length >= 2) result = result.topics[Location[1]];
    if (Location.length >= 3) result = result.subTopics[Location[2]];
    if (Location.length >= 4) result = result.subSubTopics[Location[3]];
    
    const question = result.aiAskedDescription;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
      body : JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      }),
    });

    const data = await response.json();
    const respondMessage = data.choices[0].message.content;


    const Answer = respondMessage;
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
      {formData?.chapters?.map((chapter, chapterIdx) => {
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
        className="mtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Add Chapter
      </button>
      {/* <pre className="mt-4">{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  );
};

export default MyGenerator;
