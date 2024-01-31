

import React, { useState, useEffect } from 'react';

const Image2x = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 5000); // Change photo every 3 seconds (adjust as needed)
    }

    return () => clearInterval(interval);
  }, [isHovered, photos]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='group relative w-full aspect-video overflow-hidden grid max-w-screen-2xl my-16 lg:my-8  mx-auto transition-all duration-1000 ease-in-out' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className={`z-10 text-xl h-full absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Image2x;
