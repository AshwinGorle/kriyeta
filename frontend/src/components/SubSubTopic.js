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
      className="p-5 border bg-gray-50  border-gray-400 rounded  ml-5 mr-0 mb-4 pr-2"
      ref={(el) => {
        sectionRefs.current[subSubTopic.reference] = el;
      }}
      
    >
      <input
        className="flex  h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Sub-SubTopic Name"
        value={subSubTopic.subSubTopicName}
        onChange={(e) =>
          handleSubSubTopicChange("subSubTopicName", e.target.value)
        }
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex h-10 w-full mt-2 mr-3 border-b-2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Generate AI based data..."
          value={subSubTopic.aiAskedDescription}
          onChange={(e) =>
            handleSubSubTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="mtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
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
        className="resize-none h-32 bg-gray-100 rounded-md  mt-4 w-full p-2 "
        type="text"
        placeholder="SubSubTopic Description"
        value={subSubTopic.descritpion}
        onChange={(e) => handleSubSubTopicChange("descritpion", e.target.value)}
      />
    </div>
  );
}
