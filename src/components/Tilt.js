import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const TiltComponent = () => {
  return (
    <Tilt options={{ max: 10, glare: true, maxGlare: .8, }} style={{
        transformStyle: 'preserve-3d',
      }} >
      {/* Conteúdo do seu componente incluído aqui */}
      <div class="w-full h-full flex justify-center items-center duration-1000 ease-in-out *:absolute " style={{transformStyle: 'preserve-3d'}}>
      
      {/* <img src="../img/home/estrelas1.png" style={{transform: 'translate3d(-280px, -260px, 0px)'}} /> */}
      <img src="../img/home/like.png" class="w-56" style={{transform: 'translate3d(150px,100px,00px)'}} />
      <img src="../img/home/paletas.png" class="w-24" style={{transform: 'translate3d(180px,-120px,0px)'}} />
       <img src="../img/home/cafe.png" class="w-24" style={{transform: 'translate3d(160px,120px,140px)'}} />
       
       {/*<dotlottie-player src="https://lottie.host/1d5326ef-370a-4ea3-817d-8fffe526bb3a/KjPy2n6Ths.json" background="transparent" speed="1" class="size-500" style={{transform: 'translate3d(0,0,100px)'}} direction="1" playMode="normal" loop autoplay></dotlottie-player> */}
      <img src="../img/home/tela.png" class="w-72 block dark:hidden" style={{transform: 'translate3d(0,0,100px)'}}/>
      <img src="../img/home/teladark.png" class="w-72 hidden dark:block" style={{transform: 'translate3d(0,0,100px)'}}/>
      <img src="../img/home/video.png" class="w-60" style={{transform: 'translate3d(-80px, -80px,160px)'}} />
      <img src="../img/home/toolslight.png" class="w-24 hidden dark:block dark:bg-slate-700 bg-slate-100 rounded-md " style={{transform: 'translate3d(-150px, 110px,200px)'}} />
      <img src="../img/home/toolsdark.png" class="w-24 block dark:hidden bg-slate-100 rounded-md " style={{transform: 'translate3d(-150px, 110px,200px)'}} />

      </div>
    </Tilt>
  );
};

export default TiltComponent;
