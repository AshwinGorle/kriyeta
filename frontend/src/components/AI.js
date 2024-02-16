// const generateThroughAI = (Location) => {
//     console.log("ai generation started...");
//     const updatedChapter = [...formData.chapters];
//     let result = updatedChapter;

//     if (Location.length >= 1) result = result[Location[0]];
//     if (Location.length >= 2) result = result.topics[Location[1]];
//     if (Location.length >= 3) result = result.subTopics[Location[2]];
//     if (Location.length >= 4) result = result.subSubTopics[Location[3]];

//     const question = result.aiAskedDescription;
//     const Answer = "this is the currently generated ai response";
//     console.log("Question : ", question);
//     result.descritpion = Answer;

//     setFormData({
//       ...formData,
//       chapters: updatedChapter,
//     });
//   };

//   export default generateThroughAI;