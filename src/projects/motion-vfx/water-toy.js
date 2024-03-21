const Watertoy = { 
    title: 'Water Toy', 
    year: "2024",
    color: "bg-slate-700 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/watertoy/watertoy.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/watertoy/watertoy-thumb.jpg`,
    description: "Another nostalgic animation! This time, I decided to play around with Blender's physics to recreate this water toy that was part of my childhood =]",
    scope: '3D Modeling, 3D Animation, Motion Design', 
    
  contents: [

    
    {
        html:
          '<video className="w-full" autoplay loop muted playsinline><source src="../img/watertoy/watertoy.mp4" type="video/mp4" /></video>',
        /* canva:
          "", */

      },

    ]
    };
  
  


export default Watertoy;
  

