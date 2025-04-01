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

export default function WorkExperience() {
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

  return (
    <section className="py-12 md:py-16">
      <div className="">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional journey and the skills I`ve developed along the way
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {workExperiences.map((experience) => (
            <MotionCard
              key={experience.id}
              className="overflow-hidden relative"
              variants={itemVariants}
            >
              <BorderSpotlight />
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
                          <h4 className="text-sm font-semibold mb-1">DevOps</h4>
                          <motion.div
                            className="flex flex-wrap gap-2"
                            variants={badgeContainerVariants}
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
                          <h4 className="text-sm font-semibold mb-1">Other</h4>
                          <motion.div
                            className="flex flex-wrap gap-2"
                            variants={badgeContainerVariants}
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
  );
}
