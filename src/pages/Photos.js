import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleGallery from '../components/Gallery';


interface AppProps {}
interface AppState {
  name: string;
}

class Photos extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    const HeroSmallTitle = [
      { title: 'Telling Stories Through Lens', description: "This is an album filled with my favorite heartwarming travel memories, incredible landscapes i've encountered, pre-wedding shoot, portraits and much more." },
      // Add more items as needed
    ];



    // TENTAR IMPORTAR AS IMAGENS LOCAIS PELO PHOTOSWIPE
    return (
      <div>
        <div className="bg-white dark:bg-slate-800">
          <Menu />
          <HeroSmall titles={HeroSmallTitle} />
          <SimpleGallery
            galleryID="my-gallery"
            images={[
                {
                    largeURL:
                      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg',
                    width: 2500,
                    height: 1667,
                  },
              {
                largeURL:
                  'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
               /*  thumbnailURL:
                  'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg', */
                width: 1875,
                height: 2500,
              },
             
              {
                largeURL:
                  'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                width: 1669,
                height: 2500,
              },
             
              {
                largeURL:
                  'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                width: 2500,
                height: 1666,
              },
              {
                largeURL:
                  'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg',
                width: 2500,
                height: 1667,
              },
              
            ]}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Photos;