


const Picle = { 
    title: 'Cool Picle', 
    year: "2024",
    color: "bg-slate-700 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/picles/picle.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/picles/picle-thumb.jpg`,
    description: "Just a cool picle walkin' by =]",
    scope: 'Motion Design', 
    
  contents: [

    
    {
        html:
          '<video className="w-full" autoplay loop muted playsinline><source src="../img/picles/picle.mp4" type="video/mp4" /></video>',
        /* canva:
          "", */

      },

    ]
    };
  
  


export default Picle;
  

