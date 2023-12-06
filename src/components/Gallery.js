import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function SimpleGallery(props) {
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
    <section class="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 py-8">
    <div class="max-w-screen-xl px-5 py-16 mx-auto columns-1 lg:columns-3 lg:gap-16">

    <div className="pswp-gallery " id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.largeURL} alt="" class="w-full mb-16" />
        </a>
      ))}
    </div>

    </div>
    </section>
  );
}
