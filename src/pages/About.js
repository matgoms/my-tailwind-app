import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";

const About = () => {
    const HeroSmallTitle = [
      { title: 'Learn a Little About Me', description: "This is an album filled with my favorite heartwarming travel memories, incredible landscapes i've encountered, pre-wedding shoot, portraits and much more." },
      /* { title: 'Title 2', description: 'Description 2' }, */
      // Add more items as needed
    ];
  
    return (
        <>
         <div class="bg-white dark:bg-slate-800">
            <Menu />
            <HeroSmall titles={HeroSmallTitle} />
            <Footer />
        </div>
        </>
    );

};

export default About;
  
