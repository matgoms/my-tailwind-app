import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

export default function Content() {
  const socialContext = require.context("../projects/social", false, /\.js$/);
  const uxuiContext = require.context("../projects/uxui", false, /\.js$/);
  const motionContext = require.context(
    "../projects/motion-vfx",
    false,
    /\.js$/
  );

  // Get an array of all project file paths
  const socialFilePaths = socialContext.keys();
  const uxuiFilePaths = uxuiContext.keys();
  const motionFilePaths = motionContext.keys();

  // Import each project dynamically

 

  const socialProjects = socialFilePaths.map((filePath) => {
    const projectData = socialContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
  });

  const uxuiProjects = uxuiFilePaths.map((filePath) => {
    const projectData = uxuiContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
  });

  const motionProjects = motionFilePaths.map((filePath) => {
    const projectData = motionContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
  });

  // Example functional component to render projects
  const Projects = ({ projects }) => {
    
    return (
      <div>
        {projects.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Add other project details as needed */}
          </div>
        ))}
      </div>
    );
  };

  /*    const SocialProjects = () => <Projects projects={socialProjects} />;
    const UXUIProjects = () => <Projects projects={uxuiProjects} />;
    const MotionProjects = () => <Projects projects={motionProjects} />; */

  const UXUI = ({ title, description, thumb, color }) => {
    return (
      <div className="mb-24 break-inside-avoid-column">
        <img
          src={thumb}
          alt={title}
          className={`transition ease-in duration-300 hover:opacity-80 hover:-translate-y-4 w-full mb-6 hover:saturate-[.3] aspect-[4/3] object-cover object-center ${color}`}
        />
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    );
  };


  const Social = ({ contents, title }) => {
    const shuffleArray = (array) => {
      let shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
   //guarde, comprint, lello, veni, dne, pp, skp, fera, andre, goodi,  //
    return (
      <div className="mb-24">
        {contents &&
         shuffleArray(contents).map((content, index) => (
            <div key={index}>
              {content.Img && (
                <>
                  <img
                    src={content.Img}
                    alt={title}
                    className="rounded-2xl outline-slate-300 hover:outline-offset-[8px] transition-all ease-in duration-75  dark:hover:outline-slate-600 dark:outline-slate-700 outline-1 outline w-full mb-24 object-fit object-center"
                  />
                </>
              )}
            </div>
          ))}
      </div>
    );
  };
  const Motion = ({ title, description, thumb, color  }) => {
    return (
      <div className="mb-24">
        <img
          src={thumb}
          alt={title}
          className="transition ease-in duration-300 hover:opacity-80 hover:-translate-y-4 w-full mb-6 hover:saturate-[.3] min-h-[30rem] object-cover object-center ${color}"
        />
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    );
  };

  const tabs = [
    {
      classDefault:
        "inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-blue-600 ui-selected:border-blue-600  ui-selected:active dark:ui-selected:text-blue-500 dark:ui-selected:border-blue-500 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300 transition ease-in-out duration-500",
    },
  ];

  const location = useLocation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    // Atualiza o estado da guia com base nos dados do estado da localização
    const categoryFromState = location.state?.category;

    switch (categoryFromState) {
      case 'social':
        setActiveTabIndex(1);
        break;
      case 'design':
        setActiveTabIndex(0);
        break;
      case 'motion':
        setActiveTabIndex(2);
        break;
      // Adicione mais casos conforme necessário

      // O caso padrão será 'social' se nenhum estado de categoria for fornecido
      default:
        setActiveTabIndex(0);
        break;
    }
    
  }, [location.state]);

  return (
    <section class="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 py-8 lg:py-24">
      <div class="max-w-screen-xl px-5 mx-auto">
        <div class=" ">
          <Tab.Group selectedIndex={activeTabIndex} onChange={handleTabChange}>
            <Tab.List class="text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px ">
              {tabs.map((tab, index) => (
                <>
                  <Tab className={tab.classDefault}>UX/UI Design</Tab>

                  <Tab className={tab.classDefault}>Social media</Tab>

                  <Tab className={tab.classDefault}>Motion/VFX</Tab>
                </>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <>
                  <div class="flex flex-col">
                    <div class="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        UX/UI Projects
                      </h1>
                      <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                        Street art subway tile salvia four dollar toast bitters
                        selfies quinoa yuccie synth meditation iPhone
                        intelligentsia prism tofu. Viral gochujang bitters
                        dreamcatcher.
                      </p>
                    </div>
                  </div>
                  <div class="columns-1 lg:columns-2 lg:gap-24">
                    {uxuiProjects.map((project, index) => (
                      <Link
                        key={index}
                        to={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <UXUI key={index} {...project} />
                      </Link>
                    ))}
                  </div>
                </>
              </Tab.Panel>
              <Tab.Panel>
                <>
                  <div class="flex flex-col">
                    <div class="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        Social media stuff
                      </h1>
                      <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                        Street art subway tile salvia four dollar toast bitters
                        selfies quinoa yuccie synth meditation iPhone
                        intelligentsia prism tofu. Viral gochujang bitters
                        dreamcatcher.
                      </p>
                    </div>
                  </div>
                  <div class="columns-1 md:columns-2 lg:columns-3 md:gap-24">
                    {socialProjects.map((project, index) => (
                      <Social key={index} {...project} />
                    ))}
                  </div>
                </>
              </Tab.Panel>
              <Tab.Panel>
                <>
                  <div class="flex flex-col">
                    <div class="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        Motion and VFX
                      </h1>
                      <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                        Street art subway tile salvia four dollar toast bitters
                        selfies quinoa yuccie synth meditation iPhone
                        intelligentsia prism tofu. Viral gochujang bitters
                        dreamcatcher.
                      </p>
                    </div>
                  </div>
                  <div class="columns-1 lg:columns-2 lg:gap-24">
                    {motionProjects.map((project, index) => (
                      <Link
                        key={index}
                        to={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <Motion key={index} {...project} />
                      </Link>
                    ))}
                  </div>
                </>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
