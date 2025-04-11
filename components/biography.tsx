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
import { Button } from "@/components/ui/button";

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
        className="flex items-center justify-center gap-8 lg:mt-12 mt-6 md:grid md:grid-cols-2 md:place-items-center md:gap-x-14 mb-4 md:gap-y-0 lg:flex lg:flex-row lg:gap-8"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/housein-abo-shaar-920292265/"
              target="_blank"
              className="p-1"
            >
              <FaLinkedin size={36} />
            </a>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <Button variant="outline" size="icon" style={{ padding: 1 }}>
              <a
                href="mailto:housein.aboshaar@gmail.com"
                target="_blank"
                className="p-1"
              >
                <MdEmail size={36} />
              </a>
            </Button>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic>
            <Button variant="outline" size="icon" style={{ padding: 1 }}>
              <a
                href="https://docs.houseinaboshaar.com/HousienAboShaar-Resume.pdf"
                target="_blank"
                className="p-1"
              >
                <TbFileCv size={36} />
              </a>
            </Button>
          </Magnetic>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Magnetic range={30}>
            <ModeToggle />
          </Magnetic>
        </motion.li>
      </MotionUL>
    </div>
  );
}

export default Biography;
