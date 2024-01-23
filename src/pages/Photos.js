import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import React, { Component } from "react";
import SimpleGallery from "../components/Gallery";

interface AppProps {}
interface AppState {
  name: string;
}

class Photos extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      images: [],
    };
  }

  componentDidMount() {
    // Use require.context to dinamically import all files from the 'public/img/photos' folder
    const context = require.context(
      "!!file-loader!../../public/img/photos",
      false,
      /\.(jpg)$/
    );

    // Get an array of all image file paths
    const imageFilePaths = context.keys();
    // Import each image dynamically
    const images = imageFilePaths.map((filePath) => {
      // Extract the file name without extension
      const fileName = filePath.replace(/^.*[\\\/]/, "").split(".")[0];
      // Parse the file name to extract width and height (assuming they are part of the file name)
      const [width, height] = fileName.split("_")[1].split("x").map(Number);
      console.log(fileName, width, height);
      // Return the image object with largeURL, width, and height
      return {
        largeURL: context(filePath).default,
        width: isNaN(width) ? 2500 : width, // Set your default width if not found in the file name
        height: isNaN(height) ? 1667 : height, // Set your default height if not found in the file name
      };
    });
    // Update the component state with the imported images
    this.setState({ images });
  }

  render() {
    const HeroSmallTitle = [
      {
        title: "Telling Stories Through Lens",
        description:
          "This is an album filled with my favorite heartwarming travel memories, incredible landscapes i've encountered, pre-wedding shoot, portraits and much more. I hope you like it.",
      },
      // Add more items as needed
    ];

    return (
      <div>
        <div className="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out">
          <Menu />
          <HeroSmall titles={HeroSmallTitle} />
          <SimpleGallery galleryID="my-gallery" images={this.state.images} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Photos;
