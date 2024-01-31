import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

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

// Sort projects based on the 'year' property
const sortedProjects = recentProjects.sort((a, b) => {
  const yearA = parseInt(a.year, 10);
  const yearB = parseInt(b.year, 10);

  return yearB - yearA; // Sorting in descending order (newest first)
});


const limitedProjects = sortedProjects.slice(0, 6);
console.log(limitedProjects);

  return (
    <section class="bg-slate-50 dark:bg-slate-900/40 transition-colors duration-1000 ease-in-out">
      <div class="py-16 mx-auto max-w-screen-xl lg:py-40 px-6">
      <div class="lg:flex mb-16 justify-between items-center">
        <div class="">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Other projects
          </h2>
          <p class="font-regular text-gray-500 sm:text-xl dark:text-gray-400">
          Here are a few projects I've worked on recently.
          </p>
 </div>
          <h3 class="text-lg font-medium racking-tight text-gray-900 dark:text-white">
                        <a href="/projects" class="flex items-center gap-4 hover:underline"> 
                        See all projects
                        <ArrowRightCircleIcon class="size-6 text-gray-400 dark:text-gray-600"/>
                      </a>
                      </h3>
                      </div>
       
        <div class="grid lg:grid-cols-3 gap-16">
          {limitedProjects.map((project) => (
            <div key={project.id}>
              {/* Render project details */}

              <Link
                to={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <article class="bg-transparent">
                <div class="relative">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className={`transition hover:saturate-[.5] aspect-[4/3] ease-in duration-300 hover:opacity-80  w-full mb-2  object-cover object-center ${project.color}`}
                  />
                  {project.status  && (
                        <div class="absolute top-4 right-4 ">
                          
                       <span
                            className="bg-amber-400 inline-flex items-center rounded-full  text-gray-800 px-4 py-2"
                          >
                            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {project.status}
                          </span>
                      </div>
                  )}

                  </div>
                  <div class="pt-6">
                    <div class="flex justify-between align-middle mb-4">
                      <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{project.title}</a>
                      </h2>
                      <span
                        href="#"
                        class="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-gray-100"
                      >
                       {/*  Read more */}
                       <ArrowRightCircleIcon class="size-6 text-gray-400 dark:text-gray-600"/>
                      </span>
                    </div>
                    <div class="justify-between items-center text-gray-500">
                      {project.scope &&
                        project.scope.split(",").map((scope, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center font-medium rounded-full text-sm bg-transparent border-[1px] border-slate-600/20 text-gray-600 my-2 mr-1.5 px-2.5 py-0.5 dark:text-gray-400 dark:border-slate-400/20"
                          >
                            {scope.trim()}{" "}
                            {/* Use trim to remove any leading or trailing whitespace */}
                          </span>
                        ))}
                    </div>
                    <p class="mt-4 text-gray-500 dark:text-gray-500 text-pretty">
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
