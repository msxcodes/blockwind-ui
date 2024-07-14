"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../ui/hero-highlight";
import { Button } from "../../ui/button";
import { MovingButton } from "../../ui/moving-button";
import HeroFooter from "./hero-footer";

export function HeroBanner() {
  const words = ["better", "beautiful", "modern"];

  return (
    <div className="relative">
      <HeroHighlight className="space-y-4 z-0">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-tight text-center mx-auto "
        >
          Build your websites easily <br /> and fast with{" "}
          <Highlight>Blockwind UI</Highlight>
        </motion.h1>

        <p className="text-center opacity-70 font-medium">
          Sailboat UI is a modern UI component library for Tailwind CSS. Get
          started with 150+ open-source <br /> Tailwind CSS components, and make
          it easy to build your products.
        </p>
        <div className="flex items-center gap-2 justify-center text-center">
          <Button className="bg-blue-500 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            Get Started
          </Button>
          <MovingButton
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Browse Components</span>
          </MovingButton>
        </div>
        <HeroFooter />
      </HeroHighlight>
      <div className="w-full h-[250px] absolute -bottom-12 left-0 bg-gradient-to-b from-[rgba(4,21,45,0)] to-white dark:to-black"></div>
    </div>
  );
}
