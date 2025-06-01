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
import React from "react";
import { techIcons } from "@/components/ui/techIconMap";

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
        { backend: ["Node.js", "mySQL", "PHP", "Python"] },
      ],
    },
    {
      title: "Design",
      items: [
        "Adobe Photoshop",
        "Figma",
        "Adobe Illustrator",
        "Affinity Designer",
      ],
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
          className="flex text-sm items-center gap-1 transition-all duration-200 group relative p-0 overflow-hidden"
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
              <CardContent className="p-5">
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
                            className="text-sm"
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
