import { animated } from "react-spring";
import { useEffect, useRef } from "react";
import { NextParticle } from "../nextparticle";
import { useRouter } from "next/router";

const ParticleLogo = ({ spring, entered }) => {
  const createdCanvas = useRef(false);
  const {
    query: { enter },
  } = useRouter();

  useEffect(() => {
    if (entered) {
      const canvas = document.getElementById("next-particle-canvas");
      canvas?.remove();
      const image = document.getElementById("aflogo");
      image.style.display = "block";
    }
  }, [entered]);

  useEffect(() => {
    if (!createdCanvas.current && !enter) {
      new NextParticle({
        image: document.all.aflogo,
        id: "foobar",
        particleGap: 2,
        maxWidth: "70%",
        maxHeight: "70%",
      });
      createdCanvas.current = true;
    }
  }, [enter]);

  return (
    <>
      <animated.img
        src="/images/AFcolor.png"
        className="next-particle"
        id="aflogo"
        style={{
          transform: spring.o.to((o) => `scale(${0.75 - o / 1.5})`),
          display: "none",
        }}
      />
    </>
  );
};

export default ParticleLogo;
