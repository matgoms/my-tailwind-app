import {
  EnvelopeIcon,
  CameraIcon,
  PaintBrushIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer class="bg-white dark:bg-slate-900">
      <div class="mx-auto max-w-7xl px-6 2xl:px-0 py-16 lg:pt-24">
        <div class="lg:flex md:justify-between">
          <div class="mb-16 lg:mb-6">
            <a href="/" class="flex items-center">
              <img
                className="h-8 w-auto me-2"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Matheus Gomes
              </span>
            </a>
          </div>
          <div class="lg:grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div class="lg:inline-flex gap-24">
              <div class="mb-16 lg:mb-6">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Explore
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/about" class="hover:underline">
                      About me
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/projects" class="hover:underline">
                      Design Projects
                    </a>
                  </li>
                  <li class="">
                    <a href="/photos" class="hover:underline">
                      Photography
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-16 lg:mb-6">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://be.net/matgoms" class="hover:underline ">
                      Behance
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="https://dribbble.com/matgoms"
                      class="hover:underline"
                    >
                      Dribbble
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="https://instagram.com/matgoms"
                      class="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li class="">
                    <a
                      href="https://linkedin.com/in/matgoms"
                      class="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-16 lg:mb-6">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 ">
                  <a
                    href="mailto:matgoms@gmail.com"
                    class="hover:underline cursor-pointer flex gap-2"
                  >
                    <EnvelopeIcon className="w-5" />
                    matgoms@gmail.com
                  </a>
                </li>
                <li class="">
                  or fill the forms at the{" "}
                  <a
                    href="/contact"
                    class="hover:no-underline underline cursor-pointer inline-flex"
                  >
                    contact page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="lg:mt-32 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm inline-flex items-center text-gray-500 sm:text-center dark:text-gray-400">
            Built with{" "}
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-sm ms-3 me-1 w-5 text-cyan-700  flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>{" "}
            React +
            <img
              className="h-5 w-auto ms-1 me-1"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />{" "}
            Tailwind
          </span>

          <span class="text-sm inline-flex items-center text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Matheus Gomes™. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="http://linkedin.com/in/matgoms"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="size-5"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 17V13.5V10"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 7.01L7.01 6.99889"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              href="http://instagram.com/matgoms"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="size-5"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="#000000"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M17.5 6.51L17.51 6.49889"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="sr-only">Instagram account</span>
            </a>
            <a
              href="http://dribbble.com/matgoms"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="size-5"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="sr-only">Dribbble account</span>
            </a>
            <a
              href="http://be.net/matgoms"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="size-5"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.09859 11.8261C11.6338 11.8261 11.6338 16 9.09859 16C7.6685 16 6 16 6 16V11.8261M9.09859 11.8261C7.6685 11.8261 6 11.8261 6 11.8261M9.09859 11.8261C11.6338 11.8261 11.6338 8 9.09859 8C7.97183 8 6 8 6 8V11.8261"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.5 11C14.1193 11 13 12.1193 13 13.5H18C18 12.1193 16.8807 11 15.5 11Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13 13.5C13 14.8807 14.1193 16 15.5 16C16.4276 16 16.9905 15.6776 17.3126 15.3802"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 8.5H14"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="sr-only">Behance account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
