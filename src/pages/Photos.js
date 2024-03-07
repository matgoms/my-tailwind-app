import React, { Component } from 'react';
import { Tab } from '@headlessui/react';
import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import SimpleGallery from "../components/Gallery";

interface AppProps { }
interface AppState {
  // Your state interface
  name: string;
  images: any[]; // Assuming images are of any type
  activeTabIndex: number;
}



class Photos extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: "React",
      images: [],
      activeTabIndex: 0
    };
  }

  // Method to handle tab change
  handleTabChange = (index: number) => {
    this.setState({ activeTabIndex: index });
  };


  componentDidMount() {
    document.title = 'Matheus Gomes - Photos';

  
    // Get an array of all image file paths
    const mapImages = (context, filePaths) => {
      return filePaths.map((filePath) => {
        const fileName = filePath.replace(/^.*[\\\/]/, "").split(".")[0];
        const [width, height] = fileName.split("_")[1].split("x").map(Number);
        return {
          fileName: fileName,
          largeURL: context(filePath).default,
          width: isNaN(width) ? 2500 : width, // Set your default width if not found in the file name
          height: isNaN(height) ? 1667 : height, // Set your default height if not found in the file name
        };
      });
    };
    
    // Use require.context to dynamically import all files from the 'public/img/photos/people' folder
    const peopleContext = require.context(
      "!!file-loader!../../public/img/photos/people",
      false,
      /\.(jpg)$/
    );
    
    // Use require.context to dynamically import all files from the 'public/img/photos/landscapes' folder
    const landscapesContext = require.context(
      "!!file-loader!../../public/img/photos/landscapes",
      false,
      /\.(jpg)$/
    );
    const specialContext = require.context(
      "!!file-loader!../../public/img/photos/special",
      false,
      /\.(jpg)$/
    );
    
    // Get an array of all image file paths for images
    const peopleImageFilePaths = peopleContext.keys();
    const landscapesImageFilePaths = landscapesContext.keys();
    const specialImageFilePaths = specialContext.keys();
    
    // Map images for people and landscapes contexts
    const peopleImages = mapImages(peopleContext, peopleImageFilePaths);
    const landscapesImages = mapImages(landscapesContext, landscapesImageFilePaths);
    const specialImages = mapImages(specialContext, specialImageFilePaths);
    
    // Merge the people and landscapes images into a single array
    
    this.setState({ people: peopleImages, landscapes: landscapesImages, special: specialImages });
  };
  render() {

    const HeroSmallTitle = [
      {
        title: "Telling Stories Through Lens",
        description:
          "This is an album filled with my favorite heartwarming travel memories, incredible landscapes i've encountered, pre-wedding shoot, portraits and much more. I hope you like it.",
      },
      // Add more items as needed
    ];

    
  const tabs = [
    {
      classDefault:
        "inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-slate-600 ui-selected:border-slate-600  ui-selected:active dark:ui-selected:text-slate-200 dark:ui-selected:border-slate-200 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300 transition ease-in-out duration-500",
    },
  ];
    return (
      <div>
        <div className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out">
          <Menu />
          <HeroSmall titles={HeroSmallTitle} />

          <section className="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50  py-24 lg:py-24  transition-colors duration-1000 ease-in-out">
            <div className="max-w-screen-2xl px-6 mx-auto">
              <Tab.Group onChange={() => this.handleTabChange(1)}>
                <div className="max-w-screen-xl px-6 mx-auto">
                  <Tab.List className="max-w-screen-xl text-sm lg:text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px ">
                    {tabs.map((tab, index) => (
                      <>
                        <Tab className={tab.classDefault}>Portraits</Tab>
                        <Tab className={tab.classDefault}>Landscapes</Tab>
                        <Tab className={tab.classDefault}>Special occasions</Tab>
                      </>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels>

                  <Tab.Panel>
                    <>

                      <div className="columns-1 md:columns-2 lg:columns-3 md:gap-24 py-24">
                      {this.state.people && <SimpleGallery galleryID="my-gallery" images={this.state.people} />} 
                      </div>
                    </>
                  </Tab.Panel>

                  <Tab.Panel>
                    <>

                      <div className="columns-1 md:columns-2 lg:columns-3 md:gap-24 py-24">
                      {this.state.people && <SimpleGallery galleryID="my-gallery" images={this.state.landscapes} />}
                      </div>
                    </>
                  </Tab.Panel>
                  <Tab.Panel>
                    <>

                      <div className="columns-1 md:columns-2 lg:columns-3 md:gap-24 py-24">
                      {this.state.people && <SimpleGallery galleryID="my-gallery" images={this.state.special} />}
                      </div>
                    </>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>


            </div>
          </section>


          <Footer />
        </div>
      </div>
    );
  }
}

export default Photos;
