"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  badgeVariants,
  sectionHeaderVariants,
} from "@/utils/motion-variants";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCheckDouble,
} from "react-icons/fa";
import { CSharpSVG } from "./ui/motion-svgs";
import {
  SiAdobephotoshop,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiSvelte,
  SiJest,
  SiLua,
  SiMysql,
  SiAffinitydesigner,
  SiGnubash,
  SiAdobeillustrator,
} from "react-icons/si";
import { IconType } from "react-icons";
import React from "react";

const darkenColor = (hex: string, percent: number): string => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  r = Math.floor((r * (100 - percent)) / 100);
  g = Math.floor((g * (100 - percent)) / 100);
  b = Math.floor((b * (100 - percent)) / 100);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

interface TechIcon {
  icon: IconType;
  color: string;
  darkColor: string;
  textColor: string;
}

interface TechIconMap {
  [key: string]: TechIcon;
}

const techIcons: TechIconMap = {
  HTML5: {
    icon: FaHtml5,
    color: "#E34F26",
    darkColor: darkenColor("#E34F26", 15),
    textColor: "white",
  },
  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
    darkColor: darkenColor("#1572B6", 15),
    textColor: "white",
  },
  JavaScript: {
    icon: FaJs,
    color: "#F7DF1E",
    darkColor: darkenColor("#F7DF1E", 15),
    textColor: "black",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
    darkColor: darkenColor("#3178C6", 15),
    textColor: "white",
  },
  React: {
    icon: FaReact,
    color: "#61DAFB",
    darkColor: darkenColor("#61DAFB", 15),
    textColor: "black",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
    darkColor: "#000000",
    textColor: "white",
  },
  Vite: {
    icon: SiVite,
    color: "#646CFF",
    darkColor: darkenColor("#646CFF", 15),
    textColor: "white",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#38B2AC",
    darkColor: darkenColor("#38B2AC", 15),
    textColor: "white",
  },
  Svelte: {
    icon: SiSvelte,
    color: "#FF3E00",
    darkColor: darkenColor("#FF3E00", 15),
    textColor: "white",
  },
  "Node.js": {
    icon: FaNodeJs,
    color: "#339933",
    darkColor: darkenColor("#339933", 15),
    textColor: "white",
  },
  mySQL: {
    icon: SiMysql,
    color: "#4479A1",
    darkColor: darkenColor("#4479A1", 15),
    textColor: "white",
  },
  PHP: {
    icon: FaPhp,
    color: "#777BB4",
    darkColor: darkenColor("#777BB4", 15),
    textColor: "white",
  },
  Python: {
    icon: FaPython,
    color: "#3776AB",
    darkColor: darkenColor("#3776AB", 15),
    textColor: "white",
  },
  "C#": {
    icon: CSharpSVG,
    color: "#2F086D",
    darkColor: darkenColor("#2F086D", 15),
    textColor: "white",
  },
  "Adobe Photoshop": {
    icon: SiAdobephotoshop,
    color: "#31A8FF",
    darkColor: darkenColor("#31A8FF", 15),
    textColor: "white",
  },
  "Adobe Illustrator": {
    icon: SiAdobeillustrator,
    color: "#FF9A00",
    darkColor: darkenColor("#FF9A00", 15),
    textColor: "black",
  },
  "Affinity Designer": {
    icon: SiAffinitydesigner,
    color: "#1B72BE",
    darkColor: darkenColor("#1B72BE", 15),
    textColor: "white",
  },
  Git: {
    icon: FaGitAlt,
    color: "#F05032",
    darkColor: darkenColor("#F05032", 15),
    textColor: "white",
  },
  GitHub: {
    icon: FaGithub,
    color: "#181717",
    darkColor: "#181717",
    textColor: "white",
  },
  Jest: {
    icon: SiJest,
    color: "#C21325",
    darkColor: darkenColor("#C21325", 15),
    textColor: "white",
  },
  Docker: {
    icon: FaDocker,
    color: "#2496ED",
    darkColor: darkenColor("#2496ED", 15),
    textColor: "white",
  },
  Playwright: {
    icon: FaCheckDouble,
    color: "#2EAD33",
    darkColor: darkenColor("#2EAD33", 15),
    textColor: "white",
  },
  Lua: {
    icon: SiLua,
    color: "#2C2D72",
    darkColor: darkenColor("#2C2D72", 15),
    textColor: "white",
  },
  "Shell Scripts": {
    icon: SiGnubash,
    color: "#4EAA25",
    darkColor: darkenColor("#4EAA25", 15),
    textColor: "white",
  },
};

const MotionCard = motion(Card);
const MotionBadge = motion(Badge);

export default function TechStack() {
  const techStack = [
    {
      title: "Web Development",
      items: [
        {
          frontend: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "React",
            "Next.js",
            "Vite",
            "Tailwind CSS",
            "TypeScript",
            "Svelte",
          ],
        },
        { backend: ["Node.js", "mySQL", "PHP", "Python", "C#"] },
      ],
    },
    {
      title: "Design",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Affinity Designer"],
    },
    {
      title: "Tooling",
      items: [
        "Git",
        "GitHub",
        "Jest",
        "Docker",
        "Playwright",
        "Lua",
        "Shell Scripts",
      ],
    },
    {
      title: "Knowledge",
      items: [
        "Responsive Web Design",
        "Test-Driven Development",
        "Version Control (Git)",
        "OOP / FP",
        "Documentation",
        "CMS (NeosCMS, TYPO3)",
      ],
    },
  ];

  const renderBadge = (tech: string, index: number) => {
    const techInfo = techIcons[tech];

    if (techInfo) {
      const { icon: Icon, color, textColor } = techInfo;
      return (
        <MotionBadge
          key={`${tech}-${index}`}
          variant="outline"
          variants={badgeVariants}
          custom={index}
          className="flex items-center gap-1 transition-all duration-200 group relative p-0 overflow-hidden"
          style={{}}
        >
          <div className="flex items-center gap-1 group-hover:opacity-0 transition-opacity duration-300 px-2.5 py-0.5">
            <Icon className="h-3.5 w-3.5" />
            <span>{tech}</span>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundColor: color,
              color: textColor,
            }}
          >
            <div className="flex items-center gap-1">
              <Icon className="h-3.5 w-3.5" />
              <span>{tech}</span>
            </div>
          </div>
        </MotionBadge>
      );
    }

    return (
      <MotionBadge
        key={`${tech}-${index}`}
        variant="outline"
        variants={badgeVariants}
        custom={index}
      >
        {tech}
      </MotionBadge>
    );
  };

  return (
    <section className="py-3 pb-12 scroll-m-12" id="tech-stack">
      <div className="">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground">
            An overview of my technical expertise and skills
          </p>
        </motion.div>
        <motion.div
          className="md:grid xl:gap-8 lg:gap-4 lg:grid-cols-1 xl:grid-cols-3 md:gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((category, i) => (
            <MotionCard
              key={category.title + i}
              variants={itemVariants}
              className={`relative max-md:mt-4 ${
                i === 0 ? "md:col-span-3 lg:col-span-1 xl:col-span-3" : ""
              }`}
            >
              <BorderSpotlight />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <motion.div className="flex flex-wrap gap-2">
                  {category.title === "Knowledge" &&
                    Array.isArray(category.items) &&
                    category.items.map(
                      (item, j) =>
                        typeof item === "string" && (
                          <MotionBadge
                            key={`knowledge-${j}`}
                            variant="outline"
                            variants={badgeVariants}
                            custom={j}
                          >
                            {item}
                          </MotionBadge>
                        ),
                    )}
                  {(category.title === "Design" ||
                    category.title === "Tooling") &&
                    Array.isArray(category.items) &&
                    category.items.map(
                      (item, j) =>
                        typeof item === "string" && renderBadge(item, j),
                    )}
                  {category.title === "Web Development" &&
                    Array.isArray(category.items) &&
                    category.items.map(
                      (subCategory, j) =>
                        typeof subCategory === "object" &&
                        subCategory !== null &&
                        Object.entries(subCategory).map(([subTitle, techs]) => (
                          <div
                            key={`${subTitle}-${j}`}
                            className="w-full mb-3 last:mb-0"
                          >
                            <sub className="capitalize text-sm text-muted-foreground font-medium block mb-2">
                              {subTitle}
                            </sub>
                            <div className="flex flex-wrap gap-2">
                              {Array.isArray(techs) &&
                                techs.map(
                                  (tech, k) =>
                                    typeof tech === "string" &&
                                    renderBadge(tech, k),
                                )}
                            </div>
                          </div>
                        )),
                    )}
                </motion.div>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
