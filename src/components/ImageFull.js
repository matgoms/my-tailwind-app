import React from 'react';

const ImageFull = ({ image, altText, color }) => {

  return (
  <>
  <section className='w-full'>
        <div class="relative w-full lg:h-[100vh] h-[100vh]">
                <div alt={altText} id="HeroSection" className={`content-[""] w-full 2xl:bg-fixed bg-scroll block bg-cover bg-bottom bg-no-repeat -z-10 top-0 left-0 h-full ${color}`}
 style={{backgroundImage: `url(${image})`}}/>
                

        </div>
    
</section>
  </>
  )
};

export default ImageFull;