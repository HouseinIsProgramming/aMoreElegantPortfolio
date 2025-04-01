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
            "Tailwind CSS",
            "TypeScript",
            "Svelte",
            "Vue.js",
          ],
        },
        { backend: ["Node.js", "Netxt.js", "mySQL", "PHP", "Python"] },
      ],
    },
    {
      title: "Design",
      items: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Responsive Design",
        "UI/UX",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Tooling",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Webpack",
        "Vite",
        "Jest",
        "Testing Library",
        "Cypress",
        "Storybook",
        "npm",
        "yarn",
        "pnpm",
        "ESLint",
        "Prettier",
      ],
    },
    {
      title: "Knowledge",
      items: [
        "Agile Methodology",
        "Scrum",
        "CI/CD",
        "Performance Optimization",
        "Accessibility (WCAG)",
        "SEO",
        "Technical Writing",
        "Mentoring",
        "Project Management",
        "Problem Solving",
      ],
    },
  ];

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
                  {Array.isArray(category.items) &&
                  category.items.every((item) => typeof item === "string") ? (
                    category.items.map((tech, j) => (
                      <MotionBadge
                        key={tech}
                        variant="outline"
                        variants={badgeVariants}
                        custom={j}
                      >
                        {tech}
                      </MotionBadge>
                    ))
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
                                    techs.map((tech, k) => (
                                      <MotionBadge
                                        key={`${title}-${k}`}
                                        variant="outline"
                                        variants={badgeVariants}
                                        custom={k}
                                      >
                                        {tech}
                                      </MotionBadge>
                                    ))}
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
