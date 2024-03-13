import {
    CodeBracketIcon,
    CameraIcon,
    PaintBrushIcon,
  } from '@heroicons/react/24/outline'
function Feature() {
    return (
     <>

<section>
  <div className="px-6 py-24 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-48">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What can I offer?</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-balance">As a creative enthusiast, I have always been dedicated to studying various artistic fields and visual communications. I have a strong ability to adapt, allowing me to tackle various situations effectively and find prompt, suitable solutions.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-20 h-20 rounded-full lg:h-20 lg:w-20 bg-emerald-200">
              <PaintBrushIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Art Direction</h3>
              <p className="text-gray-500 dark:text-gray-400 text-balance">From concept to execution, I bring creativity and vision to projects and I ensure every detail reflects the brand's personality and objectives.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 bg-teal-200">
              <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">UX/UI Design</h3>
              <p className="text-gray-500 dark:text-gray-400 text-balance">I craft engaging digital experiences to users' needs. My focus is on intuitive and accessible design that captivates users.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900 bg-cyan-200">
                 <CameraIcon className="h-8 w-8" aria-hidden="true" />                    
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Photography</h3>
              <p className="text-gray-500 dark:text-gray-400  text-balance">With technical proficiency and an artistic eye, I navigate the complexities of light, composition, and subject.</p>
          </div>
         
         
         
      </div>
  </div>
</section>

</>
  )
}

export default Feature;