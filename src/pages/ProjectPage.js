import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { SocialProjects, UXUIProjects, MotionProjects } from '../components/Content'; // Import projects directly


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
      <div>
        <Menu />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add more project details as needed */}
      </div>
    );
  };
  
  export default ProjectPage;