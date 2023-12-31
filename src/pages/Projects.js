import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";



const Projects = () => {
    const HeroSmallTitle = [
      { title: 'Crafting Creative Design Journeys', description: 'My design projects showcase companies and startups committed to simplifying bureaucracy, crafting user-friendly training apps, revealing ancestral stories through personalized platforms, and more.' },
      /* { title: 'Title 2', description: 'Description 2' }, */
      // Add more items as needed
    ];
  
    return (
        <>
         <div class="bg-white dark:bg-slate-800">
            <Menu />
            <HeroSmall titles={HeroSmallTitle} />
            <Content />
            <Footer />
        </div>
        </>
    );

};

export default Projects;
  

