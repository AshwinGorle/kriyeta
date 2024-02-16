import React from "react";
import { goToSection } from "../utils/goToSection";
import { useSelector, useDispatch } from "react-redux";
export function SubSubTopic({
  subSubTopic,
  chapterIdx,
  topicIdx,
  subTopicIdx,
  subSubTopicIdx,
  formData,
  setFormData,
  generateThroughAI,
  sectionRefs,
}) {
  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  const handleSubSubTopicChange = (key, value) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics[topicIdx].subTopics[
      subTopicIdx
    ].subSubTopics[subSubTopicIdx][key] = value;
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
  };

  return (
    <div
      className="p-5 border border-gray-300 rounded  ml-5 mr-0 mb-4 pr-0"
      ref={(el) => {
        sectionRefs.current[subSubTopic.reference] = el;
      }}
      
    >
      <input
        className="text-xl font-bold border-b-2 border-gray-300 mb-2 outline-none"
        type="text"
        placeholder="SubSubTopic Name"
        value={subSubTopic.subSubTopicName}
        onChange={(e) =>
          handleSubSubTopicChange("subSubTopicName", e.target.value)
        }
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex-grow border-b-2 border-gray-300 outline-none"
          type="text"
          placeholder="Generate AI based data..."
          value={subSubTopic.aiAskedDescription}
          onChange={(e) =>
            handleSubSubTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() =>
            generateThroughAI([
              chapterIdx,
              topicIdx,
              subTopicIdx,
              subSubTopicIdx,
            ])
          }
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-100 rounded-md  mt-4 w-full  "
        type="text"
        placeholder="SubSubTopic Description"
        value={subSubTopic.descritpion}
        onChange={(e) => handleSubSubTopicChange("descritpion", e.target.value)}
      />
    </div>
  );
}
