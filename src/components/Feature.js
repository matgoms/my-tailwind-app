import {
    CodeBracketIcon,
    CameraIcon,
    PaintBrushIcon,
  } from '@heroicons/react/24/outline'

export default function Feature() {
    return (
     <>

<section>
  <div class=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-48">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What can I offer?</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">As a creative enthusiast, I have always been dedicated to studying various artistic fields and visual communications. I have a strong ability to adapt, allowing me to tackle various situations effectively and find prompt, suitable solutions.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full lg:h-20 lg:w-20 bg-cyan-200 lg:animate-bounce">
              <PaintBrushIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Art Direction</h3>
              <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 bg-indigo-200 lg:animate-bounce">
              <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">UX/UI Design</h3>
              <p class="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900 bg-pink-200 lg:animate-bounce">
                 <CameraIcon className="h-8 w-8" aria-hidden="true" />                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Photography</h3>
              <p class="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
         
         
         
      </div>
  </div>
</section>

</>
  )
}
