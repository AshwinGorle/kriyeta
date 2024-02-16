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
    <div className="p-4 border border-gray-300 rounded mb-4  ml-5 mr-0 pr-0"  ref={(el)=>{sectionRefs.current[subTopic.reference] = el}}>
      <input
        className="text-xl font-bold border-b-2 border-gray-300 mb-2 outline-none"
        type="text"
        placeholder="SubTopic Name"
        value={subTopic.subTopicName}
        onChange={(e) => handleSubTopicChange("subTopicName", e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <input
          className="flex-grow border-b-2 border-gray-300 outline-none"
          type="text"
          placeholder="Generate AI based data..."
          value={subTopic.aiAskedDescription}
          onChange={(e) =>
            handleSubTopicChange("aiAskedDescription", e.target.value)
          }
        />
        <button
          className="bg-green-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => generateThroughAI([chapterIdx, topicIdx, subTopicIdx])}
        >
          Generate
        </button>
      </div>

      <textarea
        className="resize-none h-32 bg-gray-100 rounded-md p-2 mt-4 w-full"
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
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Add SubSubTopic
      </button>
    </div>
  );
}
