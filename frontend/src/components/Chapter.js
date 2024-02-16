import React from "react";
import { Topic } from "./Topic";
import { goToSection } from "../utils/goToSection";
import { useDispatch, useSelector } from "react-redux";
import { addReference } from "../utils/refSlice";
import { UseDispatch } from "react-redux";
export function Chapter({
  chapter,
  chapterIdx,
  formData,
  setFormData,
  generateThroughAI,
  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector(store => store.refSlice.numberOfRef)

  const addTopic = (refIdx) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics.push({
      topicName: "",
      descritpion: "",
      aiAskedDescription: "",
      subTopics: [],
      reference : refIdx
    });
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
    dispatch(addReference())
  };

  const handleChapterChange = (key, value) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx][key] = value;
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
  };

  

  return (
    <div
      className="p-4 border border-gray-300 rounded mb-4 ml-5 mr-0 pr-0 "
      ref={(el) => {
        sectionRefs.current[chapter.reference] = el;
      }}
      
    >
      <input
        className="text-xl font-bold border-b-2 border-gray-300 mb-2 outline-none"
        type="text"
        placeholder="Chapter Name"
        value={chapter.chapterName}
        onChange={(e) => handleChapterChange("chapterName", e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex-grow border-b-2 border-gray-300 outline-none"
          type="text"
          placeholder="Generate AI based data..."
          value={chapter.aiAskedDescription}
          onChange={(e) =>
            handleChapterChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          style={{ margin: "2px" }}
          className=" mx-2 bg-green-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
          onClick={() => generateThroughAI([chapterIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-100 rounded-md p-2 mt-4 w-full"
        type="text"
        placeholder="Chapter Description"
        value={chapter.descritpion}
        onChange={(e) => handleChapterChange("descritpion", e.target.value)}
      />

      {/* Render topics */}
      {chapter.topics.map((topic, topicIdx) => (
        <Topic
          key={topicIdx}
          topic={topic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          formData={formData}
          setFormData={setFormData}
          generateThroughAI={generateThroughAI}
          sectionRefs={sectionRefs}
        />
      ))}

      {/* Add Topic button */}
      <button
        onClick={() => addTopic(numberOfRef)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Add Topic
      </button>
    </div>
  );
}
