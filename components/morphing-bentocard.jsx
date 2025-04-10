"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  transitionSpring,
  transitionTween,
  transitionSpringLight,
} from "@/utils/motion-variants";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import { FolderArrowSVG } from "./ui/motion-svgs.jsx";
import ReactMarkdown from "react-markdown";

const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);

export const MorphingBentocard = (props) => {
  const spanClass = clsx({
    "md:col-span-1": props.data.span === 1,
    "md:col-span-2": props.data.span === 2,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [hoverTextHeight, setHoverTextHeight] = useState(0);
  const [contentDivHeight, setContentDivHeight] = useState(0);
  const [contentDivWidth, setContentDivWidth] = useState(0);

  const hoverTextRef = useRef(null);
  const contentDivRef = useRef(null); // Ref for the content div

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpenDialog) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenDialog]);

  const handleClose = () => {
    setIsOpenDialog(false);
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
    setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  const handleMouseEnter = () => {
    if (hoverTextRef.current) {
      setHoverTextHeight(hoverTextRef.current.offsetHeight);
    }
    if (contentDivRef.current) {
      setContentDivHeight(contentDivRef.current.offsetHeight);
      setContentDivWidth(contentDivRef.current.offsetWidth);
      console.log("measureing" + contentDivRef.current.offsetHeight);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const layoutId = `card-modal-${props.data?.id || "unique"}`;

  return (
    <>
      <MotionCard
        layoutId={layoutId + "card"}
        onClick={() => setIsOpenDialog(true)}
        className={clsx(
          "h-80 cursor-pointer relative px-3 transition-shadow bg-card duration-500 hover:!shadow-2xl w-full lg:px-4 pt-8 pb-5 overflow-y-hidden",
          spanClass,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
      >
        <BorderSpotlight />

        <MotionCardContent
          className="flex flex-col h-full justify-between"
          layout
        >
          <motion.div
            className="flex w-full" // Using flex here allows translateX to work within the line
            animate={{
              x:
                isHovered && (contentDivHeight > 130) & (contentDivWidth < 250)
                  ? contentDivWidth - 32
                  : 0,
            }}
            transition={transitionSpring}
          >
            <FolderArrowSVG isHovered={isHovered} />
          </motion.div>

          <motion.div
            ref={contentDivRef} // Attach ref here
            animate={{ translateY: isHovered ? -(hoverTextHeight + 6) : 0 }}
            transition={transitionSpring}
          >
            <motion.sub
              layoutId={layoutId + "tag"}
              className={`transition-colors duration-500 ${isHovered ? "!text-[#4285F4]" : ""}`}
              transition={transitionTween}
            >
              {props.data.tag}
            </motion.sub>
            <motion.h2
              layoutId={layoutId + "title"}
              transition={transitionTween}
              className={
                (clsx("!leading-[1]  mt-3 mb-4 whitespace-nowrap"),
                props.data.span === 2 ? "flex flex-wrap" : "block")
              }
            >
              {props.data.title.map((text, i) => (
                <div className="mr-1" key={i}>
                  {text}
                </div>
              ))}
            </motion.h2>
            <motion.div
              className="relative text-lg font-medium"
              layoutId={layoutId + "subtitle"}
              transition={transitionTween}
            >
              {props.data.subtitle}
              <p
                ref={hoverTextRef}
                className="absolute translate-y-1.5 font-light text-muted-foreground "
              >
                {props.data.hoverText}
              </p>
            </motion.div>
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
              className="fixed inset-0 bg-black/50 z-50 w-screen h-screen"
              onClick={handleClose}
            />

            <div className="fixed w-fit h-fit m-auto col-span-2 inset-0 z-50 flex items-center justify-center p-4">
              <MotionCard
                key="modal-card"
                layoutId={layoutId + "card"}
                className="relative z-50 w-[90vw] !h-[80vh] md:max-w-[80vw] xl:w-[50vw] bg-card p-6 rounded-lg shadow-lg overflow-auto"
                transition={transitionSpringLight}
              >
                <MotionCardContent className="flex flex-col justify-between">
                  <div className="my-24">
                    <motion.sub
                      layoutId={layoutId + "tag"}
                      className={`transition-colors duration-500 ${isHovered ? "!text-[#4285F4]" : ""}`}
                      transition={transitionTween}
                    >
                      {props.data.tag}
                    </motion.sub>

                    <motion.h2
                      layoutId={layoutId + "title"}
                      transition={transitionTween}
                      className={
                        (clsx("!leading-[1]  mt-3 mb-4 whitespace-nowrap"),
                        props.data.span === 2 ? "flex flex-wrap" : "block")
                      }
                    >
                      {props.data.title.map((text, i) => (
                        <div className="mr-1" key={i}>
                          {text}
                        </div>
                      ))}
                    </motion.h2>
                    <div className="relative mt-2">
                      <motion.div
                        className="relative m-0 text-lg font-medium"
                        layoutId={layoutId + "subtitle"}
                        transition={transitionTween}
                      >
                        {props.data.subtitle}
                        <p className="absolute translate-y-1.5 font-light text-muted-foreground hidden">
                          {props.data.hoverText}
                        </p>
                      </motion.div>
                      <div className="mt-8 flex flex-col gap-6">
                        {props.data.details.map((section, i) => (
                          <div key={i}>
                            <h3 className="text-lg font-semibold !leading-4">
                              {section.heading}
                            </h3>
                            <div className="!leading-0 text-sm font-light">
                              {section.paragraphs.map((text, j) => (
                                <ReactMarkdown key={j}>{text}</ReactMarkdown>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionCardContent>

                <button
                  onClick={handleClose}
                  className="absolute cursor-pointer top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
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
