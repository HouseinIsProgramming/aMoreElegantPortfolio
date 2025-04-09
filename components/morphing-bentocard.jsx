"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import { Spotlight } from "./motion-primitives/spotlight";

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);

export const MorphingBentocard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleClose = () => setIsOpenDialog(false);

  const layoutId = `card-modal-${props.data?.id || "unique"}`;

  return (
    <>
      <MotionCard
        layoutId={layoutId}
        onClick={() => setIsOpenDialog(true)}
        className={`h-80 relative px-3 transition-shadow duration-500 hover:!shadow-2xl w-full lg:px-4 pt-8 pb-5 overflow-y-hidden md:col-span-${props.data.span}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <BorderSpotlight />

        <MotionCardContent className="flex flex-col h-full justify-between">
          <FolderArrowSVG isHovered={isHovered} />
          <motion.div
            animate={{ translateY: isHovered ? -64 : 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <sub
              className={`transition-colors duration-500 ${isHovered ? "!text-[#4285F4]" : ""}`}
            >
              {props.data.tag}
            </sub>
            <h2>{props.data.title}</h2>
            <div className="relative">
              {props.data.subtitle}
              <p className="absolute translate-y-1.5">
                loremaskjdkasjd kasjdkasjd kajdk jaskjd kasjdkajskdj aksj
              </p>
            </div>
          </motion.div>
        </MotionCardContent>
      </MotionCard>

      <AnimatePresence>
        {isOpenDialog && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={handleClose}
            />

            <div className="fixed col-span-2 inset-0 z-50 flex items-center justify-center p-4">
              <MotionCard
                key="modal-card"
                layoutId={layoutId}
                className="relative z-50 w-2xl md:max-w-[80vw] xl:w-[50vw] bg-card p-6 rounded-lg shadow-lg max-h-[90vh] overflow-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MotionCardContent className="flex flex-col justify-between">
                  <div>
                    <h2>{props.data.title}</h2>
                    <div className="relative mt-2">
                      {props.data.subtitle}
                      <p className="absolute translate-y-1.5 opacity-70">
                        loremaskjdkasjd kasjdkasjd kajdk jaskjd kasjdkajskdj
                        aksj
                      </p>
                      {/* TODO: Add more detailed modal content below */}
                      <div className="mt-8"></div>
                    </div>
                  </div>
                </MotionCardContent>

                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                </button>
              </MotionCard>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const FolderArrowSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // Corrected attribute name
      strokeLinecap="round" // Corrected attribute name
      strokeLinejoin="round" // Corrected attribute name
      className="lucide lucide-folder-symlink-icon lucide-folder-symlink" // Use className instead of class
      animate={{
        color: isHovered ? "#4285F4" : "black",
        height: isHovered ? 24 : 64,
        width: isHovered ? 24 : 64,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <motion.path
        animate={{ pathLength: isHovered ? 1 : 0.8 }}
        d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
      />
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0, ease: "easeOut" }}
        d="m8 16 3-3-3-3"
      />
    </motion.svg>
  );
};

// BookOpenSVG is defined but not used in MorphingBentocard
const BookOpenSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // Corrected attribute name
      strokeLinecap="round" // Corrected attribute name
      strokeLinejoin="round" // Corrected attribute name
      className="lucide lucide-book-open-check-icon lucide-book-open-check" // Use className instead of class
    >
      <path d="M12 21V7" />
      <motion.path
        animate={{ pathLength: isHovered ? 1 : 0 }}
        d="m16 12 2 2 4-4"
      />
      <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
    </motion.svg>
  );
};
