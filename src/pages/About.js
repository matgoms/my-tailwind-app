import { useEffect } from "react";
import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const About = () => {
  
  useEffect(() => {
    document.title =  'Matheus Gomes - About me';
  }, []);

  const HeroSmallTitle = [
    {
      title: "Get to know a little about me.",
      description:
        "I have over 7 years of design experience working with leading companies and small businesses.",
      image: "../img/me.jpg",
    },
    /* { title: 'Title 2', description: 'Description 2' }, */
    // Add more items as needed
  ];
  return (
    <>
      <div class="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out">
        <Menu />
        <HeroSmall titles={HeroSmallTitle} images={HeroSmallTitle} />
        <section class="text-gray-600 text-md bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-24 transition-colors duration-1000 ease-in-out">
          <div class="max-w-screen-xl px-6 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:gap-24">
              <div class="col-span-2">
                
                <p class="lg:mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400 text-balance">
                  As a creative enthusiast, I have always been dedicated to
                  studying various artistic fields and visual communications. I
                  have a strong ability to adapt, allowing me to tackle various
                  situations effectively and find prompt, suitable solutions.
                  Furthermore, through my professional experiences and studies I have learned to manage multiple tasks simultaneously and consistently excel by delivering
                  high-quality work.
                </p>
              </div>
              <div class="">
                {/* linguas */}

                <div class="flex gap-4 mt-6">
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700  text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2">
                        {" "}
                        Native language
                      </p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span class="fi-br rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"></span>
                  </div>
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700 text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2">
                        {" "}
                        Advanced
                      </p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span
                      class="fi-us rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"
                      id="us"
                    ></span>
                  </div>
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700 text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2">
                        {" "}
                        Advanced
                      </p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span
                      class="fi-fr rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"
                      id="fr"
                    ></span>
                  </div>
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700 text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2"> Basic</p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span
                      class="fi-es rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"
                      id="es"
                    ></span>
                  </div>
                </div>

                <p class="lg:text-lg leading-relaxed font-medium my-6 dark:text-gray-400">
                  Matheus Gomes, 27yd
                  <br />
                  <a
                    href="mailto:matgoms@gmail.com"
                    class="text-gray-600 underline dark:text-gray-400 hover:no-underline"
                  >
                    matgoms@gmail.com
                  </a>
                  <br />
                  São Paulo, Brazil
                </p>

                <a
                  class="inline-flex items-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700"
                  href="../pdf/CV - Matheus Gomes.pdf"
                  target="_blank"
                  download
                >
                  Download my CV
                  <ArrowDownTrayIcon
                    className="h-6 w-6 ms-2 "
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3  mt-8 lg:gap-24 dark:text-gray-400">
              <div class="">
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Work Experience
                </h3>

                <h5 class="font-bold mt-4">Designer</h5>
                <p>Brand Connect</p>

                <h5 class="font-bold mt-4">UX/UI Designer</h5>
                <p>Tesla</p>

                <h5 class="font-bold mt-4">Web Designer</h5>
                <p>Link 9</p>

                <h5 class="font-bold mt-4">Designer</h5>
                <p>Brand Connect</p>

                <h5 class="font-bold mt-4">Art Director</h5>
                <p>Degrau Publicidade</p>

                <h5 class="font-bold mt-4">UX/UI Designer</h5>
                <p>Genera</p>

                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Freelancer
                </h3>

                <h5 class="font-bold mt-4">Photography and Audiovisual</h5>
              </div>
              <div class="">
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Barchelor Degree
                </h3>

                <h5 class="font-bold mt-4">Advertising and Marketing</h5>
                <p>Anhembi Morumbi</p>

                <h3 class="mb-4 mt-8  text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Postgraduate
                </h3>

                <h5 class="font-bold mt-4">User Interface Design</h5>
                <p>Centro Acadêmico Belas Artes</p>

                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Professional courses
                </h3>

                <h5 class="font-bold mt-4">Administration</h5>
                <p>Salesianas</p>

                <h5 class="font-bold mt-4">Programming and Webdesign</h5>
                <p>CENLEP</p>

                <h5 class="font-bold mt-4">English</h5>
                <p>Academia Washington</p>

                <h5 class="font-bold mt-4">Computer Graphics</h5>
                <p>Universidade Cidade de São Paulo</p>
              </div>
              <div class="">
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Habilities
                </h3>
                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">UX/UI</h5>
                  <div>95%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "95%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Photography</h5>
                  <div>90%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Social Media</h5>
                  <div>80%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Video Editing / VFX / Motion</h5>
                  <div>60%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <div>
                  <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Skills
                  </h3>
                  <ul class="flex flex-wrap *:text-sm gap-2 *:font-medium *:w-max *:rounded-full *:border *:text-gray-600 *:border-slate-600/20 *:bg-slate-100 *:px-2 *:py-0.5 *:dark:text-gray-400 dark:*:border-slate-400/20 dark:*:bg-slate-400/10 ">
                    <li>Analytics</li>
                    <li>Back End</li>
                    <li>Design System</li>
                    <li>Design Thinking</li>
                    <li>Front End</li>
                    <li>React</li>
                  </ul>
                </div>
                <div>
                  <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Softwares
                  </h3>
                  <ul class="flex flex-wrap *:text-sm gap-2  *:font-medium *:w-max *:rounded-full *:border *:text-gray-600 *:border-slate-600/20 *:bg-slate-100 *:px-2 *:py-0.5 *:dark:text-gray-400 dark:*:border-slate-400/20 dark:*:bg-slate-400/10 ">
                    <li>Figma</li>
                    <li>XD</li>
                    <li>Miro</li>
                    <li>Maze</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Sketch</li>
                    <li>Hotjar</li>
                    <li>Notion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
