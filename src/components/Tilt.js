import React from "react";
import Tilt from "react-parallax-tilt";

const TiltComponent = () => {
  return (
    <Tilt
      perspective={700}
      scale={1.02}
      transitionSpeed={10000}
      tiltReverse={true}
      options={{
        max: 2,
        glare: true,
        maxGlare: 0.8,
        transition: true,
        axis: null,
        reset: true,
        scale: 1.2,
        speed: 200,
        easing: "ease-out",
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom"  */}

      <div
        class="w-full h-full flex justify-center items-center duration-1000 ease-in-out *:absolute "
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="../img/home/like.png"
          class="w-56"
          style={{ transform: "translate3d(150px,100px,00px)" }}
        />
        <img
          src="../img/home/paletas.png"
          class="w-24"
          style={{ transform: "translate3d(180px,-120px,40px)" }}
        />
       {/*  <img
          src="../img/home/cafe.png"
          class="w-16"
          style={{ transform: "translate3d(160px,80px,160px)" }}
        /> */}
<dotlottie-player class="size-32" src="https://lottie.host/a478bc3b-87c6-4a54-a4ce-8ec2aeab6cda/vaMYRcJrKJ.json" background="transparent" speed="1" style={{transform: "translate3d(129px, 70px,200px)"}} direction="1" playMode="normal" loop autoplay></dotlottie-player>
       {/*  https://lottie.host/1d5326ef-370a-4ea3-817d-8fffe526bb3a/KjPy2n6Ths.json */}
        <img
          src="../img/home/tela.png"
          class="w-72 block dark:hidden"
          style={{ transform: "translate3d(0,0,100px)" }}
        />
        <img
          src="../img/home/teladark.png"
          class="w-72 hidden dark:block"
          style={{ transform: "translate3d(0,0,100px)" }}
        />
        <img
          src="../img/home/video.png"
          class="w-60"
          style={{ transform: "translate3d(-80px, -80px,160px)" }}
        />
        <img
          src="../img/home/toolslight.png"
          class="w-24 hidden dark:block dark:bg-slate-700 bg-slate-100 rounded-md "
          style={{ transform: "translate3d(-150px, 110px,200px)" }}
        />
        <img
          src="../img/home/toolsdark.png"
          class="w-24 block dark:hidden bg-slate-200 rounded-xl"
          style={{ transform: "translate3d(-150px, 110px,200px)" }}
        />
      </div>
    </Tilt>
  );
};

export default TiltComponent;
