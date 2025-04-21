"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  badgeVariants, // Keep for badges within project cards
  sectionHeaderVariants,
} from "@/utils/motion-variants";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import React from "react";
import { techIcons } from "@/components/ui/techIconMap";
import { ExternalLink, Github } from "lucide-react"; // Import icons for buttons
import Image from "next/image";

const MotionCard = motion(Card);
const MotionBadge = motion(Badge);

export default function PortfolioProjects() {
  // techStack array is no longer used for the main structure

  const projects = [
    {
      title: "Inkaleo Project", // Changed title slightly for differentiation
      description:
        "A simple, modern, and responsive landing page template for a fictional premium pen.",
      url: "https://me.houseinaboshaar.com/inkaleo", // Example URL
      github:
        "https://github.com/HouseinIsProgramming/inkaleo-portfolioproject", // Example GitHub
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

  // Function to render badges remains the same, used for project.stack
  const renderBadge = (tech: string, index: number) => {
    const techInfo = techIcons[tech];

    if (techInfo) {
      const { icon: Icon, color, textColor } = techInfo;
      return (
        <MotionBadge
          key={`${tech}-${index}`}
          variant="outline"
          variants={badgeVariants}
          custom={index} // Pass index if badgeVariants uses it for stagger/delay
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
    <section className="py-3 pb-12 scroll-m-12" id="projects">
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
            Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work and technical projects.
          </p>
        </motion.div>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Map over the 'projects' array */}
          {projects.map((project, i) => (
            <MotionCard
              key={project.title + i} // Use a unique key
              variants={itemVariants}
              // Removed complex col-span logic, cards flow naturally in the grid
              className="relative overflow-hidden h-full flex flex-col" // Added h-full and flex flex-col
            >
              <BorderSpotlight />
              {/* Made CardContent flex-col and fill height */}
              <CardContent className="p-5 flex flex-col flex-grow">
                {/* Optional Icon */}
                {project.icon && (
                  <img
                    src={project.icon}
                    alt={`${project.title} logo`}
                    className="h-10 w-10 mb-3 object-contain self-start"
                  />
                )}
                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {/* Project Description - set to grow */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                {/* Project Stack Badges */}
                <motion.div className="flex flex-wrap gap-2 mb-4">
                  {/* Map over project.stack, calling renderBadge */}
                  {project.stack.map((tech, k) => renderBadge(tech, k))}
                </motion.div>

                {/* Buttons Container - pushed to bottom */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t">
                  {project.url &&
                    project.url !== "#" && ( // Only show if URL exists and isn't placeholder
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      </a>
                    )}
                  {project.github &&
                    project.github !== "#" && ( // Only show if GitHub exists and isn't placeholder
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" size="sm">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                      </a>
                    )}
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
