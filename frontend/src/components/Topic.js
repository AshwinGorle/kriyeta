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
      className="p-4 border border-gray-300 rounded ml-5 mr-0 pr-0"
      ref={(el) => {
        sectionRefs.current[topic.reference] = el;
      }}
      
    >
      <input
        className="text-xl font-bold border-b-2 border-gray-300 mb-2 outline-none"
        type="text"
        placeholder="Topic Name"
        value={topic.topicName}
        onChange={(e) => handleTopicChange("topicName", e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex-grow border-b-2 border-gray-300 outline-none"
          type="text"
          placeholder="Generate AI based data..."
          value={topic.aiAskedDescription}
          onChange={(e) =>
            handleTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => generateThroughAI([chapterIdx, topicIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-100 rounded-md p-2 mt-4 w-full"
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
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Add SubTopic
      </button>
    </div>
  );
}
