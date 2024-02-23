import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
/* import { SocialProjects, UXUIProjects, MotionProjects } from '../components/Content'; // Import projects directly */
import ImageFull from "../components/ImageFull";
import Footer from "../components/Footer";
import { LinkIcon } from "@heroicons/react/24/outline";
import * as Icons from "@heroicons/react/24/outline";
import RecentProjects from "./recentprojects";

// Use require.context to dynamically import all files within './projects'
const uxuiContext = require.context("../projects/uxui", false, /\.js$/);
const motionContext = require.context("../projects/motion-vfx", false, /\.js$/);

// Get an array of all project file paths
const uxuiFilePaths = uxuiContext.keys();
const motionFilePaths = motionContext.keys();

// Import each project dynamically
const uxuiProjects = uxuiFilePaths.map(
  (filePath) => uxuiContext(filePath).default
);
const motionProjects = motionFilePaths.map(
  (filePath) => motionContext(filePath).default
);

const ProjectPage = () => {
  const { projectName } = useParams();
  const [projectFolder, setProjectFolder] = useState("");

  useEffect(() => {
    document.title =
      "Matheus Gomes - " +
      projectName.charAt(0).toUpperCase() +
      projectName.slice(1).replace(/-/g, " ");

    const checkFilePath = (filePath, folder) => {
      const lowerCaseFilePath = filePath.toLowerCase();
      return lowerCaseFilePath.includes(folder.toLowerCase());
    };

    const findProjectFolder = (projectName) => {
      const isFoundInUxui = uxuiFilePaths.some((filePath) =>
        checkFilePath(filePath, projectName)
      );
      const isFoundInMotionVfx = motionFilePaths.some((filePath) =>
        checkFilePath(filePath, projectName)
      );

      if (isFoundInUxui) {
        return "uxui";
      } else if (isFoundInMotionVfx) {
        return "motion-vfx";
      } else {
        return "Pasta não encontrada";
      }
    };

    const projectFolder = findProjectFolder(projectName);
    setProjectFolder(projectFolder);

    // Scroll to the top when the component mounts or the projectName changes
    window.scrollTo(0, 0);
  }, [projectName]);

  // Find the corresponding project based on the title (not an id)
  const project =
    uxuiProjects.find(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectName
    ) ||
    motionProjects.find(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectName
    );

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <ImageFull
        image={project.image}
        altText={project.title}
        color={project.color}
      />
      <Menu className="absolute top-0 w-full *:text-white bg-gradient-to-b from-black/30 " />
      <div
        class="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out"
        id="content"
      >
        <div class=" mx-auto max-w-screen-xl py-16 px-6 2xl:px-0 lg:gap-8 xl:gap-8 lg:pt-32">
          <div class="d-block lg:grid grid-cols-1 lg:grid-cols-5">
            <div class="max-w-screen-md mb-8 lg:mb-16 col-span-4">
              <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p class="mt-8 text-gray-500 sm:text-xl dark:text-gray-400 text-balance">
                {project.description}
              </p>
              {project.link && (
                <>
                  <a
                    href={"http://" + project.link}
                    class="mt-8 text-gray-900 dark:text-gray-400 text-center flex gap-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />{" "}
                    Visit their website
                  </a>
                </>
              )}
            </div>
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <div class="mb-4 text-gray-500 dark:text-gray-400">
                <label class="font-bold text-gray-900 dark:text-gray-200">
                  Year:
                </label>
                <br />
                {project.year}
              </div>
              <div class="mb-4 text-gray-500 dark:text-gray-400">
                <label class="font-bold text-gray-900 dark:text-gray-200">
                  Scope:
                </label>
                <br />
                {project.scope &&
                  project.scope.split(",").map((scope, index) => (
                    <span
                      key={index}
                      className="flex flex-wrap gap-2 w-max rounded-full bg-gray-50 text-gray-800 my-2 px-2.5 py-0.5   dark:bg-gray-700 dark:text-gray-200"
                    >
                      {scope.trim()}{" "}
                      {/* Use trim to remove any leading or trailing whitespace */}
                    </span>
                  ))}
              </div>
              {project.duration && (
                <>
                  <div class="mb-4 text-gray-500 dark:text-gray-400">
                    <label class="font-bold text-gray-900 dark:text-gray-200">
                      Duration:
                    </label>
                    <br />
                    {project.duration}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mx-auto dark:border-gray-700" />

        <div class="bg-white dark:bg-slate-800 mx-auto w-full mt-8 lg:mt-24 mb-32 lg:mb-32 xl:px-0 ">
          <div class="flex justify-between mx-auto ">
            <article class="mx-auto w-full">
              {project.contents &&
                project.contents.map((content, index) => (
                  <div key={index}>
                    {content.title && (
                      <>
                        <section>
                          <div className="lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
                            <h2 className="mt-16 mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                              {content.title}
                            </h2>
                          </div>
                        </section>
                      </>
                    )}
                    {content.description && (
                      <>
                        <section>
                          <div className="lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
                            <p className="my-3 text-gray-500 sm:text-xl dark:text-gray-400 text-pretty">
                              {content.description}
                            </p>
                          </div>
                        </section>
                      </>
                    )}

                    {content.columns && (
                      <>
                        <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8 lg:py-16 py-3">
                          {content.columns.map((column, columnIndex) => (
                            <span
                              key={columnIndex}
                              class="d-block w-full bg-slate-100 py-4 px-6"
                            >
                              {column.icon &&
                                (() => {
                                  const IconComponent =
                                    Icons[column.icon];
                                  return (
                                    <p className="text-gray-400 text-sm my-2">
                                      <IconComponent className="size-6" />
                                    </p>
                                  );
                                })()}

                              <p class="font-bold text-gray-600 my-2">
                                {column.title}
                              </p>
                              <p class="text-gray-400 text-sm my-2">
                                {column.text}
                              </p>
                              {column.aditional && (
                                <p class="text-gray-400 text-sm my-2">
                                  {column.aditional}
                                </p>
                              )}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {content.credits && (
                      <section>
                        <div className="lg:max-w-3xl mx-auto w-full px-6 lg:px-0">
                          <p className="mb-6 text-gray-500 sm:text-xl dark:text-gray-400 text-pretty">
                            {content.credits.map((credit, creditsIndex) => (
                              <span key={creditsIndex}>
                                {credit.text}
                                {credit.link && (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: credit.link,
                                    }}
                                  />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </section>
                    )}

                    {content.img && (
                      <>
                        <section>
                          <div className="lg:max-w-7xl mx-auto w-full lg:py-16 py-3 px-6 lg:px-0">
                            <img
                              src={content.img}
                              alt=""
                              className="w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                            />
                          </div>
                        </section>
                      </>
                    )}
                    {content.imgBig && (
                      <>
                        <section>
                          <div className="lg:max-w-screen-2xl mx-auto w-full lg:py-16 py-3">
                            <img
                              src={content.imgBig}
                              alt=""
                              className="w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                            />
                          </div>
                        </section>
                      </>
                    )}

                    {content.Duo && (
                      <>
                        <section>
                          <div className="max-w-screen-xl mx-auto columns-1 lg:columns-2 lg:gap-32 ">
                            {content.Duo.map((duo, duoIndex) => (
                              <div
                                key={duoIndex}
                                className="grid max-w-screen-2xl mx-auto lg:py-16 py-3"
                              >
                                <div className="mr-auto place-self-center w-full px-6 lg:px-0">
                                  <img
                                    src={duo.imgDuo}
                                    alt=""
                                    className="w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      </>
                    )}

                    {content.figma && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={
                                content.figma +
                                "%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26mode%3Ddesign&hide-ui=1"
                              }
                              allowfullscreen
                              class="w-full h-lvh lg:border-2 border-slate-50 dark:border-slate-800"
                            ></iframe>
                            <h6 class="mt-4 text-gray-700  dark:text-gray-400 text-center ">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}

                    {content.canva && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={content.canva}
                              allowfullscreen
                              class="w-full aspect-video border-2 border-slate-50 dark:border-slate-800"
                            ></iframe>
                            <h6 class="mt-4  text-gray-700  dark:text-gray-400 text-center">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}

                    {content.vimeo && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={
                                content.vimeo +
                                "&title=0&byline=0&portrait=0&sidedock=0"
                              }
                              class="w-full aspect-video border-2 border-slate-50 dark:border-slate-800"
                              frameborder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            <h6 class="mt-4  text-gray-700  dark:text-gray-400 text-center">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}

                    
{content.html && (
                      <section>
                      <div className="mr-auto w-full lg:max-w-screen-xl py-3 lg:py-16 mx-auto">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: content.html,
                                    }}
                                  />
                        </div>
                      </section>
                    )}


                  </div>
                ))}
            </article>
          </div>
        </div>

        <RecentProjects
          currentProject={`./${projectFolder}/${projectName}.js`}
        />

        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
