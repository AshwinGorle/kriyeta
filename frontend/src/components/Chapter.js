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
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  const addTopic = (refIdx) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics.push({
      topicName: "",
      descritpion: "",
      aiAskedDescription: "",
      subTopics: [],
      reference: refIdx,
    });
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
    dispatch(addReference());
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
      className="p-4 border border-gray-400 bg-gray-50 rounded mb-4 ml-5 mr-0  "
      ref={(el) => {
        sectionRefs.current[chapter.reference] = el;
      }}
    >
      <input
        className="flex  h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Chapter Name"
        value={chapter.chapterName}
        onChange={(e) => handleChapterChange("chapterName", e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex h-10 w-full mt-2 mr-3 border-b-2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Generate AI based data..."
          value={chapter.aiAskedDescription}
          onChange={(e) =>
            handleChapterChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          style={{ margin: "2px" }}
          className=" mtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={() => generateThroughAI([chapterIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-200 rounded-md p-2 mt-4 w-full mb-3"
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
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
      >
        Add Topic
      </button>
    </div>
  );
}
