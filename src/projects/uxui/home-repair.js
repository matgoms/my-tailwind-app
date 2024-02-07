const HomeRepair = { 
    title: 'Home Repair', 
    year: '2023',
    status: 'Work in progress',
    color: "bg-white/80 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/home-repair/home-repair.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/home-repair/home-repair-thumb.png`,
    description: "Since 2023, I have been working on this project while immersed in the french market.",
    scope: 'User Interface, User Experience',
    duration: 'In progress',

    contents: [
     
      {
       description:  "It's still a work in progress (WIP) as I strive to make the Design System as good and comprehensive as possible using the latest updates from Figma, including variables, components, boolean properties, instance swapping, and more.",
      },
     
        {
          Duo: [
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/home-repair/components1.jpg`,
            },
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/home-repair/components2.jpg`,
            },
          ],
        },
        {
          img: `${process.env.PUBLIC_URL}/img/home-repair/style.png`,
        },
        {
          title: "Prototype",
          figma:
            "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE6651mcw69kOYhCt2av4Rq%2FHomeRepair%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D249-3835",
                   
          caption: "(Scroll down to see the entire project, click to interact)",
        },
    
        // Adicione mais itens de conteúdo conforme necessário
      ],
};
  
  


export default HomeRepair;
  

