import { motion } from "framer-motion";
import { transitionSpring, transitionTween } from "@/utils/motion-variants";

export const getResizeIconVariant = (isHovered) => ({
  color: isHovered ? "#4285F4" : "",
  height: isHovered ? 40 : 64,
  width: isHovered ? 40 : 64,
});

export const FolderArrowSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-folder-symlink-icon lucide-folder-symlink"
      animate={getResizeIconVariant(isHovered)}
      transition={transitionSpring}
    >
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0.85,
          pathOffset: isHovered ? 0.1 : 0,
        }}
        d="M2 16.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
      />
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0, ease: "easeOut" }}
        d="m8 16 3-3-3-3"
      />
      <motion.path
        animate={{
          // pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={
          isHovered
            ? {
                duration: 0.5, // total time for one blink cycle
                repeatDelay: 0.5, // time between blinks
                repeat: Infinity, // loop it
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
        d="M 19 17H12"
      />
    </motion.svg>
  );
};

export const BookOpenSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-open-check-icon lucide-book-open-check"
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

export const BookHeartSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-heart-icon lucide-book-heart"
      animate={getResizeIconVariant(isHovered)}
    >
      <motion.path
        d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
        animate={{ scale: isHovered ? 1.1 : 0.9 }}
        transition={
          isHovered
            ? {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 0.3, // Adjust speed here
                repeatDelay: 0.1,
              }
            : {}
        }
      />
      <motion.path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </motion.svg>
  );
};

export const CalendarRotateSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calendar-sync-icon lucide-calendar-sync"
      animate={getResizeIconVariant(isHovered)}
    >
      <motion.g
        animate={{ rotate: isHovered ? -180 : 0 }}
        style={{ originX: 0.5, originY: 0.5 }}
        transition={{ type: "spring", damping: 50, stiffness: 300 }}
      >
        <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
        <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
        <path d="M11 10v4h4" />
        <path d="M21 22v-4h-4" />
      </motion.g>

      <path d="M16 2v4" />
      <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
      <path d="M3 10h4" />
      <path d="M8 2v4" />
    </motion.svg>
  );
};

export const MonitorCogSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-monitor-cog-icon lucide-monitor-cog"
      animate={getResizeIconVariant(isHovered)}
    >
      <path d="M12 17v4" />
      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <path d="M8 21h8" />
      <motion.g animate={{ rotate: isHovered ? 180 : 0 }}>
        <motion.g
          animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
          transition={
            isHovered
              ? {
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 1, // Adjust speed here
                }
              : {
                  duration: 0.5,
                  ease: "linear",
                }
          }
        >
          <path d="m15.2 4.9-.9-.4" />
          <path d="m15.2 7.1-.9.4" />
          <path d="m16.9 3.2-.4-.9" />
          <path d="m16.9 8.8-.4.9" />
          <path d="m19.5 2.3-.4.9" />
          <path d="m19.5 9.7-.4-.9" />
          <path d="m21.7 4.5-.9.4" />
          <path d="m21.7 7.5-.9-.4" />
          <circle cx="18" cy="6" r="3" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export const ChevronsRightSVG = ({ isHovered }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevrons-right-icon lucide-chevrons-right"
      animate={{ rotate: isHovered ? 90 : 0 }}
      style={{ marginTop: "0.25rem" }}
    >
      <motion.path
        animate={{ translateX: isHovered ? 3 : 0 }}
        d="m6 17 5-5-5-5"
      />
      <motion.path
        animate={{ translateX: isHovered ? -4 : 0 }}
        d="m13 17 5-5-5-5"
      />
    </motion.svg>
  );
};
