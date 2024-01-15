const Challenge = {
  title: "Design Thinking Challenge",
  year: "2022",
  color: "bg-white/60 dark:bg-slate-900",
  image: process.env.PUBLIC_URL + "/img/" + "dt-challenge/genera-thumb.png",
  thumb:
    process.env.PUBLIC_URL + "/img/" + "dt-challenge/dt-challenge-thumb.png",
  description:
    "The challenge we faced revolved around digitizing the training chart/plan. In response, our team studied and discussed potential solutions.",
  scope: "Design Thinking, User Experience",
  duration: "1 Month",

  contents: [
    {
        Duo: [
          {
            imgDuo: process.env.PUBLIC_URL + "/img/" + "dt-challenge/duo1.jpg",
          },
          {
            imgDuo: process.env.PUBLIC_URL + "/img/" + "dt-challenge/duo2.png",
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
        imgBig: process.env.PUBLIC_URL + "/img/" + "dt-challenge/concept-map.png",
      },
    {
        title: "Prototype",
      figma:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXBEO8OWCgJkZUCwFempJHF%2FAcademia%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D6-0%26viewport%3D1162%252C546%252C0.33%26t%3DbrhdVhSIWTQwPXHj-1%26scaling%3Dscale-down%26mode%3Ddesign",
      caption: "(Scroll down to see the entire project)",
    },
   

    

    // Adicione mais itens de conteúdo conforme necessário
  ],
};

//para botar imagens, https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

export default Challenge;
