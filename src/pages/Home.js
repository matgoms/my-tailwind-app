import { useEffect } from "react";
import Menu from "../components/Menu";
import { HeroBig } from "../components/Hero";
import Image2x from "../components/Image2x";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Matheus Gomes - Home";
  }, []);

  const photos = [
    {
      url: "projects/xero-saas-redesign",
      img: "../img/projects-preview/4.jpg",
    },
    {
      url: "projects/genera-design-system",
      img: "../img/projects-preview/2.jpg",
    },
    {
      url: "projects/gardenfy",
      img: "../img/projects-preview/1.jpg",
    },
    {
      url: "projects/help",
      img: "../img/projects-preview/7.jpg",
    },
    {
      url: "projects/blz-premium",
      img: "../img/projects-preview/3.jpg",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out ">
      <Menu />
      <HeroBig />
      <Image2x photos={photos} />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default Home;
