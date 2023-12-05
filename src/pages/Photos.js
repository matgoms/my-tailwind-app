import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";




const Photos = () => {
    const HeroSmallTitle = [
      { title: 'Telling Stories Through Lens', description: "This is an album filled with my favorite heartwarming travel memories, incredible landscapes i've encountered, pre-wedding shoot, portraits and much more." },
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

export default Photos;
  