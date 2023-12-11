import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
/* import { SocialProjects, UXUIProjects, MotionProjects } from '../components/Content'; // Import projects directly */
import ImageFull from '../components/ImageFull';
import Footer from '../components/Footer';


// Use require.context to dynamically import all files within './projects'
const socialContext = require.context('../projects/social', false, /\.js$/);
const uxuiContext = require.context('../projects/uxui', false, /\.js$/);
const motionContext = require.context('../projects/motion-vfx', false, /\.js$/);

// Get an array of all project file paths
const socialFilePaths = socialContext.keys();
const uxuiFilePaths = uxuiContext.keys();
const motionFilePaths = motionContext.keys();

// Import each project dynamically
const socialProjects = socialFilePaths.map((filePath) => socialContext(filePath).default);
const uxuiProjects = uxuiFilePaths.map((filePath) => uxuiContext(filePath).default);
const motionProjects = motionFilePaths.map((filePath) => motionContext(filePath).default);

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { projectName } = useParams();




  // Find the corresponding project based on the title (not an id)
  const project = socialProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName) ||
    uxuiProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName) ||
    motionProjects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName);

  // Log information for debugging
  console.log('Selected Project:', project);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div class="bg-white dark:bg-slate-800">
      <Menu />
      <ImageFull image={project.image} altText={project.title} />
      <div class="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-32 grid lg:grid grid-cols-5">
        <div class="max-w-screen-md mb-8 lg:mb-16 col-span-4">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{project.title}</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">{project.description}</p>
        </div>
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h3 class="mb-4 text-gray-500 dark:text-gray-400"><label class="font-bold text-gray-900 dark:text-gray-200">Year:</label> <br/>{project.year}</h3>
          <h3 class="mb-4 text-gray-500 dark:text-gray-400"><label class="font-bold text-gray-900 dark:text-gray-200">Scope:</label> <br/>{project.scope}</h3>
          <h3 class="mb-4 text-gray-500 dark:text-gray-400"><label class="font-bold text-gray-900 dark:text-gray-200">Duration:</label> <br/>{project.duration}</h3>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default ProjectPage;