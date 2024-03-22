import { useEffect } from "react";
import Menu from "../components/Menu";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { trackGAEvent } from "../components/google-analytics";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/outline";


export default function Contact() {
  
    useEffect(() => {
        document.title =  'Matheus Gomes - Contact';
      }, []);

  function handleSubmit(event) {
    trackGAEvent("Contato", "Botão-CV", "Download CV");
  }

  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-800 *:transition-colors duration-1000 ease-in-out">
        <Menu />

        <section>
          <div className="py-24 px-6 max-w-screen-xl mx-auto lg:flex lg:gap-24 lg:mb-16">
            <div
              className="shrink transition ease-in duration-300 hover:opacity-80 lg:w-1/2 -my-8 bg-cover hidden lg:block" style={{backgroundImage: `url(../img/photos/landscapes/42_1125x1500.jpg`}}
            />

            <div className="shrink lg:w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Contact me
              </h2>

              <p className="mb-6  font-light text-balance text-gray-500 dark:text-gray-400 text-xl">
                Starting a new project? Interested in a quote? Need more
                information about something? Let me know.
              </p>
        <div className="flex gap-4">
        <a
                className="inline-flex items-center py-2.5 px-5 text-sm mb-12  text-slate-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"
                href="mailto:matgoms@gmail.com"
                target="_blank" onClick={handleSubmit}
                download
              >
                <EnvelopeIcon className="h-6 w-6 me-2 " aria-hidden="true" />
                matgoms@gmail.com
              </a>

              <a
                className="inline-flex items-center py-2.5 px-5 text-sm mb-12  text-slate-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"  onClick={handleSubmit}
                download
              >
                <DevicePhoneMobileIcon className="h-6 w-6 me-2 " aria-hidden="true" />
                +55 11 976233032
              </a>

             
              </div>

              <Form />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
