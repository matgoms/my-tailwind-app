const HomeRepair = { 
    title: 'Home Repair', 
    year: '2023',
    status: 'In progress',
    color: "bg-white/80 dark:bg-slate-900",
    image: process.env.PUBLIC_URL + '/img/' + 'home-repair/home-repair.jpg',
    thumb: process.env.PUBLIC_URL + '/img/' + 'home-repair/home-repair-thumb.png',
    description: "Depuis le début de 2023, je travaille sur ce projet. C'est toujours un travail en cours (WIP), car j'essaie de rendre le Design System aussi bon et complet que possible en utilisant les dernières mises à jour de Figma, qui incluent les variables, les composants, les propriétés booléennes, l'échange d'instances, etc. Bientôt, je publierai le fichier interactif du Design System !",
    scope: "User Interface, User Experience",
    duration: '1 Month',

    contents: [
      
        {
          Duo: [
            {
              imgDuo: process.env.PUBLIC_URL + '/img/' + 'home-repair/components1.jpg',
            },
            {
              imgDuo: process.env.PUBLIC_URL + '/img/' + 'home-repair/components2.jpg',
            },
          ],
        },
        {
          title: "Protótipo",
          description: "Creating our prototype involved dedicated efforts towards a clean, minimalist design. Utilizing rounded icons and a carefully selected color palette, we aimed for clarity and modernity. ",
          figma:
            "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE6651mcw69kOYhCt2av4Rq%2FHomeRepair%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D249-3835",
          /* canva:
            "", */

           
          caption: "(Scroll down to see the entire project)",
        },
    
        // Adicione mais itens de conteúdo conforme necessário
      ],
};
  
  


export default HomeRepair;
  

