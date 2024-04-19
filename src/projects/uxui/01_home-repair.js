const HomeRepair = { 
    title: 'Home Repair', 
    year: '2023',
    /* status: 'Work in progress', */
    color: "bg-white/80 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/home-repair/home-repair.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/home-repair/home-repair-thumb.jpg`,
    description: "This is a case study i've been working while immersed in the french market.",
    scope: 'User Interface, User Experience',
    duration: '6 Months',

    contents: [
      {
        columns: [
          {
            icon: "DocumentMagnifyingGlassIcon", 
            title: "My Responsibilities",
            text: "As the lead designer, my responsibilities encompassed conceptualizing, designing, and overseeing the implementation of the HomeRepair website. This involved understanding the target audience, defining the user experience, and ensuring the visual appeal and functionality.",
            //aditional: "Outro texto se quiser",
          },
          {
            icon: "PuzzlePieceIcon", 
            title: "Problem",
            text: "The French construction and repair industry lacked modern, user-friendly online platforms for connecting customers with service providers. Existing websites were often cluttered, outdated, and lacked intuitive navigation, resulting in a poor user experience.",
          },
          {
            icon: "LightBulbIcon", //basta escolher o icone no site heroicons, e smp colocar o 'Icon' no final
            title: "Solution",
            text: "The solution was to create a clean website for HomeRepair that prioritized ease of use and accessibility. By implementing user-centric design principles and leveraging the latest technologies, we aimed to streamline the process of requesting and scheduling construction and repair services.",
          },
        ],
      },

      {
        title: "Final layout",
        description:  "Please scroll to see more details of the project.",
        img: `${process.env.PUBLIC_URL}/img/home-repair/screen.jpg`,
      },
      
    {
    title: "Design Thinking Framework",
    description:  "Utilizing the Design Thinking Framework as the process, we began by empathizing with users to understand their needs and pain points. This was followed by defining the problem, ideating potential solutions, prototyping and testing, and finally, implementing and iterating based on user feedback.",
    
   },
   {description:  "Through user research and feedback, we discovered the importance of accessibility features for individuals with disabilities and the significance of interactive elements to enhance user engagement. This insight guided our design decisions to ensure inclusivity and usability for all users.",
    
   },

  

   {
    title: "Ideation and Competitive Analysis",
    description:  "During the ideation phase and competitive analysis, it became evident that many similar companies in the French construction and repair industry required customers to call in order to schedule services or obtain basic information about jobs. This approach posed a significant inconvenience for both customers and workers, as it often led to delays, missed opportunities, etc. Recognizing this pain point, we identified an opportunity to differentiate HomeRepair by offering a seamless online booking system and accessible information portal.",
    
   },

   {
    title: "Increasing Customer Engagement",
    description:  "Improve customer engagement on the HomeRepair website to increase conversions and customer satisfaction.",
    
   },
   {
    columns: [
      {
        title: "Construction Quote Form",
        text: "Add a form to the website where customers can easily request a construction quote. Include fields for project details, contact information, and preferred contact method.",
        //aditional: "Outro texto se quiser",
      },
      {
        title: "Urgency Level Selection",
        text: "Implement an urgency level selection feature on the website to allow customers to indicate the urgency of their project. This will help prioritize their requests and provide timely responses.",
      },
      {
        title: "Availability Calendar",
        text: "Integrate a calendar on the website where customers can choose available dates for their construction projects. This will streamline the scheduling process and improve customer convenience.",
      },
    ],
  },
   
   {
    Duo: [
      {
        imgDuo:
        `${process.env.PUBLIC_URL}/img/home-repair/components1.jpg`,
      },
      {
        imgDuo:
        `${process.env.PUBLIC_URL}/img/home-repair/components2.jpg`,
      },
    ],
  },

  
   
   {
    title: "Sitemap",
    description:  "The sitemap was created to visualize the structure of the HomeRepair website, ensuring intuitive navigation and flow for users. This visual representation facilitated communication and alignment among team members throughout the design process.",
    
   },
   
   {
    img: `${process.env.PUBLIC_URL}/img/home-repair/sitemap.png`,
  },


        {
          title: "Project Refinement",
          description:  "During project refinement, we utilized Figma's latest features like components, variables, and design tokens to ensure design consistency and streamline our workflow. By creating reusable components and defining design variables, we maintained a cohesive design system, enabling rapid iteration and scalability. Collaboration features facilitated seamless communication, enhancing productivity. This approach allowed us to meet the needs of both stakeholders and end users effectively",
          
         },

         {
          Duo: [
            {
              imgDuo:
              `${process.env.PUBLIC_URL}/img/home-repair/style1.jpg`,
            },
            {
              imgDuo:
              `${process.env.PUBLIC_URL}/img/home-repair/style2.jpg`,
            },
          ],
        },
        
        {
          title: "Insights",
          description:  "Insights gained from user testing, analytics data, and stakeholder feedback informed design decisions and optimizations throughout the project lifecycle. These insights provided valuable guidance for prioritizing features, refining user flows, and improving overall website performance.",
          
         },
        // Adicione mais itens de conteúdo conforme necessário
      ],
};
  
  


export default HomeRepair;
  

