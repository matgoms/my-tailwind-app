const Challenge = {
  title: "Design Thinking Challenge",
  year: "2022",
  color: "bg-white/80 dark:bg-slate-900",
  image: `${process.env.PUBLIC_URL}/img/dt-challenge/dt-challenge.jpg`,
  thumb: `${process.env.PUBLIC_URL}/img/dt-challenge/dt-challenge-thumb.jpg`,
  description:
    "The challenge we faced revolved around digitizing the training chart/plan. In response, our team studied and discussed potential solutions.",
  scope: "Design Thinking, User Experience",
  duration: "1 Month",

  contents: [
    {
        Duo: [
          {
            imgDuo: `${process.env.PUBLIC_URL}/img/dt-challenge/duo1.jpg`,
          },
          {
            imgDuo: `${process.env.PUBLIC_URL}/img/dt-challenge/duo2.png`,
          },
        ],
      },
    {
      title: "The solution",
      description:
        "We ultimately decided to propose the development of a mobile app designed for easy accessibility and consultation during training sessions. This approach aimed to enhance the efficiency and effectiveness of the training process by seamlessly integrating technology into the workflow.",
    },
    {
      canva: "https://www.canva.com/design/DAFEJj1l7j8/view?embed",
      caption: "(Click to interact)",
    },
    {
        title: "Concept Map",
        description:
          "By creating a concept map, we could envision a more intuitive understanding of the training process, encourage collaboration and engagement among team members and transform training strategies into a visually compelling app.",
      },
      {
        imgBig: `${process.env.PUBLIC_URL}/img/dt-challenge/concept-map.png`,
      },
    {
        title: "Final screens",
    
    },
    {
      imgBig: `${process.env.PUBLIC_URL}/img/dt-challenge/screens.png`,
    },

    

    // Adicione mais itens de conteúdo conforme necessário
  ],
};

//para botar imagens, https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

export default Challenge;
