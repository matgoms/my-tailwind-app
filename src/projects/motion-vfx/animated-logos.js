const Logos = {
  title: "Animated Logos",
  year: "2019",
  status: 'Work in progress',
  color: "bg-fuchsia-700 dark:bg-fuchsia-900",
  image: process.env.PUBLIC_URL + "/img/" + "abstrato/abstrato.png",
  thumb: process.env.PUBLIC_URL + "/img/" + "abstrato/abstrato-motion-thumb.gif",
  description:
    "Highlighted here are a collection of animated logo designs, along with their diverse variations, designed during my time at advertising agencies in São Paulo, Brazil. ",
  scope: "Motion Design, Branding",

  contents: [
    {
      description:
        "These designs were created specifically for auction companies and dealerships, showcasing my ability to distill brand identities into compelling visual symbols that resonate with audiences.",
    },
    {
      Duo: [
        {
          imgDuo: process.env.PUBLIC_URL + "/img/" + "abstrato/gif1.gif",
        },
        {
          imgDuo: process.env.PUBLIC_URL + "/img/" + "abstrato/gif2.gif",
        },
        {
          imgDuo: process.env.PUBLIC_URL + "/img/" + "abstrato/gif3.gif",
        },
      ],
    },
  ],
};

export default Logos;