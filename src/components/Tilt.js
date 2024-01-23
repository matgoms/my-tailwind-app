import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const TiltComponent = () => {
  return (
    <Tilt options={{ max: 25, glare: true, maxGlare: .8, }} style={{
        transformStyle: 'preserve-3d',
      }} >
      {/* Conteúdo do seu componente incluído aqui */}
      <div class="w-full h-full flex justify-center items-center duration-1000 ease-in-out *:absolute" style={{transformStyle: 'preserve-3d'}}>
      
      <img src="../img/home/estrelas1.png" style={{transform: 'translate3d(-280px, -260px, 0px)'}} />
      <img src="../img/home/estrelas2.png" style={{transform: 'translate3d(300px,210px,00px)'}} />
      <img src="../img/home/circulos.png" style={{transform: 'translate3d(220px,-60px,40px)'}} />
      <img src="../img/home/prancheta.png" style={{transform: 'translate3d(210px,140px,40px)'}} /><dotlottie-player src="https://lottie.host/1d5326ef-370a-4ea3-817d-8fffe526bb3a/KjPy2n6Ths.json" background="transparent" speed="1" class="size-500" style={{transform: 'translate3d(0,0,100px)'}} direction="1" playMode="normal" loop autoplay></dotlottie-player>
      {/* <img src="../img/home/tela.png" style={{transform: 'translate3d(0,0,100px)'}} /> */}
      <img src="../img/home/texto.png" style={{transform: 'translate3d(-170px, -148px,130px)'}} />
      <img src="../img/home/paletas.png" style={{transform: 'translate3d(-150px, 110px,200px)'}} />

      </div>
    </Tilt>
  );
};

export default TiltComponent;
