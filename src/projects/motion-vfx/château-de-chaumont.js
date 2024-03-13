const Chateau = { 
    title: 'Château de Chaumont', 
    year: "2023",
    color: "bg-slate-700 dark:bg-slate-900",
    link:"www.youtube.com/@escapetoruralfrance",
    image: `${process.env.PUBLIC_URL}/img/chaumont/chateau.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/chaumont/chateau-thumb.jpg`,
    description: "This is a tribute to my favorite YouTube channel, Escape to Rural France, which is currently in the process of rebuilding a chateau that has been abandoned for over 40 years.",
    scope: '3D Modeling, 3D Animation, Motion Design', 
    
  contents: [

    
    {
        html:
          '<video className="w-full" autoplay loop muted playsinline controls><source src="../img/chaumont/chateau.mp4" type="video/mp4" /></video>',
    },

    ]
    };
  
  


export default Chateau;
  

