"use client";

import { FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import { Magnetic } from "./motion-primitives/magnetic";
import { MdEmail } from "react-icons/md";
import { TextEffect } from "./motion-primitives/text-effect";
import { motion } from "framer-motion";
import { listVariants, listItemVariants } from "@/utils/motion-variants";
import { ModeToggle } from "./light-dark-toggle";

const MotionUL = motion.ul;

function Biography() {
  return (
    <div className="flex flex-col">
      <TextEffect
        preset="fade-in-blur"
        as="h1"
        className="text-4xl font-bold mt-10"
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

      <MotionUL
        className="flex w-full justify-center gap-12 mt-6"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/housein-abo-shaar-920292265/"
              className="p-3"
            >
              <FaLinkedin size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a href="mailto:housein.aboshaar@gmail.com" className="p-3">
              <MdEmail size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="https://docs.houseinaboshaar.com/HousienAboShaar-Resume.pdf"
              className="p-3"
            >
              <TbFileCv size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li className="content-center" variants={listItemVariants}>
          <Magnetic>
            <ModeToggle />
          </Magnetic>
        </motion.li>
      </MotionUL>
    </div>
  );
}

export default Biography;
