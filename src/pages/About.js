import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";

const About = () => {
    const HeroSmallTitle = [
      { title: 'Learn a Little About Me', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt sunt quis nostrum atque, ipsa ullam molestias, reiciendis, in perferendis exercitationem." },
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
  
