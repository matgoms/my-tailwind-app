import React, { useState, useEffect } from 'react';
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
          <img src={image.largeURL} alt="" className="w-full mb-6 lg:mb-16 opacity-0 duration-500" onLoad={(e) => e.target.classList.add('opacity-100')}/>
        </a>
      ))}
    </div>
                
  );
}
