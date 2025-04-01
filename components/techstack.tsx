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

// Create motion components from regular components
const MotionCard = motion.create(Card);
const MotionBadge = motion.create(Badge);

export default function TechStack() {
  const techStack = {
    webDevelopment: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "Vue.js",
      "Node.js",
      "Express",
      "GraphQL",
      "REST API",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
    design: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Responsive Design",
      "UI/UX",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    tooling: [
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
    knowledge: [
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
  };

  return (
    <section className="py-12 md:py-16">
      <div className="">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
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
          animate="visible"
        >
          <MotionCard variants={itemVariants}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {techStack.webDevelopment.map((tech, i) => (
                  <MotionBadge
                    key={tech}
                    variant="outline"
                    variants={badgeVariants}
                    custom={i}
                  >
                    {tech}
                  </MotionBadge>
                ))}
              </motion.div>
            </CardContent>
          </MotionCard>

          <MotionCard variants={itemVariants}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {techStack.design.map((tech, i) => (
                  <MotionBadge
                    key={tech}
                    variant="outline"
                    variants={badgeVariants}
                    custom={i}
                  >
                    {tech}
                  </MotionBadge>
                ))}
              </motion.div>
            </CardContent>
          </MotionCard>

          <MotionCard variants={itemVariants}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Tooling</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {techStack.tooling.map((tech, i) => (
                  <MotionBadge
                    key={tech}
                    variant="outline"
                    variants={badgeVariants}
                    custom={i}
                  >
                    {tech}
                  </MotionBadge>
                ))}
              </motion.div>
            </CardContent>
          </MotionCard>

          <MotionCard variants={itemVariants}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Knowledge</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {techStack.knowledge.map((tech, i) => (
                  <MotionBadge
                    key={tech}
                    variant="outline"
                    variants={badgeVariants}
                    custom={i}
                  >
                    {tech}
                  </MotionBadge>
                ))}
              </motion.div>
            </CardContent>
          </MotionCard>
        </motion.div>
      </div>
    </section>
  );
}
