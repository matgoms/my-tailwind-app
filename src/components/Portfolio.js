import { Link } from "react-router-dom";
import ProjectsList from "./ProjectsList";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  return (
    <>
      <section className="bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out">
        <div className="px-6 py-24 mx-auto max-w-screen-xl sm:py-16 lg:gap-8 xl:gap-0 lg:py-48">
        <div className="lg:flex mb-16 justify-between items-center">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          What have I been working on lately?
          </h2>
          <p className="font-regular text-gray-500 sm:text-xl dark:text-gray-400 text-balance">
          In a nutshell, my recent projects reflect a blend of creativity, technical expertise, and a passion for creating meaningful and impactful design experiences across various domains. Here are some of them:
          </p>
 </div>
          <Link to="/projects" >
            <h3 className="mt-4 md:mt-0 text-lg font-medium racking-tight text-gray-900 dark:text-white">
                        <a href="/projects" className="flex items-center gap-4 hover:underline"> 
                        Explore all projects
                        <ArrowRightCircleIcon className="size-6 text-gray-400 dark:text-gray-600"/>
                      </a>
                      </h3>
                      </Link>
                      </div>
         <ProjectsList category="uxuis" quantity="4"/>
        </div>
      </section>
    </>
  );
}
