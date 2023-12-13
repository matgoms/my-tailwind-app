import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CameraIcon,
  PaintBrushIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Design",
    description: "Here are some design projects I've worked on recently.",
    href: "/projects",
    icon: PaintBrushIcon,
  },
  {
    name: "Photography",
    description:
      "Take a look at the amazing landscapes, pre-wedding photos, portraits and much more.",
    href: "/photos",
    icon: CameraIcon,
  },
];
/* const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
] */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu() {
  useEffect(() => {
    const tema = localStorage.getItem("color-theme");

    if (tema === "dark") {
      document.documentElement.classList.add("dark");
      document.getElementById("light").classList.remove("hidden");
    } else if (tema === "light") {
      document.documentElement.classList.add("light");
      document.getElementById("dark").classList.remove("hidden");
    } else {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("light");
      document.getElementById("dark").classList.remove("hidden");
    }
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800">
      <nav
        className="mx-auto flex max-w-7xl lg:py-10 items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md focus:outline-none font-semibold leading-6 text-gray-900 dark:text-gray-400">
              Works
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-400"
                aria-hidden="true"
              />
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
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600  group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 dark:text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
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
            className="text-md font-semibold leading-6 text-gray-900 dark:text-gray-400"
          >
            About me
          </a>

          <SunIcon
            className="h-6 w-6 text-gray-400 cursor-pointer hidden"
            aria-hidden="true"
            id="light"
            onClick={() => Light()}
          />
          <MoonIcon
            className="h-6 w-6 cursor-pointer hidden"
            aria-hidden="true"
            id="dark"
            onClick={() => Dark()}
          />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-md font-semibold leading-6 text-gray-900 dark:text-gray-400"
          >
            Contact <span aria-hidden="true">&rarr;</span>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-800">
          <div className="flex items-center justify-between ">
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
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:hover:bg-slate-700 text-base dark:text-gray-400 hover:bg-slate-50">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900  dark:text-gray-400 dark:hover:bg-slate-700 hover:bg-slate-50"
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  About me
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-400 hover:bg-slate-50"
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
}

var tema = localStorage.getItem("color-theme");

function Dark() {
  tema = localStorage.getItem("color-theme"); // Obter o valor atualizado

  if (tema === "light") {
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
    localStorage.setItem("color-theme", "dark");
  }
}
function Light() {
  tema = localStorage.getItem("color-theme"); // Obter o valor atualizado

  if (tema === "dark") {
    document.getElementById("dark").style.display = "block";
    document.getElementById("light").style.display = "none";
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
    localStorage.setItem("color-theme", "light");
  }
}
