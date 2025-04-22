"use client";

// Imports from MorphingBentocardProject
import { Card, CardContent } from "@/components/ui/card";
import {
  // transitionSpring, // Likely unused now
  transitionSpringLight,
  transitionTween,
} from "@/utils/motion-variants";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import { ChevronsRightSVG } from "./ui/motion-svgs.jsx";
import { itemVariants } from "@/utils/motion-variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ---> Added Imports from TechStack <---
import { Badge } from "@/components/ui/badge";
import { techIcons } from "@/components/ui/techIconMap"; // Assuming path is correct
import { badgeVariants } from "@/utils/motion-variants"; // Assuming badgeVariants are needed

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);
const MotionBadge = motion(Badge); // Define MotionBadge here

export const MorphingBentocardProject = (props) => {
  const spanClass = clsx({
    "md:col-span-1": props.data.span === 1,
    "md:col-span-2": props.data.span === 2,
  });

  // ----> This state now controls the badge hover effect <----
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpenDialog) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpenDialog]);

  const handleClose = () => {
    setIsOpenDialog(false);
    // Optional: Reset hover state immediately if desired when closing modal
    // setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const layoutId = `card-modal-${props.data?.id || "unique"}`;

  // ---> Modified renderBadge function <---
  // It now accepts `isCardHovered` as an argument
  const renderBadge = (tech, index, isCardHovered) => {
    const techInfo = techIcons[tech]; // Assumes techIcons is available

    if (techInfo) {
      const { icon: Icon, color, textColor } = techInfo;
      return (
        <MotionBadge
          key={`${tech}-${index}-card`} // Added unique part to key
          variant="outline"
          variants={badgeVariants} // Apply variants if badges should animate individually
          custom={index} // Pass index for stagger
          // Removed 'group' as hover is now controlled by parent card state
          className="flex text-sm items-center gap-1 transition-all duration-200 relative p-0 overflow-hidden"
        >
          {/* Default view: visible when card is NOT hovered */}
          <div
            className={clsx(
              "flex items-center gap-1 transition-opacity duration-300 px-2.5 py-0.5",
              isCardHovered ? "opacity-0" : "opacity-100", // Control opacity based on card hover
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{tech}</span>
          </div>
          {/* Hover view: visible when card IS hovered */}
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
              isCardHovered ? "opacity-100" : "opacity-0", // Control opacity based on card hover
            )}
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

    // Fallback for techs not in techIcons map (no hover effect defined here)
    return (
      <MotionBadge
        key={`${tech}-${index}-card-fallback`} // Added unique part to key
        variant="outline"
        variants={badgeVariants} // Apply variants if badges should animate individually
        custom={index} // Pass index for stagger
      >
        {tech}
      </MotionBadge>
    );
  };
  // ---> End of modified renderBadge function <---

  return (
    <>
      <MotionCard
        layoutId={layoutId + "card"}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, margin: "-150px" }}
        onClick={() => setIsOpenDialog(true)}
        className={clsx(
          "h-fit cursor-pointer relative px-3 transition-shadow bg-card duration-500 hover:!shadow-2xl w-full lg:px-2 pt-8 pb-5 overflow-hidden flex flex-col", // Added flex flex-col
          spanClass,
        )}
        // ----> These handlers control the isHovered state <----
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
      >
        <BorderSpotlight isCardHovered={isHovered} />{" "}
        {/* Pass hover state if needed */}
        <MotionCardContent
          className="flex flex-col h-full justify-between flex-grow" // Added flex-grow
          layout
        >
          <motion.div className="flex w-full">
            {props.data.icon?.(isHovered)}
          </motion.div>

          {/* Container for tag, title, subtitle, and badges */}
          <div className="flex flex-col flex-grow my-4 gap-4 justify-end mb-2">
            <div className="flex flex-col gap-1">
              <motion.sub
                layoutId={layoutId + "tag"}
                className={`transition-colors duration-500 ${
                  isHovered ? "!text-[#4285F4]" : ""
                }`}
                transition={transitionTween}
              >
                {props.data.tag}
              </motion.sub>
              <motion.h2
                layoutId={layoutId + "title"}
                transition={transitionTween}
                className={clsx(" whitespace-nowrap flex flex-wrap")}
              >
                {props.data.title.map((text, i) => (
                  <div className="mr-1 leading-tight flex items-center" key={i}>
                    {text}
                    {i === props.data.title.length - 1 && (
                      <ChevronsRightSVG isHovered={isHovered} />
                    )}
                  </div>
                ))}
              </motion.h2>
            </div>
            <motion.div
              className="relative text-lg font-medium mt-1" // Added mt-1
              layoutId={layoutId + "subtitle"}
              transition={transitionTween}
            >
              {props.data.subtitle}
              {/* Hover text P is kept hidden for layout animation */}
              <p
                className="absolute opacity-0 translate-y-1.5 font-light text-muted-foreground "
                aria-hidden="true"
              >
                {props.data.hoverText}
              </p>
            </motion.div>
            {/* ---> Tech Used Badges Section (Card View) <--- */}
            <motion.div
              className="flex flex-wrap gap-1.5 mt-3" // Adjusted gap/margin
              // Optional: Animate badges container if needed
              layoutId={layoutId + "techUsed"} // Avoid animating container if badges animate individually
              transition={transitionTween}
            >
              {Array.isArray(props.data.techUsed) &&
                props.data.techUsed.map((tech, index) =>
                  typeof tech === "string"
                    ? renderBadge(tech, index, isHovered)
                    : null,
                )}
            </motion.div>
            <motion.div
              layoutId={props.data.title + "-button"}
              className="flex flex-wrap gap-1.5 mt-3"
            >
              <Button asChild size="sm">
                <Link href={props.data.url || ""} target="_blank">
                  <Globe />
                  Visit Website
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={props.data.github || ""} target="_blank">
                  <FaGithub />
                  View on GitHub
                </Link>
              </Button>
              <Button
                onClick={() => setIsOpenDialog(true)}
                asChild
                size="sm"
                variant="outline"
              >
                <span>
                  <ExternalLink />
                  Read more
                </span>
              </Button>
            </motion.div>
          </div>
        </MotionCardContent>
      </MotionCard>

      {/* Modal */}
      <AnimatePresence>
        {isOpenDialog && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] w-screen h-screen"
              onClick={handleClose}
            />
            <div className="fixed w-auto h-auto m-auto inset-0 z-[70] flex items-center justify-center p-4">
              <MotionCard
                key="modal-card"
                layoutId={layoutId + "card"}
                className="relative z-[80] w-[90vw] max-h-[85vh] md:max-w-[70vw] xl:w-[50vw] bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-xl overflow-y-auto"
                transition={transitionSpringLight}
                // ----> Add hover handlers to modal if you want the effect there too <----
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                <CardContent className="flex flex-col">
                  <div className="flex flex-col flex-grow my-4 gap-4 justify-end mb-2">
                    <div className="flex flex-col gap-2">
                      <motion.sub
                        layoutId={layoutId + "tag"}
                        className={`transition-colors duration-500 ${
                          isHovered ? "!text-[#4285F4]" : ""
                        }`}
                        transition={transitionTween}
                      >
                        {props.data.tag}
                      </motion.sub>
                      <motion.h2
                        layoutId={layoutId + "title"}
                        transition={transitionTween}
                        className={clsx(" whitespace-nowrap flex flex-wrap")}
                      >
                        {props.data.title.map((text, i) => (
                          <div
                            className="mr-1 leading-tight flex items-center"
                            key={i}
                          >
                            {text}
                            {i === props.data.title.length - 1 && (
                              <ChevronsRightSVG isHovered={isHovered} />
                            )}
                          </div>
                        ))}
                      </motion.h2>
                    </div>
                    <motion.div
                      className="relative text-lg font-medium mt-1" // Added mt-1
                      layoutId={layoutId + "subtitle"}
                      transition={transitionTween}
                    >
                      {props.data.subtitle}
                      {/* Hover text P is kept hidden for layout animation */}
                      <p
                        className="absolute opacity-0 translate-y-1.5 font-light text-muted-foreground "
                        aria-hidden="true"
                      >
                        {props.data.hoverText}
                      </p>
                    </motion.div>
                    {/* ---> Tech Used Badges Section (Card View) <--- */}
                    <motion.div
                      className="flex flex-wrap gap-1.5 mt-3" // Adjusted gap/margin
                      // Optional: Animate badges container if needed
                      layoutId={layoutId + "techUsed"} // Avoid animating container if badges animate individually
                      transition={transitionTween}
                    >
                      {Array.isArray(props.data.techUsed) &&
                        props.data.techUsed.map((tech, index) =>
                          typeof tech === "string"
                            ? renderBadge(tech, index, isHovered)
                            : null,
                        )}
                    </motion.div>
                    <motion.div
                      layoutId={props.data.title + "-button"}
                      className="flex flex-wrap gap-1.5 mt-3"
                    >
                      <Button asChild size="sm">
                        <Link href="/projects">
                          Visit Website
                          <Globe />
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href="/projects">
                          View on GitHub <FaGithub />
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href="">
                          Read more <ExternalLink />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Details section */}
                  <motion.div
                    exit={{ opacity: 0, filter: "blur(5px)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...transitionTween, delay: 0.1 }}
                    className="mt-4 border-t pt-4 flex flex-col gap-6" // Added border-top and padding-top
                  >
                    {props.data.details.map((section, i) => (
                      <div key={i}>
                        <h2 className="text-lg font-semibold !leading-snug text-foreground mb-2">
                          {section.heading}
                        </h2>
                        <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90 font-light">
                          {section.paragraphs.map((text, j) => (
                            <ReactMarkdown key={j}>{text}</ReactMarkdown>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </CardContent>

                {/* Close Button */}
                <motion.button
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...transitionTween, delay: 0.1 }}
                  onClick={handleClose}
                  className="absolute cursor-pointer top-3 right-3 p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </MotionCard>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
