import React from 'react';

const ImageFull = ({ image, altText, color }) => {

  return (
  <>
  <section className='w-full relative'>
        <div class="relative w-full h-[100vh] lg:h-dvh flex justify-center">
                <div alt={altText} id="HeroSection" className={`content-[""] w-full bg-fixed  block h-[100vh] lg:h-dvh bg-cover bg-center bg-no-repeat -z-10 top-0 left-0 ${color}`}
 style={{backgroundImage: `url(${image})`}}/>
 <div class="absolute bottom-12 mx-auto lg:animate-bounce cursor-pointer bg-white/60 dark:bg-slate-800/60 p-2 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm">
    <svg class="w-6 h-6 text-gray-600 dark:text-gray-200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
                

        </div>
    
</section>
  </>
  )
};

export default ImageFull;