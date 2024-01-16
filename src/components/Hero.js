import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

/*  const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]  */

export function HeroBig() {
  return (
   <>
    <section>
    <div class="grid gap-16 max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:py-24 lg:px-6">
        <div class="mr-auto place-self-center">
            <h1 class="max-w-2xl my-6 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-gray-100">Welcome to my portfolio!</h1>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <p class="max-w-2xl mb-6 mt-6 font-body text-gray-500 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-400">I'm a 26-years-old photographer, adventurer, art enthusiast and designer. Hope you enjoy it.</p>
            <a href="/about" class="text-lg inline-flex items-center justify-center font-medium text-center text-dark dark:text-gray-400">
            Discover more about me
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           
        </div>
       {/*  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>   */}              
         <div class="lg:grid grid-cols-2 gap-4 mt-8 hidden">
            <img class="w-full transition ease-in duration-300 hover:-translate-y-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 transition ease-in duration-300 hover:-translate-y-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
    </>
  )
}


const Title = ({ title, description, image }) => (
  <>
    <div className="grid gap-16 max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-3 lg:py-16 lg:px-6 lg:gap-24">
        <div className="col-span-2 mr-auto place-self-center">
    {title && (
      <div key={title} className="">
        <dt className="max-w-2xl my-6 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-gray-100 text-balance">
          {title}
        </dt>
        <dd className="max-w-2xl mb-6 mt-6 font-body text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400 text-balance">
          {description}
        </dd>
      </div>
    )}
    </div>
    {image && (
      <div key={image} className="">
         <img class="mt-4  w-72 h-72 rounded-full object-cover saturate-50 hover:saturate-100 duration-300  transition-all" src={image}/>
      </div>
    )}
    </div>
  </>
);


export const HeroSmall = ({ titles }) => (
  <>
    <section>
    
          {titles.map((item) => (
            <Title key={item.title} title={item.title} description={item.description}  image={item.image} />
          ))}
        
        
     
    </section>
  </>
);
