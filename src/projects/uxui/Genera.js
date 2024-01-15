const Genera = {
  title: "Genera",
  year: "2022",
  link: "genera.com.br",
  color: "bg-red-600 dark:bg-red-800",
  image: process.env.PUBLIC_URL + '/img/' + 'genera/genera-thumb.png',
  thumb: process.env.PUBLIC_URL + '/img/' + 'genera/genera-thumb.png',
  description:
    "Genera is a pioneering Brazilian genetics laboratory in the genomic medicine segment, offering a personalized platform for ancestry, health and well-being testing.",
  scope: "User Interface, User Experience",
  duration: "7 Months",

  contents: [
    {
      title: "New Design System",
      description:
        "Blending modern genetic concepts with user-friendly interfaces, this project ensures a cohesive visual identity and effortless user experience. The main goal of this design system is to simplify the communication of complex genealogical information, making interactive engagement smoother while elevating the company's brand presence in the genetics field.",
      /* img: 'https://ecommerce.cdn.genera.com.br/uploads/2023/11/03-homeSAUDE-600x400px_out23.png.webp', */
    },
  

    {
      Duo: [
        {
          imgDuo:
            "https://ecommerce.cdn.genera.com.br/uploads/2023/11/01-homeANCESTRALIDADE-600x400px_out23.png.webp",
        },
        {
          imgDuo:
            "https://ecommerce.cdn.genera.com.br/uploads/2023/11/03-homeSAUDE-600x400px_out23.png.webp",
        },
      ],
    },
    {
      title: "Design system preview",
      description: "In our committed pursuit of an elegant design, we've embraced a minimalistic aesthetic, particularly when confronted with intricate genetic information, giving an overall sense of simplicity that enhances user comprehension.",
      figma:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19JvWq1o5248YNm5m2Gy4f%2FDesign-System---Genera%3Ftype%3Ddesign%26node-id%3D118-3516%26t%3D0foJRkUZbG7MQN2m-1",
      /* canva:
        "", */
      caption: "(Scroll down to see the entire project)",
    },

    {
      img: process.env.PUBLIC_URL + '/img/' + 'genera/amostra.png',
      },

    // Adicione mais itens de conteúdo conforme necessário
  ],
};

//para botar imagens, https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component

export default Genera;
