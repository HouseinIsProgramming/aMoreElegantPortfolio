"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

const MotionCard = motion.create(Card);
const MotionCardContent = motion.create(CardContent);

export const MorphingBentocard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <MotionCard
        className={`h-64 px-3 w-full lg:px-4 pt-8 pb-5 overflow-y-hidden lg:col-span-${props.data.span}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MotionCardContent className="flex flex-col h-full justify-between">
          <FolderArrowSVG isHovered={isHovered} />
          <motion.div
            animate={{ translateY: isHovered ? -64 : 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
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
    </>
  );
};

const BookOpenSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-book-open-check-icon lucide-book-open-check"
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

const FolderArrowSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-folder-symlink-icon lucide-folder-symlink"
      animate={{ height: isHovered ? 24 : 64, width: isHovered ? 24 : 64 }}
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
