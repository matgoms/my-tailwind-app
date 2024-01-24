import {
    CodeBracketIcon,
    CameraIcon,
    PaintBrushIcon,
  } from '@heroicons/react/24/outline'

export default function Feature() {
    return (
     <>

<section>
  <div class="px-4 py-24 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-48">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What can I offer?</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400 text-balance">As a creative enthusiast, I have always been dedicated to studying various artistic fields and visual communications. I have a strong ability to adapt, allowing me to tackle various situations effectively and find prompt, suitable solutions.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full lg:h-20 lg:w-20 bg-cyan-200">
              <PaintBrushIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Art Direction</h3>
              <p class="text-gray-500 dark:text-gray-400 text-balance"> With meticulous attention to detail and a keen understanding of aesthetics, I excel in projects that resonate with the audience, leaving a lasting impact.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 bg-indigo-200">
              <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">UX/UI Design</h3>
              <p class="text-gray-500 dark:text-gray-400 text-balance"> Through iterative design processes, I strive to elevate digital experiences to new heights.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900 bg-pink-200">
                 <CameraIcon className="h-8 w-8" aria-hidden="true" />                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Photography</h3>
              <p class="text-gray-500 dark:text-gray-400  text-balance">With technical proficiency and an artistic eye, I navigate the complexities of light, composition, and subject matter.</p>
          </div>
         
         
         
      </div>
  </div>
</section>

</>
  )
}
