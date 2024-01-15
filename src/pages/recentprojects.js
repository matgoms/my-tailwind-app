import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const RecentProjects = ({ currentProject }) => {
 
  // Use require.context to dynamically import all files within './projects'
  const projectsContext = require.context("../projects", true, /\.js$/);

 // Get an array of all project file paths
 const projectFilePaths = projectsContext.keys();
 const excludedProjects = ['./social/social-posts.js', currentProject];
 

 // Exclude a specific project file (adjust the filename as needed)
  const filteredFilePaths = projectFilePaths.filter(
    (project) => !excludedProjects.includes(project) && project !== currentProject
  );
   


 // Import each project dynamically
 const recentProjects = filteredFilePaths.map((project) => {
   const projectData = projectsContext(project);
   // Assuming each project file exports a default object
   return projectData.default;

});



  return (
    <section class="bg-slate-50 dark:bg-slate-800">
      <div class="py-16 mx-auto max-w-screen-2xl lg:py-40 ">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-24 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Recent Projects
          </h2>
          <p class="font-regular text-gray-500 sm:text-xl dark:text-gray-400">
          Here are a few projects I've completed recently.
          </p>
        </div>
        <div class="grid lg:grid-cols-3 gap-24">
          {recentProjects.map((project) => (
            <div key={project.id}>
              {/* Render project details */}

              <Link
                to={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <article class="bg-transparent">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className={`transition aspect-[4/3] ease-in duration-300 hover:opacity-80  w-full mb-2  object-cover object-center ${project.color}`}
                  />
                  <div class="py-6">
                    <div class="flex justify-between align-middle mb-4">
                      <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{project.title}</a>
                      </h2>
                      <span
                        href="#"
                        class="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-slate-100"
                      >
                        Read more
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class="justify-between items-center text-gray-500">
                      {project.scope &&
                        project.scope.split(",").map((scope, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-transparent border-2 border-slate-600 text-slate-600 my-2 mr-2 px-2.5 py-0.5 dark:text-gray-200 dark:border-slate-200"
                          >
                            {scope.trim()}{" "}
                            {/* Use trim to remove any leading or trailing whitespace */}
                          </span>
                        ))}
                    </div>
                    <p class="my-4 font-light text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Link>
              {/* Add more project details as needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
