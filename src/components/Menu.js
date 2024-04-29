import  { React, useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import { trackGAEvent } from "./google-analytics";
import {
  Bars3Icon,
  CameraIcon,
  PaintBrushIcon,
  HeartIcon,
  CubeIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const products = [
  {
    name: "Design",
    type: "uxuis",
    description: "Here are design projects I've worked on recently.",
    href: "/projects",
    icon: PaintBrushIcon,
  },
  {
    name: "3D, Motion and VFX",
    type: "3d-motion-and-vfx",
    description: "I do these for hobbie or freelance job.",
    href: "/vfx",
    icon: CubeIcon,
  },
  {
    name: "Social Media",
    type: "social",
    description: "Some social media posts I've done.",
    href: "/social",
    icon: HeartIcon,
  },
  {
    name: "Photography",
    type: "photography",
    description:
      "Take a look at the amazing landscapes, pre-wedding photos, portraits and much more.",
    href: "/photos",
    icon: CameraIcon,
  },
];
function handleSubmit(category, action, label) {
  trackGAEvent(category, action, label);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Menu = ({ className }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("color-theme") || "light"
  );
  var inputElements = document.querySelectorAll('input');

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.setProperty('--color-scheme-background', 'dark');     
    } else {
      setTheme("light");
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty('--color-scheme-background', 'light');
    }
    

  }, []);

  const handleThemeClick = () => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme("light");
        document.documentElement.style.setProperty('--color-scheme-background', 'light');
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("color-theme", "dark");
        setTheme("dark");
        document.documentElement.style.setProperty('--color-scheme-background', 'dark');
      }
    } catch (error) {
      console.error("Error setting theme in local storage:", error);
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { slug } = useParams();
 
  return (
    <header className={`${className}`}>
      <nav
        className="mx-auto flex max-w-7xl lg:py-10 items-center justify-between p-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5" onClick={() => handleSubmit("Menu", "menu-home", "button-home")}>
            <span className="sr-only">Matheus Gomes</span>
            {slug && (
                <>
                  <img
              className="w-24 md:w-32 brightness-0  transition-all duration-1000 ease-in-out invert"
              src="../img/logo-matheus.svg"
              alt=""
            />
                </>
              )}
            
              {!slug && (
                <>
                  <img
              className="w-24 md:w-32 transition-all duration-1000 ease-in-out dark:invert"
              src="../img/logo-matheus.svg"
              alt=""
            />
                </>
              )}

          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>

            {slug && (
                <>
                  <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  
                </>
              )}

              {!slug && (
                <>
                  <Bars3Icon className="h-6 w-6 dark:text-gray-400" aria-hidden="true" />
                </>
              )} 
            
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-lg focus:outline-none font-semibold leading-6 ">
              {slug && (
                <>
                  <p className="text-white">Works</p>
                  <ChevronDownIcon
                className="h-5 w-5 flex-none "
                aria-hidden="true"
              />
                </>
              )}

              {!slug && (
                <>
                  <p className="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    Works</p>
                  
                  <ChevronDownIcon
                className="h-5 w-5 flex-none text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200"
                aria-hidden="true"
              />
                </>
              )}

           
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10 bg-white dark:bg-slate-900">
                <div className="p-4">
                  {products.map((item) => (
                  
                  

                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-slate-50 dark:hover:bg-slate-800/40 "
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600  group-hover:text-slate-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                 
                        <a
                          href={item.href}
                          className="block text-lg font-semibold text-gray-900 dark:text-white" onClick={() => handleSubmit("Menu", `menu-${item.name}`, "button-works")}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="text-md mt-1 text-gray-600 dark:text-gray-400 text-balance">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/*  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-slate-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div> */}
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/about"
            className="text-lg font-semibold leading-6  text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSubmit("Menu", "menu-about", "button-about")}
          >
           {slug && (
                <>
                  <p className="text-white">About me</p>
                                 </>
              )}

              {!slug && (
                <>
                  <p className="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    About me</p>
                  
                 
                </>
              )}
          </a>

          <SunIcon
            className="h-6 w-6 cursor-pointer hidden dark:block dark:text-white"
            aria-hidden="true"
            id="light"
            onClick={() => {handleThemeClick(); handleSubmit("Menu", "light-mode", "color-scheme")}}
          />
          <MoonIcon
            className="h-6 w-6 cursor-pointer dark:hidden block"
            aria-hidden="true"
            id="dark"
            onClick={() => {handleThemeClick(); handleSubmit("Menu", "dark-mode", "color-scheme")}}
          />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-lg font-semibold leading-6  text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200  transition-colors duration-1000 ease-in-out"
            onClick={() => handleSubmit("Menu", "menu-contact", "button-contact")}
          >
            {slug &&(
                <>
                  <p className="text-white">Contact <span aria-hidden="true">&rarr;</span></p>
                  
                </>
              )}

              {!slug && (
                <>
                  <p className="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    Contact <span aria-hidden="true">&rarr;</span></p>
                </>
              )} 
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-800 text-base  transition-colors duration-1000 ease-in-out">
          <div className="flex items-center justify-between ">
            {mobileMenuOpen ? (
              <div>
                <SunIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer hidden dark:block"
                  aria-hidden="true"
                  id="lightmobile"
                  onClick={handleThemeClick}
                />
                <MoonIcon
                  className="h-6 w-6 cursor-pointer dark:hidden block"
                  aria-hidden="true"
                  id="darkmobile"
                  onClick={handleThemeClick}
                />
              </div>
            ) : null}

            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://file.notion.so/f/f/f1314468-b02f-4479-8519-6ba35456bba4/62bbfb77-8e25-41ec-98b5-49c015427c0d/37467fe0-7d55-438b-9d5a-ac473ea4bbc9.jfif"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-semibold  leading-7 text-gray-900 dark:hover:bg-slate-700 dark:text-gray-400 hover:bg-slate-50  transition-colors duration-1000 ease-in-out">
                        Works
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products /* ...callsToAction */].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900  dark:text-gray-400 dark:hover:bg-slate-700 hover:bg-slate-50 transition-colors duration-1000 ease-in-out"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"
                >
                  About me
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-400 hover:bg-slate-50 transition-colors duration-1000 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Menu;
