import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link,  useLocation } from "react-router-dom";

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

  // Sort projects based on the 'year' property
const sortedUxui = uxuiProjects.sort((a, b) => {
  const yearA = parseInt(a.year, 10);
  const yearB = parseInt(b.year, 10);

  return yearB - yearA; // Sorting in descending order (newest first)
});

 // Sort projects based on the 'year' property
 const sortedMotion = motionProjects.sort((a, b) => {
  const yearA = parseInt(a.year, 10);
  const yearB = parseInt(b.year, 10);

  return yearB - yearA; // Sorting in descending order (newest first)
});




  const UXUI = ({ title, description, thumb, color, status, number }) => {
    return (
      <div className="break-inside-avoid-column">
        <div className="transition ease-in duration-300 hover:-translate-y-4 w-full mb-6  relative">
        <img
          src={thumb}
          alt={title}
          className={` aspect-[4/3] object-cover object-center ${color} hover:opacity-90 transition ease-in duration-700 opacity-0`}
          onLoad={(e) => e.target.classList.add('opacity-100')}
        />
        {status  && (
                        <div className="absolute top-4 right-4 ">
                          
                       <span
                            className="bg-amber-400 inline-flex items-center rounded-full  text-slate-800 px-4 py-2">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {status}
                           
                          </span>
                      </div>
                  )}

</div> 
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-balance">{description}</p>
      </div>
    );
  };


  const Social = ({ contents, title }) => {
    
   //guarde, comprint, lello, veni, dne, pp, skp, fera, andre, goodi,  //
    return (
      <div className="mb-24">
        {contents &&
         contents.map((content, index) => (
            <div key={index}>
              {content.Img && (
                <>
                  <img
                    src={content.Img}
                    alt={title}
                    className="rounded-2xl outline-slate-300 hover:outline-offset-[8px] transition-all ease-in duration-200  dark:hover:outline-slate-600 dark:outline-slate-700  outline-1 outline w-full mb-24 object-fit object-center opacity-0 "
                    onLoad={(e) => e.target.classList.add('opacity-100')}
                  />
                </>
              )}
            </div>
          ))}
      </div>
    );
  };
  const Motion = ({ title, description, thumb, color, status  }) => {
    return (
      <div >
        <div className="transition ease-in duration-300 hover:-translate-y-4 w-full mb-6 relative">
        <img
          src={thumb}
          alt={title}
          className="hover:opacity-90 w-full mb-6 aspect-[4/3] object-cover object-center ${color} transition opacity-0 duration-700"
          onLoad={(e) => e.target.classList.add('opacity-100')}
        />
         {status  && (
                        <div className="absolute top-4 right-4 ">
                          
                       <span
                            className="bg-amber-400 inline-flex items-center rounded-full  text-slate-800 px-4 py-2">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {status}
                          </span>
                      </div>
                  )}
                  </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-balance">{description}</p>
      </div>
    );
  };

  const tabs = [
    {
      classDefault:
        "inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-slate-600 ui-selected:border-slate-600  ui-selected:active dark:ui-selected:text-slate-200 dark:ui-selected:border-slate-200 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300 transition ease-in-out duration-500",
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
    if (categoryFromState) {
      window.scrollTo(0, 650);
    }
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

        default:
        setActiveTabIndex(0);
        break;
      
        window.scrollTo(0, 650);
    }
    
  }, [location.state]);

  return (
    <section className="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out py-24 lg:py-24">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className=" ">
          <Tab.Group selectedIndex={activeTabIndex} onChange={handleTabChange}>
            <Tab.List className="text-sm lg:text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px ">
              {tabs.map((tab, index) => (
                <>
                  <Tab className={tab.classDefault}>UX/UI Design</Tab>

                  <Tab className={tab.classDefault}>Social media</Tab>

                  <Tab className={tab.classDefault}>3D/Motion/VFX</Tab>
                </>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        UX/UI Projects
                      </h1>
                      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                      Here are a few design projects that showcase my skills and passion for design.
                      </p>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-24 ">
                    {uxuiProjects.map((project, index) => (
                      <Link
                        key={index}
                        to={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <UXUI key={index} {...project}  />
                      </Link>
                    ))}
                  </div>
                </>
              </Tab.Panel>
              <Tab.Panel>
                <>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        Social media
                      </h1>
                      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                      A compilation of social media posts I created for both large and small companies.
                      </p>
                    </div>
                  </div>
                  <div className="columns-1 md:columns-2 lg:columns-3 md:gap-24">
                    {socialProjects.map((project, index) => (
                      <Social key={index} {...project} />
                    ))}
                  </div>
                </>
              </Tab.Panel>
              <Tab.Panel>
                <>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-24">
                      <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        3D, Motion and VFX
                      </h1>
                      <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                      A collection of projects I created as a hobbie or freelancer job.
                      </p>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-24 ">
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
