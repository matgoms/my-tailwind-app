const Help = {
  title: "Help!",
  year: "2020",
  color: "bg-white/80 dark:bg-slate-900",
  image: `${process.env.PUBLIC_URL}/img/help/help.jpg`,
  thumb: `${process.env.PUBLIC_URL}/img/help/help-thumb.png`,
  description:
    "With a focus on retirees, INSS pensioners, and public servants, help! offers personalized assistance at over 800 stores spread across Brazil.",
  scope: "User Interface, User Experience",
  duration: "1 Month",

  contents: [
    {
      Duo: [
        {
          imgDuo: `${process.env.PUBLIC_URL}/img/help/duo1.jpg`,
        },
        {
          imgDuo: `${process.env.PUBLIC_URL}/img/help/duo2.jpg`,
        },
      ],
    },

    {
      title: "The context",
      description:
        "BMG reached out to us for the development of an app for their help institution. I was part of the design team. They already had a defined user flow and sitemap, so I was able to leverage it to create some of the screens.",
    },

    {
      title: "Initial wireframe",
    },
    {
      imgBig: `${process.env.PUBLIC_URL}/img/help/screens.png`,
    },
    {
      description:
        "Later on, I received a provisional sitemap of the essential pages.",
    },
    {
      img: `${process.env.PUBLIC_URL}/img/help/sitemap.png`,
    },

    {
      title: "The visual identity",
      description:
        "BMG already had the brand colors defined: orange and purple. Therefore, my task was to develop more suitable variations (shades) for the mobile experience and accessibility, and that's what I did. Additionally, we used rounded elements to complement the logo, whether in texts, icons, or components.",
    },
    {
      img: `${process.env.PUBLIC_URL}/img/help/style.png`,
    },

    {
      description:
        "The Montserrat font was chosen for its modern appearance, while Lato offers a blend of professionalism and readability.",
    },
    {
      title: "Prototype",
      figma:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F24blSqQ50arePHMq3Vdykl%2FPortfolio%3Fpage-id%3D277%253A54%26type%3Ddesign%26node-id%3D277-2421",
               
      caption: "(Scroll down to see the entire project, click to interact)",
    },
    
    {
      img: `${process.env.PUBLIC_URL}/img/help/final.png`,
    },
    {
      description:
        "Unfurtunately the app wasn't developed at the time due to some brand internal issue. However, it was definitely a fun project to work on.",
    },

    // Adicione mais itens de conteúdo conforme necessário
  ],
};

//para botar imagens, https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

export default Help;
