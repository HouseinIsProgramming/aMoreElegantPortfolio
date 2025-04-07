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
} from "@/components/motion-primitives/morphing-dialog"; // Assuming this path is correct
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button"; // Assuming this path is correct
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

// --- 1. Define the Data Structure and Sample Data ---
// Structure matches only the dynamic content fields from your original component
const projectsData = [
  {
    id: "pixeldoodle",
    imageSrc:
      "https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "What I Talk About When I Talk About Running - book cover", // Consider making this specific per project
    title: "PixelDoodle",
    subtitle:
      "Turn your hand written notes into images with transparent backgrounds in bulk.",
    link1Href: "#", // Replace with actual primary link
    link2Href: "#", // Replace with actual secondary link
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
    imageSrc:
      "https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "What I Talk About When I Talk About Running - book cover",
    title: "TypeMotion",
    subtitle: "Easy text animation prototyping",
    link1Href: "#", // Replace with actual primary link
    link2Href: "#", // Replace with actual secondary link
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
];

function ProjectDialogItem({ project }) {
  if (!project) return null;

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
              <div className="space-x-2">
                <Button asChild className="relative z-50">
                  <div>
                    Read more <ChevronRight />
                  </div>
                </Button>
                <Button asChild variant="outline" className="">
                  <Link target="_blank" href={project.link1Href}>
                    Visit site <ExternalLink />
                  </Link>
                </Button>
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
                  src={project.imageSrc} // Dynamic prop
                  alt={project.imageAlt} // Dynamic prop
                  className="h-auto w-[200px]" // Original classes preserved
                />
              </div>
              <div className="">
                <MorphingDialogTitle className="!text-2xl drop-shadow-lg font-medium text-black sm:text-xs">
                  {project.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="!text-lg flex flex-col gap-4 text-left text-gray-600 sm:text-xs">
                  {project.subtitle}
                  <div className="space-x-2">
                    <Button className="">something</Button>
                    <Button variant="outline" className="">
                      something
                    </Button>
                  </div>
                </MorphingDialogSubtitle>
                <div className="text-sm text-gray-700">
                  {project.details?.map((detail, index) => (
                    <React.Fragment key={`${project.id}-detail-${index}`}>
                      <h3 className={`mt-4 ${index === 1 ? "!mb-0" : ""}`}>
                        {detail.heading}
                      </h3>
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
}

export function MorphingDialogProject() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {projectsData.map((project) => (
        <ProjectDialogItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default MorphingDialogProject;
