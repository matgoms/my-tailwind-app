import { useEffect } from "react";
import Menu from "../components/Menu";
import { HeroBig } from "../components/Hero";
import Image2x from "../components/Image2x";
import Feature from "../components/Feature";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Matheus Gomes - Home";
  }, []);

  const photos = [
    '../img/projects-preview/4.jpg',
    '../img/projects-preview/2.jpg',
    '../img/projects-preview/1.jpg',
    '../img/projects-preview/coffee.gif',
    '../img/projects-preview/5.jpg',
    '../img/projects-preview/6.jpg',
    '../img/projects-preview/picle.gif',
    '../img/projects-preview/3.jpg',
  ];

  return (
    <div className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out ">
      <Menu />
      <HeroBig />
      <Image2x photos={photos} />
      <Feature />
      <Portfolio />
      <Footer />
    </div>
  );
}
export default Home;