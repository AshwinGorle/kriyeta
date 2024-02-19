import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../configs/config';
import { useRef } from 'react';
import ShowCourse from '../components/ShowCourse';
import ShowSideIndex from '../components/showSideIndex';


const ReadCoursePage = () => {

  const params = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

   useEffect(()=>{
    console.log("fetching read couse -----")
        const getCourse = async ()=>{
            const courseId = params.courseId;
            try{
            const response = await fetch(`${BASE_URL}course/get-course/${courseId}`)
            const data = await response.json();
            setCourse(data.data);
            console.log("fetched course : ", course);
            }catch(err){
              setError("Sorry ! could not fetch course");
              console.log("course feching error : ",err)
            }

        }

         getCourse();
   },)

   const Mycourse  = {
    chapters: [
      {
        chapterName: "Chapter  1",
        descritpion: "chapter  description",
        aiAskedDescription: "",
        topics: [
          {
            topicName: "topic 1",
            descritpion: "description for topic1",
            aiAskedDescription: "Lasws of thermo dynamics in brief",
            subTopics: [
              {
                subTopicName: "subtopic 1",
                descritpion: "descritption for subTopic 1",
                aiAskedDescription: "",
                subSubTopics: [
                  {
                    subSubTopicName: "sub sub topic 1",
                    descritpion: "description for sub sub topic 1",
                    aiAskedDescription: "",
                    subSubSubTopics: [],
                    reference: 5
                  },
                  {
                    subSubTopicName: "sub sub topic 2",
                    descritpion: "description for sub sub topic 2",
                    aiAskedDescription: "",
                    subSubSubTopics: [],
                    reference: 5
                  }
                ],
                reference: 3
              },
              {
                subTopicName: "subtopic 2",
                descritpion: "descritption for subTopic 1",
                aiAskedDescription: "",
                subSubTopics: [],
                reference: 4
              }
            ],
            reference: 1
          },
          {
            topicName: "topic 2",
            descritpion: "escription for topic 2",
            aiAskedDescription: "",
            subTopics: [],
            reference: 0
          }
        ],
        reference: 1
      },
      {
        chapterName: "chapter 2",
        descritpion: "description for chapter 2",
        aiAskedDescription: "",
        topics: [
          {
            topicName: "topic 1",
            descritpion: "description for chapter 2 topic 1",
            aiAskedDescription: "",
            subTopics: [],
            reference: 1
          },
          {
            topicName: "topic 2",
            descritpion: "description for chapter 2 topic 2",
            aiAskedDescription: "",
            subTopics: [],
            reference: 2
          }
        ],
        reference: 0
      }
    ]
  }

  const sectionRefs = useRef([]);

   


  return (
    <div className='flex'>
      {console.log("----------------------------------",course.content)}
      <ShowSideIndex formData={course} sectionRefs={sectionRefs}/>
      <ShowCourse formData = {course} sectionRefs={sectionRefs} />
    </div>
  )
}

export default ReadCoursePage
