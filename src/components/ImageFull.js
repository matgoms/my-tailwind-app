import React from 'react';

const ImageFull = ({ image, altText }) => {
  return (
  <>
  <section>
        <div class="w-full ">
            <figure>
                <div alt={altText} className='w-full bg-cover bg-fixed lg:h-[54rem] h-[32rem]' style={{backgroundImage: `url(${image})`}}/>
            </figure>
        </div>
    
</section>
  </>
  )
};

export default ImageFull;