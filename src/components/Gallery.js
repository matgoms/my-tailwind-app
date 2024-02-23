import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { trackGAEvent } from './google-analytics';

export default function SimpleGallery(props) {
  function handleSubmit(category, action, label) {
    trackGAEvent(category, action, label);
  }
   
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section className="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 py-8 lg:py-16 transition-colors duration-1000 ease-in-out">
    <div className="max-w-screen-2xl px- py-6 mx-auto columns-1 lg:columns-3 lg:gap-16 my-8 lg:my-16">

    <div className="pswp-gallery " id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          onClick={() => handleSubmit("Photos", `image-${image.fileName.split('_')[0]}`, "photo-click")}
        >
          <img src={image.largeURL} alt="" className="w-full mb-6 lg:mb-16" />
        </a>
      ))}
    </div>

    </div>
    </section>
  );
}
