import { trackGAEvent } from "./google-analytics";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  function handleSubmit(category, action, label) {
    trackGAEvent(category, action, label);
  }
  return (
    <footer className="bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:pt-24">
        <div className="lg:flex md:justify-between">
          <div className="mb-16 lg:mb-6">
            <a href="/" className="flex items-center">
              <img
                className="size-12 w-auto transition-all duration-1000 ease-in-out dark:invert"
                src="../img/logo-matheus.svg"
                alt=""
              />
              <span className="self-center ms-2 text-2xl font-semibold whitespace-nowrap dark:text-white">
                ™
              </span>
            </a>
          </div>
          <div className="lg:grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div className="lg:inline-flex gap-24">
              <div className="mb-16 lg:mb-6">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Explore
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/about" className="hover:underline">
                      About me
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/projects" className="hover:underline">
                      Design Projects
                    </a>
                  </li>
                  <li className="">
                    <a href="/photos" className="hover:underline">
                      Photography
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-16 lg:mb-6">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://be.net/matgoms" className="hover:underline ">
                      Behance
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://dribbble.com/matgoms"
                      className="hover:underline"
                    >
                      Dribbble
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://instagram.com/matgoms"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://linkedin.com/in/matgoms"
                      className="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-16 lg:mb-6">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 ">
                  <a
                    href="mailto:matgoms@gmail.com"
                    className="hover:underline cursor-pointer flex gap-2"
                  >
                    <EnvelopeIcon className="w-5" />
                    matgoms@gmail.com
                  </a>
                </li>
                <li className="">
                  or fill the forms at the{" "}
                  <a
                    href="/contact"
                    className="hover:no-underline underline cursor-pointer inline-flex"
                  >
                    contact page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="lg:mt-32 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm inline-flex items-center text-gray-500 sm:text-center dark:text-gray-400">
            Built by myself with{" "}
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-sm ms-3 me-1 w-5 text-cyan-600  flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>{" "}
            React +
            <img
              className="h-5 w-auto ms-1 me-1"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=500"
              alt=""
            />{" "}
            Tailwind
          </span>

          <div className="flex mt-6 sm:justify-center sm:mt-0 gap-2">
            <a
              href="http://linkedin.com/in/matgoms"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white"
              onClick={() => handleSubmit("Footer", `social-linkedin`, "social-icon")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.35"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="http://instagram.com/matgoms"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white"
              onClick={() => handleSubmit("Footer", `social-insta`, "social-icon")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.35"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
            <a
              href="http://dribbble.com/matgoms"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white"
              onClick={() => handleSubmit("Footer", `social-dribbble`, "social-icon")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-dribbble"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.35"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
            <a
              href="http://be.net/matgoms"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white"
              onClick={() => handleSubmit("Footer", `social-behance`, "social-icon")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-behance"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.35"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                <path d="M3 12l4.5 0" />
                <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                <path d="M16 6l3 0" />
              </svg>
              <span className="sr-only">Behance account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
