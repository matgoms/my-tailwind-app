import { React, useEffect } from "react";
import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { ScrollRestoration, useLocation } from "react-router-dom";
import ProjectsList from "../components/ProjectsList";
import SocialList from "../components/SocialList";

const Projects = () => {
  const path = window.location.pathname;
  
  useEffect(() => {
    if (path === '/projects') {
      document.title = "Matheus Gomes - Projects";
    } else if (path === '/vfx') {
      document.title = "Matheus Gomes - 3D / Motion / VFX";
    } else if (path === '/social'){
      document.title = "Matheus Gomes - Social";
    }
  }, [path]);

  
  let HeroSmallTitle; // Declare the variable outside the conditional statement

  let category;

if (path === '/projects') {
  HeroSmallTitle = [
    {
      title: "Crafting Creative Design Journeys",
      description:
        "My design projects showcase companies and startups committed to simplifying bureaucracy, crafting user-friendly training apps, revealing ancestral stories through personalized platforms, and more.",
    },
  ];
  category = 'uxuis';
      
} else if (path === '/vfx') {
  HeroSmallTitle = [
    {
      title: "Personal Creations Showcase",
      description:
        "This is a collection of 3D, Motion and/or VFX's projects I created as a hobbie or freelancer job.",
    },
    /* { title: 'Title 2', description: 'Description 2' }, */
    // Add more items as needed
  ];

  category = '3d-motion-and-vfxes';
} else if (path === '/social'){ 
  
  HeroSmallTitle = [
    {
      title: "Social Media Content",
      description:
        "This is a compilation of social media posts I created for both large and small companies while working on advertising agencies.",
    },
    /* { title: 'Title 2', description: 'Description 2' }, */
    // Add more items as needed
  ];

  category = 'socials';
}

  return (
    <>
      <div className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out">
        <Menu />
        <HeroSmall titles={HeroSmallTitle} />
        <section className="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out py-24">
          <div className="max-w-screen-xl mx-auto px-6">
            { category === 'socials' ? (
              <SocialList/>
            ) : (
            <ProjectsList category={category}/>
          )
          }
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
