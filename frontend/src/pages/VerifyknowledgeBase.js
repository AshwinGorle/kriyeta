import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../configs/config";

const VerifyknowledgeBase = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [knowledgebases, setKnowledgebases] = useState([]);
  const { courseId } = params;
  useEffect(() => {
    const fetchKnowledgeBase = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}course/get-knowledgebases/${courseId}`
        );

        const data = await response.json();
        setData(data.data.knowledgeBase);
      } catch (error) {}
    };
    fetchKnowledgeBase();
  }, []);

  useEffect(() => {
    if (data) {
      setKnowledgebases(data);
    }
  }, [data]);

  return (
    <div>
      {knowledgebases &&
        knowledgebases.map((resource) => {
          <div className="">
            <div className="flex align-center justify-center flex-col">
              x
              <div>
                <h1>{resource.name}</h1>
              </div>
            </div>
            <input
              type="url"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"
              placeholder="http://xyz.com"
              required
              value={resource.link}
            />
          </div>;
        })}
    </div>
  );
};

export default VerifyknowledgeBase;
