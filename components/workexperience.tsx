"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

export default function PortfolioSection() {
  const workExperiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Led the development of the company's flagship SaaS product, improving performance by 40%. Mentored junior developers and implemented modern frontend practices across the team.",
      technologies: {
        frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        backend: ["Node.js", "GraphQL"],
        devops: ["GitHub Actions", "Vercel"],
        other: ["Figma", "Jest"],
      },
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed responsive web applications for clients across various industries. Collaborated with designers to implement pixel-perfect UIs and improved accessibility standards.",
      technologies: {
        frontend: ["JavaScript", "React", "CSS3", "SASS"],
        backend: ["Express", "MongoDB"],
        devops: ["Docker", "AWS"],
        other: ["Redux", "Storybook"],
      },
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "StartUp Ventures",
      startDate: "Jun 2017",
      endDate: "Feb 2018",
      description:
        "Assisted in building and maintaining company websites and web applications. Participated in code reviews and implemented feedback from senior developers.",
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        backend: ["PHP", "MySQL"],
        other: ["Bootstrap", "WordPress"],
      },
    },
  ];

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
    <>
      <section className="py-12 md:py-16">
        <div className="">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 text-muted-foreground">
              My professional journey and the skills I`ve developed along the
              way
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {workExperiences.map((experience) => (
              <MotionCard
                key={experience.id}
                className="overflow-hidden"
                variants={itemVariants}
              >
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-[2fr_3fr]">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-base font-medium">
                        {experience.company}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      <div className="space-y-3">
                        {experience.technologies.frontend && (
                          <div>
                            <h4 className="text-sm font-semibold mb-1">
                              Frontend
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={badgeContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {experience.technologies.frontend.map((tech) => (
                                <MotionBadge
                                  key={tech}
                                  variant="secondary"
                                  variants={badgeVariants}
                                >
                                  {tech}
                                </MotionBadge>
                              ))}
                            </motion.div>
                          </div>
                        )}

                        {experience.technologies.backend && (
                          <div>
                            <h4 className="text-sm font-semibold mb-1">
                              Backend
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={badgeContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {experience.technologies.backend.map((tech) => (
                                <MotionBadge
                                  key={tech}
                                  variant="secondary"
                                  variants={badgeVariants}
                                >
                                  {tech}
                                </MotionBadge>
                              ))}
                            </motion.div>
                          </div>
                        )}

                        {experience.technologies.devops && (
                          <div>
                            <h4 className="text-sm font-semibold mb-1">
                              DevOps
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={badgeContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {experience.technologies.devops.map((tech) => (
                                <MotionBadge
                                  key={tech}
                                  variant="secondary"
                                  variants={badgeVariants}
                                >
                                  {tech}
                                </MotionBadge>
                              ))}
                            </motion.div>
                          </div>
                        )}

                        {experience.technologies.other && (
                          <div>
                            <h4 className="text-sm font-semibold mb-1">
                              Other
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={badgeContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {experience.technologies.other.map((tech) => (
                                <MotionBadge
                                  key={tech}
                                  variant="secondary"
                                  variants={badgeVariants}
                                >
                                  {tech}
                                </MotionBadge>
                              ))}
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="my-4" />

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
                  initial="hidden"
                  animate="visible"
                >
                  {techStack.webDevelopment.map((tech) => (
                    <MotionBadge
                      key={tech}
                      variant="outline"
                      variants={badgeVariants}
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
                  initial="hidden"
                  animate="visible"
                >
                  {techStack.design.map((tech) => (
                    <MotionBadge
                      key={tech}
                      variant="outline"
                      variants={badgeVariants}
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
                  initial="hidden"
                  animate="visible"
                >
                  {techStack.tooling.map((tech) => (
                    <MotionBadge
                      key={tech}
                      variant="outline"
                      variants={badgeVariants}
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
                  initial="hidden"
                  animate="visible"
                >
                  {techStack.knowledge.map((tech) => (
                    <MotionBadge
                      key={tech}
                      variant="outline"
                      variants={badgeVariants}
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
    </>
  );
}
