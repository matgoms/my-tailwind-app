import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react';

// Create a context with all files in the 'projects' folder that end with '.js'
const socialContext = require.context('../projects/social', false, /\.js$/);
const uxuiContext = require.context('../projects/uxui', false, /\.js$/);

// Get an array of all project file paths
const socialFilePaths = socialContext.keys();
const uxuiFilePaths = uxuiContext.keys();

// Import each project dynamically
const socialProjects = socialFilePaths.map((filePath) => {
    const projectData = socialContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
});

const uxuiProjects = uxuiFilePaths.map((filePath) => {
    const projectData = uxuiContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
});

const Social = ({ title, description, image }) => {
    return (

        //FALTA INSERIR O LINK PARA CADA PROJETO
        <div class="mb-24">
            <img src={image} alt={title} class={'w-full mb-6 hover:animate-pulse'} alt="" />
            <h3 class="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p class="text-gray-500 dark:text-gray-400">{description}</p>

        </div>
    );
};


const UXUI = ({ title, description, image }) => {
    return (

        //FALTA INSERIR O LINK PARA CADA PROJETO
        <div class="mb-24">
            <img src={image} alt={title} class={'w-full mb-6 hover:animate-pulse'} alt="" />
            <h3 class="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p class="text-gray-500 dark:text-gray-400">{description}</p>

        </div>
    );
};


export default function Content() {

    const tabs = [
        {
            classDefault: 'inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-blue-600 ui-selected:border-blue-600  ui-selected:active dark:ui-selected:text-blue-500 dark:ui-selected:border-blue-500 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300',
        },
    ]

    return (

        <section class="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 py-8">
            <div class="max-w-screen-xl px-5 py-16 mx-auto">


                <div class=" ">
                    <Tab.Group>
                        <Tab.List class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px">
                            {tabs.map((tab, index) => (
                                <>
                                    <Tab className={tab.classDefault}>UX/UI Design</Tab>

                                    <Tab className={tab.classDefault}>Social media</Tab>

                                    <Tab className={tab.classDefault}>Motion/VFX</Tab>
                                </>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                            <>
                                    <div class="flex flex-col">
                                        <div class="flex flex-wrap sm:flex-row flex-col py-24">
                                            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">UX/UI Projects</h1>
                                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                                        </div>
                                    </div>
                                    <div class="columns-1 lg:columns-2 lg:gap-24">
                                        {uxuiProjects.map((project, index) => (
                                            <UXUI key={index} {...project} />
                                        ))}</div>
                                </>
                            </Tab.Panel>
                            <Tab.Panel>
                                <>
                                    <div class="flex flex-col">
                                        <div class="flex flex-wrap sm:flex-row flex-col py-24">
                                            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">Social media stuff</h1>
                                            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                                        </div>
                                    </div>
                                    <div class="columns-1 lg:columns-2 lg:gap-24">
                                        {socialProjects.map((project, index) => (
                                            <Social key={index} {...project} />
                                        ))}</div>
                                </>
                            </Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div>


            </div>
        </section>

    )

}