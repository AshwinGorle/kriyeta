import React from "react";
import { SubSubTopic } from "./SubSubTopic";
import { goToSection } from "../utils/goToSection";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addReference } from "../utils/refSlice";





export function SubTopic({ subTopic, chapterIdx, topicIdx, subTopicIdx, formData, setFormData , generateThroughAI, sectionRefs}) {

  const dispatch = useDispatch();
  const numberOfRef = useSelector((store) => store.refSlice.numberOfRef);

  const addSubSubTopic = (refIdx) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics[topicIdx].subTopics[subTopicIdx].subSubTopics.push({
      subSubTopicName: "",
      descritpion: "",
      aiAskedDescription: "",
      subSubSubTopics: [],
      reference : refIdx
    });
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
    dispatch(addReference);
  };

  const handleSubTopicChange = (key, value) => {
    const updatedChapter = [...formData.chapters];
    updatedChapter[chapterIdx].topics[topicIdx].subTopics[subTopicIdx][key] = value;
    setFormData({
      ...formData,
      chapters: updatedChapter,
    });
  };

  return (
    <div className="p-4 border bg-gray-100  border-gray-400 rounded mb-4  ml-5 mr-0 pr-2"  ref={(el)=>{sectionRefs.current[subTopic.reference] = el}}>
      <input
        className="flex  h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="SubTopic Name"
        value={subTopic.subTopicName}
        onChange={(e) => handleSubTopicChange("subTopicName", e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex h-10 w-full mt-2 mr-3 border-b-2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Generate AI based data..."
          value={subTopic.aiAskedDescription}
          onChange={(e) =>
            handleSubTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="mtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
          onClick={() => generateThroughAI([chapterIdx, topicIdx, subTopicIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-slate-50 rounded-md p-2 mt-4 w-full mb-3"
        type="text"
        placeholder="SubTopic Description"
        value={subTopic.descritpion}
        onChange={(e) => handleSubTopicChange("descritpion", e.target.value)}
      />
      
      {/* Render subsubtopics */}
      {subTopic.subSubTopics.map((subSubTopic, subSubTopicIdx) => (
        <SubSubTopic
          key={subSubTopicIdx}
          subSubTopic={subSubTopic}
          chapterIdx={chapterIdx}
          topicIdx={topicIdx}
          subTopicIdx={subTopicIdx}
          subSubTopicIdx={subSubTopicIdx}
          formData={formData}
          setFormData={setFormData}
          generateThroughAI={generateThroughAI}
          sectionRefs={sectionRefs}
        />
      ))}
      
      {/* Add Subsubtopic button */}
      <button
        onClick={() => addSubSubTopic(numberOfRef)}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add SubSubTopic
      </button>
    </div>
  );
}
