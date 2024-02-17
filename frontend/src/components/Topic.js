import React from "react";
import { SubTopic } from "./SubTopic";
import { goToSection } from "../utils/goToSection";
import { useDispatch } from "react-redux";
import { addReference } from "../utils/refSlice";
import { useSelector } from "react-redux";

export function Topic({
  topic,
  chapterIdx,
  topicIdx,
  formData,
  setFormData,
  generateThroughAI,
  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  const addSubTopic = (refIdx) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics[topicIdx].subTopics.push({
      subTopicName: "",
      descritpion: "",
      aiAskedDescription: "",
      subSubTopics: [],
      reference: refIdx,
    });
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
    dispatch(addReference());
  };

  const handleTopicChange = (key, value) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics[topicIdx][key] = value;
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
  };

  return (
    <div
      className="p-4 border bg-gray-200  border-gray-400 rounded ml-5 mr-0 pr-0 mb-3 pr-2"
      ref={(el) => {
        sectionRefs.current[topic.reference] = el;
      }}
      
    >
      <input
        className="flex  h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Topic Name"
        value={topic.topicName}
        onChange={(e) => handleTopicChange("topicName", e.target.value)}
      />

      <div className="flex items-center space-x-2 ">
        <input
          className="flex h-10 w-full mt-2 mr-3 border-b-2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Generate AI based data..."
          value={topic.aiAskedDescription}
          onChange={(e) =>
            handleTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="mtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
          onClick={() => generateThroughAI([chapterIdx, topicIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-100 rounded-md p-2 mt-4 w-full mb-3"
        type="text"
        placeholder="Topic Description"
        value={topic.descritpion}
        onChange={(e) => handleTopicChange("descritpion", e.target.value)}
      />

      {/* Render subtopics */}
      {topic.subTopics.map((subTopic, subTopicIdx) => (
        <SubTopic
          key={subTopicIdx}
          subTopic={subTopic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          subTopicIdx={subTopicIdx}
          formData={formData}
          setFormData={setFormData}
          generateThroughAI={generateThroughAI}
          sectionRefs={sectionRefs}
        />
      ))}

      {/* Add Subtopic button */}
      <button
        onClick={() => addSubTopic(numberOfRef)}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add SubTopic
      </button>
    </div>
  );
}
