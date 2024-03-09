import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";





 const AddSectionPage = ()=> {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");


  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-white rounded-lg shadow-2xl">
        <div className="mb-2 flex justify-center">
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/mykriyeta.appspot.com/o/knowledgebaseFiles%2F7639d1e0-cdcb-11ee-add7-ad44366ebdbf?alt=media&token=0ad89b6f-9034-4176-8008-5a5af83b3d76"
            className="w-32"
          /> */}
        </div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-tight text-blue-500 ">
            Add Section
          </h2>

          <form className="mt-8">
            <div className="space-y-5">
              <div className="flex gap-4"> 
             {/* //////////////////////  left side section */}
             <div>
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Class Name{" "}
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
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  description{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                
                    placeholder="Course Name"
                    id="name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              </div>

           {/* //////////////second half */}
           <div className=" flex flex-col justify-between">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Duration{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                
                    placeholder="Course Name"
                    id="name"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  ></textarea>
                </div>
              </div>
            
            
              <div>
                {error && <div className="text-s text-red-500"> {error} </div>}
                <button
                  type="button"
                  // onClick={() => {
                
                  // }}
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
                >
                  Create Class <ArrowRight className="ml-2" size={16} />
                </button>
              </div>

              </div>

              </div>


            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddSectionPage