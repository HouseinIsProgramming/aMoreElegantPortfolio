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

type TechnologyCategory = {
  title: string;
  tech?: string[];
};

type WorkExperience = {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: TechnologyCategory[];
};

export default function WorkExperience() {
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      title: "Growth Engineer and Developer Advocate",
      company: "Vendure GmbH",
      startDate: "June, 2025",
      endDate: "Present",
      description:
        "This is where I get to code cool things, watch others do the same and tell the world about it!",
    },

    {
      id: 2,
      title: "Frontend Web Developer",
      company: "FONDS professionell",
      startDate: "Feb, 2023",
      endDate: "May, 2025",
      description:
        "Started my career as a Web Developer where I got the chance to work on various projects and tasks.",
      technologies: [
        {
          title:
            "Developed new features and maintained existing ones for the company website and applications.",
          tech: ["HTML", "CSS", "Javascript", "TYPO3", "NeosCMS", "PHP"],
        },
        {
          title:
            "Created and managed online content including animated advertisement banners, newsletters, news posts, marketing emails and web pages.",
          tech: ["Photoshop", "Illustrator", "HTML5", "CSS3", "JavaScript"],
        },
        {
          title:
            "Queried databases to generate readable statistics and programmatically created reports.",
          tech: ["mySQL", "Python", "Excel"],
        },
        {
          title: "Uptime monitoring of AdServing and Newsletter systems.",
          tech: ["Google Ad Manager", "TYPO3", "Mautic"],
        },
      ],
    },
    {
      id: 3,
      title: "Mechatronics Technician",
      company: "ENPULSION GmbH",
      startDate: "Sep, 2021",
      endDate: "Jan, 2023",
      description:
        "Accomplished the achievement of making something destined for outer space.",
      technologies: [
        {
          title: "Maintenance of production machines.",
        },
        {
          title: "Documenting production procedures.",
        },
        {
          title: "Assembly of satellite parts.",
        },
        {
          title: "Data entry and quality assurance.",
        },
      ],
    },
    {
      id: 4,
      title: "Mechatronics - apprentice",
      company: "BIFI - Vienna",
      startDate: "Jun, 2020",
      endDate: "Sep, 2021",
      description: "My first job and step in the job market",
      technologies: [
        {
          title: "Introductionary training in the field of mechatronics.",
        },
      ],
    },
  ];

  return (
    <section id="work-experience" className="py-3 scroll-m-12 mb-10">
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
                    <p className="text-sm !mt-[5px] text-muted-foreground mb-4">
                      {experience.description}
                    </p>

                    <div className="space-y-3">
                      {experience.technologies?.map((techCategory, index) => (
                        <div key={index}>
                          <h4 className="text-lg mb-2">
                            - {techCategory.title}
                          </h4>
                          {techCategory.tech && (
                            <motion.div
                              className="flex flex-wrap gap-2 mb-6"
                              variants={badgeContainerVariants}
                            >
                              {techCategory.tech?.map((tech) => (
                                <MotionBadge
                                  key={tech}
                                  variant="outline"
                                  className="max-sm:dark:!border-white/20 text-sm font-light"
                                  variants={badgeVariants}
                                >
                                  {tech}
                                </MotionBadge>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
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
