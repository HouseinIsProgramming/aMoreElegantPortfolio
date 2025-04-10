"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import clsx from "clsx";
import { transitionSpring } from "@/utils/motion-variants";
import { FolderArrowSVG } from "./ui/motion-svgs.jsx";

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);

export const MorphingBentocard = (props) => {
  const spanClass = clsx({
    "md:col-span-1": props.data.span === 1,
    "md:col-span-2": props.data.span === 2,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleClose = () => {
    setIsOpenDialog(false);
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
    setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  const layoutId = `card-modal-${props.data?.id || "unique"}`;

  return (
    <>
      <MotionCard
        layoutId={layoutId + "card"}
        onClick={() => setIsOpenDialog(true)}
        className={clsx(
          "h-80 relative px-3 transition-shadow bg-card duration-500 hover:!shadow-2xl w-full lg:px-4 pt-8 pb-5 overflow-y-hidden",
          spanClass,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        // style={{ columnSpan: props.data.span }}
      >
        <BorderSpotlight />

        <MotionCardContent
          className="flex flex-col h-full justify-between"
          layout
        >
          <FolderArrowSVG isHovered={isHovered} />
          <motion.div
            animate={{ translateY: isHovered ? -64 : 0 }}
            transition={transitionSpring}
          >
            <sub
              className={`transition-colors duration-500 ${isHovered ? "!text-[#4285F4]" : ""}`}
            >
              {props.data.tag}
            </sub>
            <motion.h2
              layoutId={layoutId + "title"}
              transition={{ duration: 0.2, ease: "easeInOut", type: "tween" }}
            >
              {props.data.title}
            </motion.h2>
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
                layoutId={layoutId + "card"}
                className="relative z-50 w-2xl md:max-w-[80vw] xl:w-[50vw] bg-card p-6 rounded-lg shadow-lg max-h-[90vh] overflow-auto"
                transition={{ duration: 0.2 }}
              >
                <MotionCardContent className="flex flex-col justify-between">
                  <div>
                    <motion.h2
                      className="ml-0 mt-32"
                      layoutId={layoutId + "title"}
                    >
                      {props.data.title}
                    </motion.h2>
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
