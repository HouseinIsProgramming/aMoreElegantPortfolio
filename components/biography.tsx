"use client";

import { FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import { Magnetic } from "./motion-primitives/magnetic";
import { MdEmail } from "react-icons/md";
import { TextEffect } from "./motion-primitives/text-effect";
import { motion } from "framer-motion";
import { listVariants, listItemVariants } from "@/utils/motion-variants";
import { ModeToggle } from "./light-dark-toggle";
import NavMenu from "./navmenu";

const MotionUL = motion.ul;

function Biography() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col justify-between h-full py-4 mt-2">
      <div>
        <TextEffect
          preset="fade-in-blur"
          as="h1"
          className="text-4xl font-bold "
        >
          Housein Abo Shaar
        </TextEffect>

        <TextEffect as="h3">Front End Developer</TextEffect>
        <TextEffect
          preset="fade-in-blur"
          as="p"
          className="text-muted-foreground"
          speedReveal={3}
        >
          with a burning passion for programming, learning new skills and
          technologies and providing solutions.
        </TextEffect>
      </div>

      <NavMenu />

      <MotionUL
        className="pointer-events-auto flex md:flex-col lg:flex-row justify-center gap-12 md:gap-0 md:w-1/2 lg:w-auto md:mx-auto md:grid md:grid-cols-2 lg:flex lg:gap-12 mt-12"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/housein-abo-shaar-920292265/"
              target="_blank"
              className="p-3"
            >
              <FaLinkedin size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="mailto:housein.aboshaar@gmail.com"
              target="_blank"
              className="p-3"
            >
              <MdEmail size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="https://docs.houseinaboshaar.com/HousienAboShaar-Resume.pdf"
              target="_blank"
              className="p-3"
            >
              <TbFileCv size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li className="content-center" variants={listItemVariants}>
          <Magnetic range={30}>
            <ModeToggle />
          </Magnetic>
        </motion.li>
      </MotionUL>
    </div>
  );
}

export default Biography;
