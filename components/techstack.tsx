"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  badgeContainerVariants,
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
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCheckDouble,
} from "react-icons/fa";
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
} from "react-icons/si";
import { IconType } from "react-icons";

// Utility function to darken a color
const darkenColor = (hex: string, percent: number): string => {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Darken
  r = Math.floor((r * (100 - percent)) / 100);
  g = Math.floor((g * (100 - percent)) / 100);
  b = Math.floor((b * (100 - percent)) / 100);

  // Convert back to hex
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Define interfaces for tech icons
interface TechIcon {
  icon: IconType;
  color: string;
  darkColor: string;
  textColor: string;
}

interface TechIconMap {
  [key: string]: TechIcon;
}

// Create techIcons mapping
const techIcons: TechIconMap = {
  // Frontend
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

  // Backend
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

  // Design
  "Adobe Photoshop": {
    icon: SiAdobephotoshop,
    color: "#29446B",
    darkColor: darkenColor("#31A8FF", 15),
    textColor: "white",
  },
  "Adobe Illustrator": {
    icon: SiAdobephotoshop,
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

  // Tooling
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
    icon: FaJs, // Using a generic icon for shell scripts
    color: "#4EAA25",
    darkColor: darkenColor("#4EAA25", 15),
    textColor: "white",
  },
};

// Create motion components from regular components
const MotionCard = motion.create(Card);
const MotionBadge = motion.create(Badge);

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
            "Next.js", // Fixed typo from "Netxt.js"
            "Vite",
            "Tailwind CSS",
            "TypeScript",
            "Svelte",
          ],
        },
        { backend: ["Node.js", "mySQL", "PHP", "Python"] },
      ],
    },
    {
      title: "Design",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Affinity Designer"],
    },
    {
      title: "Tooling",
      items: ["Git", "GitHub", "Jest", "Playwright", "Lua", "Shell Scripts"],
    },
    {
      title: "Knowledge",
      items: [
        "Object-Oriented Programming",
        "Test-Driven Development",
        "Responsive Web Design",
        "Version Control (Git)",
        "Documentation",
        "Content Management Systems (CMS)",
      ],
    },
  ];

  // Render a badge with an icon if available
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
          className="flex items-center gap-1 transition-all duration-200 group"
          style={{}}
        >
          <div className="flex items-center gap-1 group-hover:text-opacity-0 transition-opacity">
            <Icon className="h-3.5 w-3.5" />
            <span>{tech}</span>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md duration-500 overflow-hidden"
            style={{
              backgroundColor: color,
              color: textColor,
            }}
          >
            <div className="flex items-center gap-1 px-3 py-1">
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
    <section className="py-12 md:py-16">
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
            A comprehensive overview of my technical expertise and skills
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((category, i) => (
            <MotionCard key={i} variants={itemVariants} className="relative">
              <BorderSpotlight />
              <CardContent className="p-6 py-2">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                >
                  {category.title === "Knowledge" ? (
                    // Render knowledge items without icons
                    Array.isArray(category.items) &&
                    category.items.map((tech, j) => (
                      <MotionBadge
                        key={j}
                        variant="outline"
                        variants={badgeVariants}
                        custom={j}
                      >
                        {tech}
                      </MotionBadge>
                    ))
                  ) : // For other categories, use icons when available
                  Array.isArray(category.items) &&
                    category.items.every((item) => typeof item === "string") ? (
                    category.items.map((tech, j) => renderBadge(tech, j))
                  ) : (
                    <>
                      {category.items.map((nestedItem, j) => {
                        if (
                          typeof nestedItem === "object" &&
                          nestedItem !== null
                        ) {
                          return Object.entries(nestedItem).map(
                            ([title, techs]) => (
                              <div key={j} className="w-full">
                                <sub className="capitalize">{title}</sub>
                                <div className="flex flex-wrap mt-2 gap-2">
                                  {Array.isArray(techs) &&
                                    techs.map((tech, k) =>
                                      renderBadge(tech, k)
                                    )}
                                </div>
                              </div>
                            )
                          );
                        }
                        return null;
                      })}
                    </>
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
