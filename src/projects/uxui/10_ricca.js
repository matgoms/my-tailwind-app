const Ricca = { 
    title: 'Ricca', 
    link: 'ricca.com.br',
    year: '2020',
    color: "bg-white/80 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/ricca/ricca.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/ricca/ricca-thumb.jpg`,
    description: "Launched in 1987, Ricca has a history marked by innovations in the food industry and gained recognition among baking and confectionery professionals for the quality of its products.",
    scope: "User Interface, User Experience",
    duration: '1 Month',

    contents: [
      
        {
          Duo: [
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/ricca/duo1.jpg`,
            },
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/ricca/duo2.jpg`,
            },
          ],
        },
        
        {
          imgBig: `${process.env.PUBLIC_URL}/img/ricca/style.png`,
        },
        {
            description: "After studying the brand's identity, products and story, I've designed this website that features a clean and minimal design, accentuated with vibrant blue hues that reflect the trust and reliability they've built over the years. The design extends to informative texts that guide you through the product offerings, ensuring you have all the details you need. "
        },
        {
            description: "Unfurtunately the design proposal wasn't chosen due to a misalignment with the brand's preferences but it was a fun project to work on."
        },
        {
            img: `${process.env.PUBLIC_URL}/img/ricca/page.jpg`,
          },
    
        // Adicione mais itens de conteúdo conforme necessário
      ],
};
  
  


export default Ricca;
  

