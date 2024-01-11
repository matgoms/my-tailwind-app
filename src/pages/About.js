import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import { ArrowDownTrayIcon,  } from "@heroicons/react/20/solid";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const About = () => {
  const HeroSmallTitle = [
    {
      title: "Hi there. Nice to meet you.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt sunt quis nostrum atque, ipsa ullam molestias, reiciendis, in perferendis exercitationem.",
      image: "http://matgoms.me/dist/img/me.jpg",
    },
    /* { title: 'Title 2', description: 'Description 2' }, */
    // Add more items as needed
  ];
  return (
    <>
      <div class="bg-white dark:bg-slate-800">
        <Menu />
        <HeroSmall titles={HeroSmallTitle} images={HeroSmallTitle} />
        <section class="text-gray-600 text-md bg-slate-50 dark:bg-slate-900/50 py-8">
          <div class="max-w-screen-xl px-5 py-16 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:gap-24">
              <div class="col-span-2">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Over 7 years of work experience with leading companies and
                  small businesses.
                </h2>
                <p class="mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400">
                  As a creative enthusiast, I have always been dedicated to  studying various artistic fields and visual communications. I have a strong ability to adapt, allowing me to tackle various situations effectively and find prompt, suitable solutions. Furthermore, through my professional experiences and studies at exceptional universities, I have learned to manage multiple tasks simultaneously and consistently excel by delivering high-quality work.
                </p>
              </div>
              <div class="">
                {/* linguas */}

                <div class="flex gap-4 mt-12">
                  <span class="fi-br aspect-[4/3] w-8 rounded-md bg-no-repeat"></span>
                  <span class="fi-us aspect-[4/3] w-8 rounded-md bg-no-repeat"></span>
                  <span class="fi-fr aspect-[4/3] w-8 rounded-md bg-no-repeat"></span>
                  <span class="fi-es aspect-[4/3] w-8 rounded-md bg-no-repeat"></span>
                </div>

                <p class="lg:text-lg leading-relaxed font-medium my-6 dark:text-gray-400">
                  Matheus Gomes, 27yd
                  <br />
                  <a href="mailto:matgoms@gmail.com" class="text-slate-600 underline dark:text-gray-400 hover:no-underline">matgoms@gmail.com</a>
                  <br />
                  São Paulo, Brazil
                </p>

                <a
                  class="inline-flex items-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  href="http://matgoms.me/dist/pdf/CV - Matheus Gomes.pdf"
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
                    class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "95%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Photography</h5>
                  <div>90%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Social Media</h5>
                  <div>80%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Video Editing / VFX / Motion</h5>
                  <div>60%</div>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "60%" }}
                  ></div>
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
