import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../configs/config";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { storage } from "../firebase";
import {
  list,
  listAll,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v1 as uuid } from "uuid";

export default function CreateCoursePage() {
  const [error, setError] = useState(null);  
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [duration, setDuration] = useState("");
  const [authors, setAuthors] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [domain , setDomain] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [upload, setUpload] = useState(null);

  const uploadTumbnail = async (e) => {
    e.preventDefault();
    const ThumbnailId = uuid();
    console.log("upload clicked");
    if (upload == null) return;
    const thumbnailRef = ref(storage, `thumbnails/${ThumbnailId}`);
    uploadBytes(thumbnailRef, upload).then((data) => {
      console.log("image uploaded ");
      const thumbnailListRef = ref(storage, "thumbnails/");
      listAll(thumbnailListRef).then((response) => {
        const item = response.items.filter((item) => {
          return item.name == ThumbnailId;
        });
        getDownloadURL(item[0]).then((url) => {
          console.log("download url ", url);
          setThumbnailUrl(url);
          
        });
      });
    });
  };

  const handleCreateCourse = async () => {
    try {
      const response = await fetch(`${BASE_URL}course/create-course`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          about,
          duration,
          thumbnailUrl,
          domain
        }),
      });

      const data = await response.json();
      console.log("-----course data : ", data);
      if (data.status === "failed") {
         setError(data.message);
      } else {
        console.log(data);
        navigate('/');
      }
    } catch (err) {
         setError("something went wrong. try Again!");
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create Course
          </h2>
          
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Course Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Course Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  About course{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="write about course goals and objectives"
                    id="email"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Set Duration"
                    id="password"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlForfor="file_input"
                >
                  Upload file
                </label>
                <button
                  className=""
                  type="button"
                  onClick={(e) => {
                    uploadTumbnail(e);
                  }}
                >
                  upload
                </button>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  onChange={(e) => setUpload(e.target.files[0])}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Course Domain{" "}
                </label>
                <div className="mt-2">
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    id="category"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option>Computer Science</option>
                    <option>Artificial Inteligence</option>
                    <option>Digital Electronics</option>
                    <option>Machine Design</option>
                    <option>System Design</option>
                    <option>Communication</option>
                    <option>Mechenical Engineering</option>
                    <option>Mathematics</option>
                  </select>
                </div>
              </div>
              
              <div>
              {error && <div className="text-s text-red-500"> {error} </div>}
                <button
                  type="button"
                  onClick={() => {
                    handleCreateCourse();
                  }}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Course <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
