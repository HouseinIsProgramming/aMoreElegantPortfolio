"use client";

import React from "react";
import { MorphingBentocard } from "./morphing-bentocard";
import { AnimatePresence, motion } from "framer-motion";

export const BentoBoxes = () => {
  return (
    <section className="container mb-96 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
      <MorphingBentocard data={projectsData.pixeldoodle} />
      <MorphingBentocard data={projectsData.typemotion} />
      <MorphingBentocard data={projectsData.typemotion} />
    </section>
  );
};

const projectsData = {
  pixeldoodle: {
    id: "pixeldoodle",
    span: 2,
    title: "PixelDoodle",
    subtitle:
      "Turn your hand written notes into images with transparent background.",
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Why I made this:",
        paragraphs: [
          "There is something about having a pen in my hand that makes able to think clearer, when I write something down I am a lot more likely to be able to understand it better remember it longer.",
          "Spaced repeatition has been proven time and time again to be one of the effective methods of learning something new.",
        ],
      },
      {
        heading: "The Problem:",
        paragraphs: ["finding hand written notes is just innefficent..."],
      },
      {
        heading: "The Solution:",
        paragraphs: [
          "And this is why PixelDoodle was made, I can just write something down, take a picture of it, then using PixelDoolde, remove the background and be left with was written down. and it can handle multiple images aswell.",
          "now these pictures can be used within Notion/Obsidian (with dark and light modes support) and be able to use the sorting and searching functions within those programs, which are undoublty better that looking through hand written notes.",
        ],
      },
    ],
  },
  typemotion: {
    id: "TypeMotion",
    title: "TypeMotion",
    subtitle: "Easy text animation prototyping",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
    details: [
      {
        heading: "Why I made this:",
        paragraphs: [
          "Creating engaging text animations often requires complex tools or libraries. TypeMotion aims to simplify this for common use cases.",
        ],
      },
      {
        heading: "Key Features:",
        paragraphs: [
          "Real-time preview, various animation presets, easy export options.",
        ],
      },
    ],
  },
};
