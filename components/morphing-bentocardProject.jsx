"use client";

// Imports (assuming all imports are correct and necessary)
import { Card, CardContent } from "@/components/ui/card";
import {
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
import { Badge } from "@/components/ui/badge";
import { techIcons } from "@/components/ui/techIconMap";
import { badgeVariants } from "@/utils/motion-variants";

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);
const MotionBadge = motion(Badge);

export const MorphingBentocardProject = (props) => {
  const spanClass = clsx({
    "md:col-span-1": props.data.span === 1,
    "md:col-span-2": props.data.span === 2,
  });

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

  // Function to close the modal
  const handleClose = () => {
    setIsOpenDialog(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const layoutId = `card-modal-${props.data?.id || "unique"}`;

  const renderBadge = (tech, index, isCardHovered) => {
    const techInfo = techIcons[tech];
    if (techInfo) {
      const { icon: Icon, color, textColor } = techInfo;
      return (
        <MotionBadge
          key={`${tech}-${index}-card`}
          variant="outline"
          variants={badgeVariants}
          custom={index}
          className="flex text-sm items-center gap-1 transition-all duration-200 relative p-0 overflow-hidden"
        >
          <div
            className={clsx(
              "flex items-center gap-1 transition-opacity duration-300 px-2.5 py-0.5",
              isCardHovered ? "opacity-0" : "opacity-100",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{tech}</span>
          </div>
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
              isCardHovered ? "opacity-100" : "opacity-0",
            )}
            style={{ backgroundColor: color, color: textColor }}
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
        key={`${tech}-${index}-card-fallback`}
        variant="outline"
        variants={badgeVariants}
        custom={index}
      >
        {tech}
      </MotionBadge>
    );
  };

  return (
    <>
      {/* Main clickable card */}
      <MotionCard
        layoutId={layoutId + "card"}
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, margin: "-150px" }}
        onClick={() => setIsOpenDialog(true)} // Opens the modal
        className={clsx(
          "h-fit cursor-pointer relative px-3 transition-shadow bg-card duration-500 hover:!shadow-2xl w-full lg:px-2 pt-8 pb-5 overflow-hidden flex flex-col",
          spanClass,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
      >
        <BorderSpotlight isCardHovered={isHovered} />
        <MotionCardContent
          className="flex flex-col h-full justify-between flex-grow"
          layout
        >
          <motion.div className="flex w-full">
            {props.data.icon?.(isHovered)}
          </motion.div>
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
              className="relative text-lg font-medium mt-1"
              layoutId={layoutId + "subtitle"}
              transition={transitionTween}
            >
              {props.data.subtitle}
              <p
                className="absolute opacity-0 translate-y-1.5 font-light text-muted-foreground "
                aria-hidden="true"
              >
                {props.data.hoverText}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-1.5 mt-3"
              layoutId={layoutId + "techUsed"}
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
                // Prevent the Card's onClick from firing when this button is clicked
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpenDialog(true);
                }}
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
            {/* --- 1. OVERLAY --- */}
            {/* This div covers the background. */}
            {/* onClick={handleClose} is added here. */}
            {/* z-[60] places it below the modal content wrapper. */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] w-screen h-screen"
              onClick={handleClose} // <--- Closes modal when overlay is clicked
            />

            {/* --- 2. MODAL CONTENT WRAPPER --- */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              {" "}
              {/* Added pointer-events-none here */}
              {/* --- 3. MODAL CONTENT CARD --- */}
              {/* This is the visible modal card. */}
              {/* z-[80] places it visually on top. */}
              {/* onClick={(e) => e.stopPropagation()} PREVENTS clicks *inside* the card from bubbling up to the overlay. */}
              {/* Added pointer-events-auto to make the card itself clickable again. */}
              <MotionCard
                key="modal-card"
                layoutId={layoutId + "card"}
                onClick={(e) => e.stopPropagation()} // <--- Stops click from reaching overlay
                className="relative z-[80] w-[90vw] max-h-[85vh] md:max-w-[70vw] xl:w-[50vw] bg-card p-1 md:p-6 lg:p-8 rounded-lg shadow-xl overflow-y-auto pointer-events-auto" // Added pointer-events-auto
                transition={transitionSpringLight}
              >
                {/* ... Rest of the Modal Content (CardContent, Details, Close Button) ... */}
                <CardContent className="flex flex-col">
                  <div className="flex flex-col flex-grow my-4 gap-4 justify-end mb-2">
                    <div className="flex flex-col gap-2">
                      <motion.sub
                        layoutId={layoutId + "tag"}
                        className={`transition-colors duration-500`} // Removed hover effect reference
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
                            {/* Removed ChevronsRightSVG from modal title */}
                          </div>
                        ))}
                      </motion.h2>
                    </div>
                    <motion.div
                      className="relative text-lg font-medium mt-1"
                      layoutId={layoutId + "subtitle"}
                      transition={transitionTween}
                    >
                      {props.data.subtitle}
                      <p
                        className="absolute opacity-0 translate-y-1.5 font-light text-muted-foreground "
                        aria-hidden="true"
                      >
                        {props.data.hoverText}
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex flex-wrap gap-1.5 mt-3"
                      layoutId={layoutId + "techUsed"}
                      transition={transitionTween}
                    >
                      {Array.isArray(props.data.techUsed) &&
                        props.data.techUsed.map((tech, index) =>
                          typeof tech === "string"
                            ? renderBadge(tech, index, false) // Render without hover state in modal
                            : null,
                        )}
                    </motion.div>
                    <motion.div
                      layoutId={props.data.title + "-button"}
                      className="flex flex-wrap gap-1.5 mt-3"
                    >
                      <Button asChild size="sm">
                        <Link href={props.data.url || ""} target="_blank">
                          Visit Website
                          <Globe className="ml-1.5 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href={props.data.github || ""} target="_blank">
                          View on GitHub <FaGithub className="ml-1.5 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    exit={{ opacity: 0, filter: "blur(5px)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...transitionTween, delay: 0.1 }}
                    className="mt-4 border-t pt-4 flex flex-col gap-6"
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

                {/* Close Button (already correctly inside the card) */}
                <motion.button
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...transitionTween, delay: 0.1 }}
                  onClick={handleClose} // Close button also calls handleClose
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
