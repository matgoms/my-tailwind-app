import TiltComponent from './Tilt';

export function HeroBig() {
  return (
   <>
    <section>
    <div className="grid gap-16 max-w-screen-xl px-6 py-16 mx-auto lg:grid lg:grid-cols-3 lg:py-24 ">
        <div className="mr-auto place-self-center lg:col-span-2 lg:grid-cols-2">
            <h1 className="max-w-2xl my-6 text-6xl font-extrabold tracking-tight leading-none xl:text-6xl dark:text-gray-100">I'm a Product Designer with +7 years of experience.</h1>
          
            <p className="max-w-2xl mb-6 mt-8 font-body text-gray-500 lg:mb-8 text-xl lg:text-3xl dark:text-gray-400 text-balance">From creating product innovations to strategizing on a global level, I bring expertise in all aspects of project design.</p>
            <a href="/about" className="text-lg inline-flex items-center justify-center font-medium text-center text-dark dark:text-gray-400">
            Discover more about me
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
           
        </div>
       {/*  <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>   */}              
         <div className="lg:grid m-auto w-full h-full hidden dark:mix-blend-screen dark:invert transition-all duration-200">
      <TiltComponent/>
            
        </div>
    </div>
</section>
    </>
  )
}


const Title = ({ title, description, image }) => (
  <>
    <div className="grid gap-2 max-w-screen-xl px-6 py-16 mx-auto lg:grid lg:grid-cols-3 lg:py-16 lg:px-6 lg:gap-24">
        <div className="col-span-2 mr-auto place-self-center">
    {title && (
      <div key={title} className="">
        <dt className="max-w-2xl my-6 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl dark:text-gray-100 text-balance">
          {title}
        </dt>
        <dd className="max-w-2xl mb-6 mt-6 font-body text-gray-500 lg:mb-8 text-xl lg:text-2xl dark:text-gray-400 text-balance">
          {description}
        </dd>
      </div>
    )}
    </div>
    {image && (
      <div key={image} className="">
         <img className="hidden lg:block lg:mt-4 aspect-square w-3/4 rounded-full object-cover saturate-50 hover:saturate-100 duration-300  transition-all" src={image} alt=""/>
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
