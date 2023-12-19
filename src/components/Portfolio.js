import { Link } from "react-router-dom";

const importFirstProject = (context) => {
  const firstFilePath = context.keys()[0];
  const projectData = context(firstFilePath);
  return projectData.default;
};

// Importa o contexto para projetos sociais
const socialContext = require.context("../projects/social", false, /\.js$/);
const socialProject = importFirstProject(socialContext);

// Use require.context para importar dinamicamente o primeiro arquivo da pasta 'uxui'
const uxuiContext = require.context("../projects/uxui", false, /\.js$/);
const uxuiProject = importFirstProject(uxuiContext);

export default function Portfolio() {
  return (
    <>
      <section class="bg-slate-50 dark:bg-slate-900/50">
        <div class="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-48">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What can I offer?
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              As a creative enthusiast, I have always been dedicated to studying
              various artistic fields and visual communications. I have a strong
              ability to adapt, allowing me to tackle various situations
              effectively and find prompt, suitable solutions.
            </p>
          </div>
          <div class="columns-1 lg:columns-2 lg:gap-24">
            <Link
              to={`/projects`}
            >
              <img
                src={socialProject.image}
                alt={socialProject.title}
                class={`transition ease-in duration-300 hover:opacity-80  w-full mb-2  h-[18rem] object-cover object-center ${uxuiProject.color}`}
                alt=""
              />
              <div class="mb-24 ">
                <h3 class="my-6 text-xl font-bold dark:text-white">
                  Social Media
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  {socialProject.description}
                </p>
              </div>
            </Link>

            <Link
              to={`/projects`}
            >
              <img
                src={uxuiProject.image}
                alt={uxuiProject.title}
                class={`transition ease-in duration-300 hover:opacity-80  w-full mb-2  h-[18rem] object-cover object-center ${uxuiProject.color}`}
                alt=""
              />
              <div class="mb-24 ">
                <h3 class="my-6 text-xl font-bold dark:text-white">
                  {uxuiProject.title}
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  {uxuiProject.description}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
