"use client";

import React from "react";
import { MorphingBentocardProject } from "./morphing-bentocardProject";
import {
  CalendarRotateSVG,
  FolderArrowSVG,
  MonitorCogSVG,
  BookHeartSVG,
} from "./ui/motion-svgs.jsx";
import { motion } from "framer-motion";
import { TextEffect } from "./motion-primitives/text-effect";

export const PortfolioProjects = () => {
  return (
    <>
      <TextEffect className="mb-8" preset="fade-in-blur" as="h1">
        My Portfolio Projects
      </TextEffect>
      <motion.section
        id="bento-boxes"
        className="mb-12 grid-cols-1 scroll-m-28 sm:grid-cols-2 grid gap-4"
      >
        <MorphingBentocardProject data={projectsData.inkaleo} />
        <MorphingBentocardProject data={projectsData.pixeldoodle} />
        <MorphingBentocardProject data={projectsData.typemotion} />
      </motion.section>
    </>
  );
};

const projectsData = {
  inkaleo: {
    id: "Inkaleo",
    icon: (isHovered) => <MonitorCogSVG isHovered={isHovered} />,
    span: 2,
    title: ["Inkaleo"],
    tag: "Frontend Landing Page",
    subtitle:
      'A simple, modern and respnsive landing page template, and my answer to "Sell me this pen"',
    techUsed: ["React", "Vite", "Tailwind CSS", "TypeScript", "Framer Motion"],
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
  pixeldoodle: {
    id: "pixeldoodle",
    icon: (isHovered) => <MonitorCogSVG isHovered={isHovered} />,
    span: 2,
    title: ["PixelDoodle"],
    tag: "Web Application",
    subtitle:
      "Turn your hand written notes into images with transparent backgrounds.",
    hoverText:
      "Find out more about me and what I went through before starting out as a developer.",
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
    icon: (isHovered) => <FolderArrowSVG isHovered={isHovered} />,
    title: ["TypeMotion"],
    tag: "Web Application",
    subtitle: "Easy text animation prototyping",
    hoverText:
      "Find out more about me and what I went through before starting.",
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

const projects = [
  {
    title: "Inkaleo Project", // Changed title slightly for differentiation
    description:
      "A simple, modern, and responsive landing page template for a fictional premium pen.",
    url: "https://me.houseinaboshaar.com/inkaleo", // Example URL
    github: "https://github.com/HouseinIsProgramming/inkaleo-portfolioproject", // Example GitHub
    icon: "/", // Example local icon path - adjust as needed
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Vercel",
    ],
  },
  {
    title: "Another Project", // Example second project
    description:
      "Placeholder description for another cool project demonstrating different skills.",
    url: "#", // Replace with actual URL
    github: "#", // Replace with actual URL
    icon: "", // Optional: path to another icon
    stack: ["Svelte", "Node.js", "Docker", "mySQL", "JavaScript"],
  },
  // Add more project objects here
];

export default PortfolioProjects;
