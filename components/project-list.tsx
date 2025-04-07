"use client";

import React from "react";
import { motion } from "framer-motion";
import { sectionHeaderVariants } from "@/utils/motion-variants";
import { TextEffect } from "./motion-primitives/text-effect";

export default function ProjectList() {
  return (
    <section className="container">
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Personal Projects
        </h2>
        <TextEffect as="p" speedReveal={10} preset="fade-in-blur" per="word">
          These are some Single-Page-Web-Applicaitons that I made to help me
          streamline manual and inconvienent processes. Being able to make my
          own tools like these is by far the best perk of being a programmer.
        </TextEffect>
      </motion.div>
    </section>
  );
}
