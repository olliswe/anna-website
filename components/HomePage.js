import React, { useEffect, useState } from "react";
import Link from "next/link";
import ParticleLogo from "./ParticleLogo";
import { useRouter } from "next/router";
import { animated, useSpring } from "react-spring";
import clsx from "clsx";
import HomeTitle from "./HomeTitle";
import Publications from "./Publications";
import PortfolioCard from "./PortfolioCard";
import Affiliations from "./Affiliations";

const HomePage = ({ publications, portfolios, affiliations }) => {
  const router = useRouter();
  const { enter } = router.query;
  const [entered, setEntered] = useState(false);
  const spring = useSpring({ o: !!entered ? 1 : 0 });
  useEffect(() => {
    if (enter) {
      setEntered(true);
    }
  }, [enter]);

  return (
    <div
      className={clsx("relative w-full h-screen", !enter && "overflow-hidden")}
    >
      <animated.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: spring.o.to((o) => `${50 - o * 40}%`),
          top: spring.o.to((o) => `${50 - o * 40}%`),
        }}
      >
        <ParticleLogo spring={spring} entered={entered} />
      </animated.div>
      <animated.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ top: spring.o.to((o) => `${50 - o * 40}%`) }}
      >
        <span className="text-3xl">anna frühauf</span>
      </animated.div>
      {!enter && (
        <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2">
          <Link className="text-xl" href="/?enter=true">
            enter
          </Link>
        </div>
      )}
      <animated.div
        style={{
          position: "absolute",
          top: spring.o.to((o) => `${110 - 70 * o}%`),
          width: "100%",
        }}
      >
        <div className="container mx-auto sm:px-6 lg:px-8 mb-24">
          <HomeTitle />
          <div className="mt-56 space-y-10">
            <Affiliations affiliations={affiliations} />
            <Publications publications={publications} />
            <PortfolioCard portfolios={portfolios} />
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default HomePage;
