"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  transitionSpring,
  transitionSpringLight,
  transitionTween,
} from "@/utils/motion-variants";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import BorderSpotlight from "./motion-primitives/border-spotlight";
import { ChevronsRightSVG } from "./ui/motion-svgs.jsx";
import { itemVariants } from "@/utils/motion-variants";

// TODO: REFACTOR THIS PLEASE

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
  const [absoluteDivHeight, setabsoluteDivHeight] = useState(0);
  const hoverTextRef = useRef(null);
  const contentDivRef = useRef(null);

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
      handleMouseEnter();
    }, 100);
    setTimeout(() => {
      handleMouseLeave();
    }, 1500);
  };

  const handleMouseEnter = () => {
    if (hoverTextRef.current) {
      setHoverTextHeight(hoverTextRef.current.offsetHeight);
      setabsoluteDivHeight(hoverTextRef.current.offsetHeight);
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
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true, margin: "-150px" }}
        onClick={() => setIsOpenDialog(true)}
        className={clsx(
          "h-80 cursor-pointer relative px-3 transition-shadow bg-card duration-500 hover:!shadow-2xl w-full lg:px-2 pt-8 pb-5 overflow-y-hidden",
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
            className="flex w-full"
            animate={{
              x:
                isHovered &&
                contentDivHeight + absoluteDivHeight > 221 &&
                contentDivWidth < 300
                  ? contentDivWidth - 32
                  : 0,
            }}
            transition={transitionSpring}
          >
            {props.data.icon?.(isHovered)}
          </motion.div>
          <motion.div
            ref={contentDivRef}
            animate={{ translateY: isHovered ? -(hoverTextHeight + 12) : 0 }}
            transition={transitionSpring}
          >
            <motion.sub
              layoutId={layoutId + "tag"}
              className={`transition-colors duration-500 ${isHovered ? "!text-accent-foreground" : ""}`}
              transition={transitionTween}
            >
              {props.data.tag}
            </motion.sub>
            <motion.h2
              layoutId={layoutId + "title"}
              transition={transitionTween}
              className={clsx(" whitespace-nowrap mt-2 flex flex-wrap")}
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
      {/* Modal controlled by AnimatePresence */}
      <AnimatePresence>
        {isOpenDialog && (
          <>
            {/* Overlay remains the same */}
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
                className="relative z-50 w-[90vw] !h-[80vh] md:max-w-[80vw] xl:w-[50vw] bg-card p-2 lg:px-5 rounded-lg shadow-lg overflow-auto"
                transition={transitionSpringLight}
              >
                <MotionCardContent className="flex flex-col justify-between">
                  <div className="my-24">
                    <motion.sub
                      layoutId={layoutId + "tag"}
                      className={`transition-colors duration-500 ${isHovered ? "!text-accent-foreground" : ""}`}
                      transition={transitionTween}
                    >
                      {props.data.tag}
                    </motion.sub>
                    <motion.h1
                      layoutId={layoutId + "title"}
                      transition={transitionTween}
                      className={clsx(
                        " whitespace-nowrap mt-2 flex items-center flex-wrap",
                      )}
                    >
                      {props.data.title.map((text, i) => (
                        <div className="mr-1 leading-tight" key={i}>
                          {text}
                        </div>
                      ))}

                      <ChevronsRightSVG isHovered={isHovered} />
                    </motion.h1>
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

                      <motion.div
                        exit={{ filter: "blur(5px)" }}
                        initial={{ filter: "blur(5px)" }}
                        animate={{ filter: "blur(0px)" }}
                        transition={transitionTween}
                        className="mt-8 flex flex-col gap-6"
                      >
                        {props.data.details.map((section, i) => (
                          <div key={i}>
                            <h2 className="text-lg font-semibold !leading-snug">
                              {section.heading}
                            </h2>
                            <div className="font-light markdown-content">
                              {section.paragraphs.map((text, j) => (
                                <ReactMarkdown key={j}>{text}</ReactMarkdown>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </MotionCardContent>

                <motion.button
                  exit={{ filter: "blur(5px)" }}
                  initial={{ filter: "blur(5px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={transitionTween}
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
                </motion.button>
              </MotionCard>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
