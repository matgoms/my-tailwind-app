import React, { useEffect, useState } from "react";
import cosmic from "../bucketclient";
import { Tab } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const ProjectsList = ({ category, quantity }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    
    const path = window.location.pathname;
      cosmic.objects.find({
        type: category,
      })
        .then((response) => {
          setPosts(response.objects);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching 'design' category:", error);
        });
    window.scrollTo(0, 0);
  }, []);

  
let limitedProjects; // Declare the variable outside the conditional statement

if (quantity) {
  // If quantity is truthy, slice the posts array
  limitedProjects = posts.slice(0, quantity);
} else {
  // Otherwise, use the full posts array
  limitedProjects = posts;
}

  return (
   
        <div className=" ">
           {isLoading && (
     
           <div className="mx-auto flex">
                          <span className="inline-flex items-center rounded-full  text-slate-800 dark:text-white px-4 py-2 text-sm">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800 dark:text-white "
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Loading
                          </span>
                        </div>

)}

{!isLoading && (
     
          <div className="grid lg:grid-cols-2 gap-24">
            {limitedProjects.map((post) => (
              <div key={post.id}>
                <Link to={`/projects/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className="break-inside-avoid-column">
                    <div className="transition ease-in duration-500 hover:-translate-y-4 w-full mb-6  relative">
                      <img
                        src={post.thumbnail + '?auto=format'}
                        alt={post.title}
                        className={` object-cover object-center hover:saturate-0 transition ease-in duration-500 opacity-0`}
                        onLoad={(e) => e.target.classList.add("opacity-100")}
                      />
                      {post.metadata.wip && (
                        <div className="absolute top-4 right-4 ">
                          <span className="bg-amber-400 inline-flex items-center rounded-full  text-slate-800 px-4 py-2 text-sm">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Work in progress
                          </span>
                        </div>
                      )}
 </div>
                      <div className="flex justify-between align-middle mb-4">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">{post.title}</a>
                        </h2>
                        <span
                          href="#"
                          className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-gray-100"
                        >
                          <ArrowRightCircleIcon className="size-6 text-gray-400 dark:text-gray-600" />
                        </span>
                      </div>
                      <div className="justify-between items-center text-gray-500">
                        {post.metadata.scope &&
                          post.metadata.scope.split(",").map((scop, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center font-medium rounded-full text-sm bg-transparent border-[1px] border-slate-600/20 text-gray-600 my-2 mr-1.5 px-2.5 py-0.5 dark:text-gray-400 dark:border-slate-400/20"
                            >
                              {scop.trim()}{" "}
                              {/* Use trim to remove any leading or trailing whitespace */}
                            </span>
                          ))}
                      </div>
                      <p className="mt-4 text-gray-500 dark:text-gray-500 text-pretty">
                        {post.metadata.excerpt}
                      </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
)}
        </div>
  );
}

export default ProjectsList;
