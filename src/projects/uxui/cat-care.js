const CatCare = {
    title: "Cat Care",
    year: "2022",
    color: "bg-white/80 dark:bg-slate-900",
    image: `${process.env.PUBLIC_URL}/img/catcare/catcare.jpg`,
    thumb: `${process.env.PUBLIC_URL}/img/catcare/catcare-thumb.png`,
    description:
      "The Cat Care is an application that allows cat owners to find trusted caregivers who operate in their region.",
    scope: "User Interface, User Experience",
    duration: "1 Month",
  
    contents: [
        {
            title: "The problem",
            description:
              "There are already pet care services, but the vast majority specialize in dogs. Cat owners lack a service entirely dedicated to feline needs. So our team reunited to study and create a user journey, propose features and ideas.",
          },

         
      {
          Duo: [
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/catcare/duo1.jpg`,
            },
            {
              imgDuo: `${process.env.PUBLIC_URL}/img/catcare/flow.png`,
            },
          ],
        },
     
      {
            title: "Proposed wireframe",
          
          },
        {
          imgBig: `${process.env.PUBLIC_URL}/img/catcare/screens.png`,
        }, 
        {
          title: "The visual identity",
          description:
            "The selected color palette aimed to evoke the feelings of: Trust, as cat owners need to feel secure and personality, as cats are unique creatures.",
        },
        
        {
          img: `${process.env.PUBLIC_URL}/img/catcare/style.png`,
        },
        {
            description:
              "We chose blue as the primary color because it conveys trust. As a secondary color, we selected orange for its association with exuberance and fascination, characteristics typical of felines.",
          },

          {
            description:
              "The Josefin Sans font was chosen for its geometric, elegant, and vintage feel. The font features curves reminiscent of feline anatomy, as seen in the uppercase M and lowercase Z. On the other hand, Open Sans is a more friendly font developed for mobile interfaces, providing excellent readability.",
          },
          {
            title: "The result",
                      },
          {
            imgBig: `${process.env.PUBLIC_URL}/img/catcare/final.png`,
          },
      
  
      // Adicione mais itens de conteúdo conforme necessário
    ],
  };
  
  
  //para botar imagens, https://www.shecodes.io/athena/38751-how-to-import-all-images-of-a-folder-into-a-react-component
  
  export default CatCare;
  