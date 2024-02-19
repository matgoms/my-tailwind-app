const Ecorodovias = {
  title: "Eco Rodovias",
  year: "2019",
  link: "ecorodovias.com.br/papainoelexiste",
  color: "bg-white/80 dark:bg-slate-900",
  image: `${process.env.PUBLIC_URL}/img/eco-rodovias/eco-rodovias.jpg`,
  thumb: `${process.env.PUBLIC_URL}/img/eco-rodovias/eco-rodovias-thumb.png`,
  description:
    "Santa Claus Exists is the Ecorodovias Group project that transforms partners, suppliers, and stakeholders into Santa Clauses. The project has already gifted more than 70,000 Brazilian children served by charitable institutions.",
  scope: "User Interface",
  duration: "3 weeks",

  contents: [
    {
      columns: [
        {
          title: "Aqui vai o titulo da coluna 1",
          text: "Aqui vai o texto da coluna 1",
          aditional: "Outro texto se quiser",
        },
        {
          title: "Aqui vai o titulo da coluna 2",
          text: "Aqui vai o texto da coluna 2",
        },
        {
          icon: "ArrowDownIcon",
          title: "Aqui vai o titulo da coluna 3",
          text: "Aqui vai o texto da coluna 3",
        },
      ],
    },

    {
      Duo: [
        {
          imgDuo: `${process.env.PUBLIC_URL}/img/eco-rodovias/duo1.jpg`,
        },
        {
          imgDuo: `${process.env.PUBLIC_URL}/img/eco-rodovias/duo2.jpg`,
        },
      ],
    },
    {
      img: `${process.env.PUBLIC_URL}/img/eco-rodovias/style.png`,
    },
    {
      title: "About the visual identity",
      description:
        "The visual identity is a delightful fusion of pastel colors—blue, green, red, and yellow—that infuse a sense of warmth and joy into the project. These soft hues harmonize seamlessly, creating a visually appealing and inviting atmosphere. The choice of pastel colors goes beyond aesthetics; it conveys a sense of innocence, playfulness, and the genuine spirit of the holiday season.",
    },

    {
      img: `${process.env.PUBLIC_URL}/img/eco-rodovias/web.png`,
    },

    {
      credits: [
        {
          text: "The illustrations capture the essence of the project, bringing to life the joyous act of gifting and the magic of making children's dreams come true. They were made by the awesome Júlia,  ",
        },
        {
          link: "<a href=\"http://be.net/juliaxtina\" class='hover:underline'>check her portfolio.</a>",
        },
      ],
    },

    // Adicione mais itens de conteúdo conforme necessário
  ],
};
  
  


export default Ecorodovias;
  

