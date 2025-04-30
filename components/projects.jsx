"use client";

import React from "react";
import { MorphingBentocardProject } from "./morphing-bentocardProject";
import {
  FolderArrowSVG,
  PenOpenSVG,
  AiSvgChronotes,
} from "./ui/motion-svgs.jsx";
import { motion } from "framer-motion";
import { TextEffect } from "./motion-primitives/text-effect";

export const PortfolioProjects = () => {
  return (
    <section className="scroll-m-4" id="projects">
      <TextEffect className="mb-8" preset="fade-in-blur" as="h1">
        My Portfolio Projects
      </TextEffect>
      <motion.section
        id="projects"
        className="mb-12 grid-cols-1 scroll-m-28 sm:grid-cols-2 grid gap-4"
      >
        <MorphingBentocardProject data={projectsData.inkaleo} />
        <MorphingBentocardProject data={projectsData.chronotes} />
        {/* <MorphingBentocardProject data={projectsData.pixeldoodle} /> */}
        {/* <MorphingBentocardProject data={projectsData.typemotion} /> */}
      </motion.section>
    </section>
  );
};

const projectsData = {
  inkaleo: {
    id: "Inkaleo",
    icon: (isHovered) => <PenOpenSVG isHovered={isHovered} />,
    span: 2,
    title: ["Inkaleo"],
    tag: "Landing Page",
    subtitle:
      'A simple, modern and respnsive landing page template, and my answer to "Sell me this pen"',
    techUsed: ["React", "Vite", "Tailwind CSS", "TypeScript", "Framer Motion"],
    url: "https://me.houseinaboshaar.com/inkaleo",
    github: "https://github.com/HouseinIsProgramming/inkaleo-portfolioproject",
    details: [
      {
        heading: "Key Features:",
        paragraphs: [
          "This landing page is built with **React**, **Vite**, **TailwindCSS**, **TypeScript**, and **Framer** **Motion**.",
          "**Repsonsive** and **interactive**.",
          "Easy to use and navigate.",
          "Codebase is easy to understand and is made out of **modular** and reusable components.",
        ],
      },
      {
        heading: "Time needed to build:",

        paragraphs: [
          "- this took me around **6-8** of work, spanning acorss 3 separate days.",

          "- total of **47** **commits**.",
        ],
      },
      {
        heading: "What I learned building it:",

        paragraphs: [
          'While buidling this project, I resptricted myself to only using predefined code/assets. I didn\'t let mywself make any "One-Off-Solutions" to the problems I was facing. Which was more upfront work but it made iterating and making quick changes very easy.',
          "**Pricewise-Functions** are a great way to time animations.",
          "Work-arounds for filter-/effect-**compatibility** **issues** based on different browsers, webkit (safari) specefically.",
        ],
      },
    ],
  },

  chronotes: {
    id: "chronotes",
    icon: (isHovered) => <AiSvgChronotes isHovered={isHovered} />,
    span: 2,
    title: ["Chronotes"],
    tag: "Web Application",
    subtitle:
      "A note-taking application enhanced with AI-generated flashcards, organized tags and folders, and cloud synchronization.",
    techUsed: [
      "PostgreSQL",
      "AI",
      "OAuth",
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    url: "https://chronotes.houseinaboshaar.com/",
    github: "https://github.com/HouseinIsProgramming/chronotes",
    details: [
      { heading: "Still a work in Progress", paragraphs: [""] },
      {
        heading: "Key Features:",
        paragraphs: [
          "Users can create and organize notes using tags and folders for easy retrieval.",
          "**AI-powered** flashcard generation to facilitate effective studying and review.",
          "Secure **OAuth** login integration with **cloud** **synchronization** ensures notes are accessible from anywhere.",
          "Users have a clear overview to track the last review date of each note.",
          "Responsive and intuitive user interface.",
        ],
      },
      {
        heading: "Time needed to build:",
        paragraphs: [
          "- Approximately **45-65** hours.",
          "- Total of **176 commits** for the **MVP**.",
        ],
      },
      {
        heading: "What I learned building it:",
        paragraphs: [
          "Learned how to integrate **AI** **tools** and third-party **APIs** effectively.",
          "Improved my skills in managing data relationships in **PostgreSQL**.",
          "Gained experience setting up **OAuth** **authentication** and reliable **cloud** **synchronization**.",
          "Enhanced my ability to build reusable and modular React components.",
          "Better understanding of managing state for responsive interactions.",
        ],
      },
      {
        heading: "What I am still working on:",
        paragraphs: [
          "Integrating OAuth with Google/GitHub login",
          "Better Handling of Guest Mode (Uses IndexedDB)",
          "Dark Mode",
          "Better Error Handling",
          "Better UI/UX",
        ],
      },
    ],
  },
  pixeldoodle: {
    id: "pixeldoodle",
    icon: (isHovered) => <PenOpenSVG isHovered={isHovered} />,
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
    link1Href: "#",
    link2Href: "#",
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
