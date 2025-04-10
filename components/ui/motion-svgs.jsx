import { motion } from "framer-motion";
import { transitionSpring } from "@/utils/motion-variants";

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
      animate={{
        color: isHovered ? "#4285F4" : "",
        height: isHovered ? 24 : 64,
        width: isHovered ? 24 : 64,
      }}
      transition={transitionSpring}
    >
      <motion.path
        animate={{
          pathLength: isHovered ? 1 : 0.85,
          pathOffset: isHovered ? 0.1 : 0,
        }}
        d="M2 16V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
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
