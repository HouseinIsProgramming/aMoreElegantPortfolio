"use client";

import React from "react"; // Import React
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button"; // Assuming this path is correct
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

// --- Define TypeScript Interfaces ---

interface ProjectDetail {
  heading: string;
  paragraphs: string[];
}

interface ProjectType {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  link1Href?: string; // Optional link (e.g., live demo, main link)
  link2Href?: string; // Optional link (e.g., repo link)
  details: ProjectDetail[];
}

// --- 1. Define the Data Structure and Sample Data ---
// Apply the ProjectType interface to the array
const projectsData: ProjectType[] = [
  {
    id: "pixeldoodle",
    imageSrc:
      "https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "PixelDoodle Project Mockup", // Made alt text more specific
    title: "PixelDoodle",
    subtitle:
      "Turn your hand written notes into images with transparent backgrounds in bulk.",
    // link1Href: "#", // Example: This project might only have one link
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
  {
    id: "TypeMotion",
    imageSrc: "https://placehold.co/400x600/729B79/e1e4dc?text=TypeMotion", // Example image
    imageAlt: "TypeMotion Project Mockup", // Made alt text more specific
    title: "TypeMotion",
    subtitle: "Easy text animation prototyping",
    link1Href: "#", // Replace with actual primary link (e.g., Live Site)
    link2Href: "#", // Replace with actual secondary link (e.g., GitHub)
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
];

// Define props interface for the item component
interface ProjectDialogItemProps {
  project: ProjectType;
}

// --- 2. Create the Component for a Single Project Dialog ---
// Added types for props and component
const ProjectDialogItem: React.FC<ProjectDialogItemProps> = ({ project }) => {
  // No null check needed due to TypeScript type guarantee if used correctly
  // (unless project could truly be undefined/null passed from parent)

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "16px",
        }}
        className="border grow border-gray-200/60 bg-white"
      >
        <div className="flex items-center gap-4 p-3">
          <MorphingDialogImage
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-48 aspect-[2/3] object-cover object-top"
            style={{
              borderRadius: "12px",
            }}
          />
          <div className="flex flex-col items-start justify-between !h-full gap-8">
            <MorphingDialogTitle className="!text-2xl drop-shadow-lg font-medium text-black sm:text-xs">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="!text-lg flex flex-col gap-4 text-left text-gray-600 sm:text-xs">
              {project.subtitle}
              <div className="space-x-2 space-y-2">
                <Button asChild className="relative z-50">
                  <div>
                    Read more <ChevronRight className="inline h-4 w-4" />{" "}
                  </div>
                </Button>
                {project.link1Href && (
                  <Button asChild variant="outline" className="">
                    <Link target="_blank" href={project.link1Href}>
                      Visit site{" "}
                      <ExternalLink className="inline h-4 w-4 ml-1" />{" "}
                      {/* Added size/margin */}
                    </Link>
                  </Button>
                )}
                {project.link2Href &&
                  !project.link1Href && ( // Show only if link1 doesn't exist
                    <Button asChild variant="outline" className="">
                      <Link target="_blank" href={project.link2Href}>
                        Source <ExternalLink className="inline h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  )}
              </div>
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh] overflow-y-scroll" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <MorphingDialogTitle className="!text-2xl drop-shadow-lg font-medium text-black sm:text-xs">
                  {project.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="!text-lg flex flex-col gap-4 text-left text-gray-600 sm:text-xs">
                  {project.subtitle}
                  <div className="space-x-2">
                    {/* These buttons remain static as per original */}
                    <Button className="">something</Button>
                    <Button variant="outline" className="">
                      something
                    </Button>
                  </div>
                </MorphingDialogSubtitle>
                <div className="text-sm text-gray-700">
                  {/* Map over details, checking if it exists */}
                  {project.details?.map((detail, index) => (
                    <React.Fragment key={`${project.id}-detail-${index}`}>
                      <h3 className={`mt-4 ${index === 1 ? "!mb-0" : ""}`}>
                        {detail.heading}
                      </h3>
                      {/* Map over paragraphs, checking if it exists */}
                      {detail.paragraphs?.map((paragraph, pIndex) => (
                        <p
                          key={`${project.id}-detail-${index}-p-${pIndex}`}
                          className={pIndex === 0 ? "!mt-0" : ""}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-red-700 dark:text-white dark:bg-gray-700 bg-gray-200 rounded-full p-1" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

// --- 3. Create the Component to Display the List of Projects ---
// Added type for the component
export const MorphingDialogProject: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {projectsData.map((project) => (
        <ProjectDialogItem key={project.id} project={project} />
      ))}
    </div>
  );
};

// Export the main display component
export default MorphingDialogProject;
